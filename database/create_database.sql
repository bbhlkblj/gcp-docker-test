create database people;
use people;

create table person (
    ID int not null auto_increment primary key,
    PersonName nvarchar(200) not null
);