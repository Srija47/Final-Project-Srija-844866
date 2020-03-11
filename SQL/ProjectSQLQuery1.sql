create database EMartDB

use EMartDB

create table Buyer(bid int primary key,
username varchar(20) not null,
password varchar(20) not null,
emailid varchar(20) not null,
mobileno varchar(20) not null,
datetime date not null)
select * from Buyer

create table Seller(sid int primary key,
username varchar(20) not null,
password varchar(20) not null,
companyname varchar(20) not null,
gst int not null,
aboutcmpy varchar(20) not null,
address varchar(20) not null,
website varchar(20) not null,
email varchar(20) not null,
mobileno varchar(20) not null
)
select * from Seller


create table Category(category_id int primary key,
category_name varchar(20) not null,
category_brief varchar(20)
)
select * from Category

create table SubCategory(subcategory_id int primary key,
subcategory_name varchar(20) not null,
subcategory_brief varchar(20),
category_id int foreign key references Category(category_id),
gst int)

select * from SubCategory

create table Items(id int primary key,
categoryid int foreign key references Category(category_id),
subcategoryid int foreign key references SubCategory(subcategory_id),
price varchar(20) not null,
itemname varchar(20) not null,
description varchar(20),
stocknumber int,
remarks varchar(20)
)
select * from Items
create table Purchase_History(id int primary key,
bid int foreign key references Buyer(bid),
sid int foreign key references Seller(sid),
transaction_type varchar(20),
item_id int foreign key references Items(id),
no_of_items int not null,
datetime date not null,
remarks varchar(20))
select * from Purchase_History

create table Users(uname varchar(20) not null,pwd varchar(20) not null)
select * from Users
 create table Discounts(id int,
 discount_code varchar(20),percentage decimal,
 startdate date not null,
 enddate date not null,
 description varchar(20)
  )

  select * from Discounts