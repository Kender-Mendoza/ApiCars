CREATE DATABASE Cars;

USE Cars;

CREATE TABLE Cars (
    Id SMALLINT AUTO_INCREMENT PRIMARY KEY NOT NULL,
    Mark VARCHAR(20) NOT NULL,
    Model VARCHAR(50) NOT NULL UNIQUE,
    Transmission VARCHAR(14) NOT NULL CHECK(Transmission in('Manual','Automatic', 'Semiautomatic')),
    Color VARCHAR(20) NOT NULL,
    Images VARCHAR(100) NULL UNIQUE,
    Doors SMALLINT NOT NULL
);

INSERT INTO Cars (Mark,Model,Transmission,Color,Images,Doors) VALUES 
('Lamborghini','Aventador','Manual','Green','https://images-na.ssl-images-amazon.com/images/I/51aN%2BLvNvwL._AC_SX425_.jpg',2),
('Mitsubishi','lancer','Manual','Rojo','https://cdn.pixabay.com/photo/2014/08/06/15/35/racing-car-411738_960_720.jpg',2);

SELECT * FROM Cars;