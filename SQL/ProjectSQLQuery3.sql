/****** Script for SelectTopNRows command from SSMS  ******/
SELECT TOP 1000 [category_id]
      ,[category_name]
      ,[category_brief]
  FROM [EMartDB].[dbo].[Category]
  
  insert into Category values(1,'Electronics','Goods')
  select * from Category