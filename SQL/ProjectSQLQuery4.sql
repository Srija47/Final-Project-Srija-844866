/****** Script for SelectTopNRows command from SSMS  ******/
SELECT TOP 1000 [id]
      ,[categoryid]
      ,[subcategoryid]
      ,[price]
      ,[itemname]
      ,[description]
      ,[stocknumber]
      ,[remarks]
  FROM [EMartDB].[dbo].[Items]

