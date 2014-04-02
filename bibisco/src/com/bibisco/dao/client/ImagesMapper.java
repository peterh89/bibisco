package com.bibisco.dao.client;

import com.bibisco.dao.model.Images;
import com.bibisco.dao.model.ImagesExample;
import java.util.List;
import org.apache.ibatis.annotations.Param;

public interface ImagesMapper {

	/**
	 * This method was generated by MyBatis Generator. This method corresponds to the database table PUBLIC.IMAGES
	 * @mbggenerated  Mon Mar 10 22:10:34 CET 2014
	 */
	int countByExample(ImagesExample example);

	/**
	 * This method was generated by MyBatis Generator. This method corresponds to the database table PUBLIC.IMAGES
	 * @mbggenerated  Mon Mar 10 22:10:34 CET 2014
	 */
	int deleteByExample(ImagesExample example);

	/**
	 * This method was generated by MyBatis Generator. This method corresponds to the database table PUBLIC.IMAGES
	 * @mbggenerated  Mon Mar 10 22:10:34 CET 2014
	 */
	int deleteByPrimaryKey(Long idImage);

	/**
	 * This method was generated by MyBatis Generator. This method corresponds to the database table PUBLIC.IMAGES
	 * @mbggenerated  Mon Mar 10 22:10:34 CET 2014
	 */
	int insert(Images record);

	/**
	 * This method was generated by MyBatis Generator. This method corresponds to the database table PUBLIC.IMAGES
	 * @mbggenerated  Mon Mar 10 22:10:34 CET 2014
	 */
	int insertSelective(Images record);

	/**
	 * This method was generated by MyBatis Generator. This method corresponds to the database table PUBLIC.IMAGES
	 * @mbggenerated  Mon Mar 10 22:10:34 CET 2014
	 */
	List<Images> selectByExample(ImagesExample example);

	/**
	 * This method was generated by MyBatis Generator. This method corresponds to the database table PUBLIC.IMAGES
	 * @mbggenerated  Mon Mar 10 22:10:34 CET 2014
	 */
	Images selectByPrimaryKey(Long idImage);

	/**
	 * This method was generated by MyBatis Generator. This method corresponds to the database table PUBLIC.IMAGES
	 * @mbggenerated  Mon Mar 10 22:10:34 CET 2014
	 */
	int updateByExampleSelective(@Param("record") Images record, @Param("example") ImagesExample example);

	/**
	 * This method was generated by MyBatis Generator. This method corresponds to the database table PUBLIC.IMAGES
	 * @mbggenerated  Mon Mar 10 22:10:34 CET 2014
	 */
	int updateByExample(@Param("record") Images record, @Param("example") ImagesExample example);

	/**
	 * This method was generated by MyBatis Generator. This method corresponds to the database table PUBLIC.IMAGES
	 * @mbggenerated  Mon Mar 10 22:10:34 CET 2014
	 */
	int updateByPrimaryKeySelective(Images record);

	/**
	 * This method was generated by MyBatis Generator. This method corresponds to the database table PUBLIC.IMAGES
	 * @mbggenerated  Mon Mar 10 22:10:34 CET 2014
	 */
	int updateByPrimaryKey(Images record);
}