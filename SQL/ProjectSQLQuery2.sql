/****** Script for SelectTopNRows command from SSMS  ******/
SELECT TOP 1000 [subcategory_id]
      ,[subcategory_name]
      ,[subcategory_brief]
      ,[category_id]
      ,[gst]
  FROM [EMartDB].[dbo].[SubCategory]

  insert into SubCategory values (1,'Gadgets','Excellent',1,1234)
  select * from SubCategory