create table Cart(id int primary key,
categoryid int foreign key references Category(categoryid),
subcategoryid int foreign key references SubCategory(subcategoryid),
bid int foreign key references Buyer(bid),
sid int foreign key references Seller(sid),
item_id int foreign key references Items(id),
price varchar(30),
itemname varchar(30),
description varchar(30),
stocknumber int not null,
remarks varchar(20),
imagename varchar(20))
select * from Cart
alter table Cart modify column price int not null

create table Purchase_history(id int primary key,
bid int foreign key references Buyer(bid),
sid int foreign key references Seller(sid),
transactiontype varchar(20) not null,
itemid int foreign key references Items(id),
noofitems int,
datetime date not null,
remarks varchar(20))