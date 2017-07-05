/*
 * Copyright (C) 2014-2017 Andrea Feccomandi
 *
 * Licensed under the terms of GNU GPL License;
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.gnu.org/licenses/gpl-2.0.html
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY.
 * See the GNU General Public License for more details.
 *
 */
angular.
module('bibiscoApp').
component('richtexteditor', {
  templateUrl: 'components/common/uielements/richtexteditor/richtexteditor.html',
  controller: RichTextEditorController,
  bindings: {
    content: '@',
    contentstyle: '@'
  }
});


function RichTextEditorController($document, $timeout, LoggerService,
  SanitizeHtmlService) {

  LoggerService.debug('Start RichTextEditorController...');

  var self = this;
  self.boldactive = false;
  self.italicactive = false;
  self.underlineactive = false;
  self.strikethroughactive = false;
  self.highlightactive = false;
  self.aligncenteractive = false;
  self.alignleftactive = false;
  self.alignrightactive = false;
  self.justifyactive = false;
  self.orderedlistactive = false;
  self.unorderedlistactive = false;

  self.disablestylebuttons = function() {
    self.boldactive = false;
    self.italicactive = false;
    self.underlineactive = false;
    self.strikethroughactive = false;
    self.highlightactive = false;
    self.aligncenteractive = false;
    self.alignleftactive = false;
    self.alignrightactive = false;
    self.justifyactive = false;
    self.orderedlistactive = false;
    self.unorderedlistactive = false;
  }

  self.checkselectionstate = function() {

    if ($document[0].queryCommandState('bold')) {
      self.boldactive = true;
    } else {
      self.boldactive = false;
    }

    if ($document[0].queryCommandState('italic')) {
      self.italicactive = true;
    } else {
      self.italicactive = false;
    }

    if ($document[0].queryCommandState('underline')) {
      self.underlineactive = true;
    } else {
      self.underlineactive = false;
    }

    if ($document[0].queryCommandState('strikeThrough')) {
      self.strikethroughactive = true;
    } else {
      self.strikethroughactive = false;
    }

    if ($document[0].queryCommandValue("BackColor").toString() ==
      'rgb(255, 255, 0)') {
      self.highlightactive = true;
    } else {
      self.highlightactive = false;
    }

    if ($document[0].queryCommandState('justifyCenter')) {
      self.aligncenteractive = true;
    } else {
      self.aligncenteractive = false;
    }

    if ($document[0].queryCommandState('justifyLeft')) {
      self.alignleftactive = true;
    } else {
      self.alignleftactive = false;
    }

    if ($document[0].queryCommandState('justifyRight')) {
      self.alignrightactive = true;
    } else {
      self.alignrightactive = false;
    }

    if ($document[0].queryCommandState('justifyFull')) {
      self.justifyactive = true;
    } else {
      self.justifyactive = false;
    }

    if ($document[0].queryCommandState('insertOrderedList')) {
      self.orderedlistactive = true;
    } else {
      self.orderedlistactive = false;
    }

    if ($document[0].queryCommandState('insertUnorderedList')) {
      self.unorderedlistactive = true;
    } else {
      self.unorderedlistactive = false;
    }
  }

  self.undo = function() {
    $document[0].execCommand('undo');
  }

  self.redo = function() {
    $document[0].execCommand('redo');
  }

  self.print = function() {
    var printMe = document.getElementById("richtexteditor");
    var printIframe = document.createElement('iframe');
    printIframe.name = "name_for_iframe";
    document.body.appendChild(printIframe);
    var printIframeWindow = window.frames["name_for_iframe"];
    var printDocument = printIframeWindow.document;
    printDocument.write("<html><body></body></html>");
    printDocument.body.innerHTML = printMe.innerHTML;
    var result = printIframeWindow.print();
    printIframe.parentNode.removeChild(printIframe);
  }

  self.copy = function() {
    $document[0].execCommand('copy');
  }

  self.cut = function() {
    $document[0].execCommand('cut');
  }

  self.paste = function() {
    $timeout(function() {
      $document[0].execCommand('paste');
    });
  }

  self.bold = function() {
    $document[0].execCommand('bold');
    self.checkselectionstate();
  }

  self.italic = function() {
    $document[0].execCommand('italic');
    self.checkselectionstate();
  }

  self.underline = function() {
    $document[0].execCommand('underline');
    self.checkselectionstate();
  }

  self.strikethrough = function() {
    $document[0].execCommand('strikeThrough');
    self.checkselectionstate();
  }

  self.highlight = function() {
    if ($document[0].queryCommandValue("BackColor").toString() ==
      'rgb(255, 255, 0)') {
      $document[0].execCommand("hiliteColor", false, 'inherit');
    } else {
      $document[0].execCommand("hiliteColor", false, 'yellow');
    }

    self.checkselectionstate();
  }

  self.leftguillemet = function() {
    $document[0].execCommand('insertText', false, '«');
    self.checkselectionstate();
  }

  self.rightguillemet = function() {
    $document[0].execCommand('insertText', false, '»');
    self.checkselectionstate();
  }

  self.emdash = function() {
    $document[0].execCommand('insertText', false, '—');
    self.checkselectionstate();
  }

  self.orderedlist = function() {
    $document[0].execCommand('insertOrderedList');
    self.checkselectionstate();
  }

  self.unorderedlist = function() {
    $document[0].execCommand('insertUnorderedList');
    self.checkselectionstate();
  }

  self.aligncenter = function() {
    $document[0].execCommand('justifyCenter');
    self.checkselectionstate();
  }

  self.alignleft = function() {
    $document[0].execCommand('justifyLeft');
    self.checkselectionstate();
  }

  self.alignright = function() {
    $document[0].execCommand('justifyRight');
    self.checkselectionstate();
  }

  self.justify = function() {
    $document[0].execCommand('justifyFull');
    self.checkselectionstate();
  }

  self.sanitizePaste = function($event) {
    let text;
    let sanitizedText;
    if ($event.clipboardData) {
      try {
        text = $event.clipboardData.getData('text/html');
        sanitizedText = SanitizeHtmlService.sanitize(text);
      } catch (ex) {
        text = undefined;
      }
    }
    if (text) {
      $event.preventDefault();
      $timeout(function() {
        $document[0].execCommand('insertHTML', false, sanitizedText);
      });
    }
  }

  LoggerService.debug('End RichTextEditorController...');
}