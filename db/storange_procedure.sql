-- GET ALL --

CREATE PROCEDURE SP_GetAllCars()
BEGIN
    SELECT * FROM Cars;
END;

-- GET ID

CREATE PROCEDURE SP_GetCar(
    IN IdCar SMALLINT,
    OUT Flag BIT 
)
BEGIN
    -- Se verifica que el id no sea nulo
    IF IdCar = null THEN
        SET Flag = 0;
    ELSE
        -- Se verifica que el auto exista
        IF exists(SELECT * FROM Cars where Id = IdCar) = 1 THEN
            SELECT * FROM Cars WHERE Id = IdCar;
            SET Flag = 1;

        ELSE 
            SET Flag = 0;

        END IF;
    END IF;
END;

-- INSERT 

CREATE PROCEDURE SP_CreateCar(
    IN NewMark VARCHAR(20),
    IN NewModel VARCHAR(50),
    IN NewTransmission VARCHAR(14),
    IN NewColor VARCHAR(20),
    IN NewImages VARCHAR(100),
    IN NewDoors SMALLINT,
    OUT Flag BIT 
)
BEGIN
    -- Se verifica que los datos sea nulo o sea una cadena vacia --
    IF NewMark = '' OR NewModel  = '' OR NewTransmission  = '' OR NewColor = '' OR NewImages  = '' OR NewDoors  = '' THEN
        SET Flag = 0;
    ELSE
        INSERT INTO Cars (Mark, Model, Transmission, Color, Images, Doors) 
        VALUES (NewMark, NewModel, NewTransmission, NewColor, NewImages, NewDoors);   
        
        SET Flag = 1;

    END IF;
END;

-- UPDATE

CREATE PROCEDURE SP_UpdateCar(
    IN IdCar SMALLINT,
    IN NewMark VARCHAR(20),
    IN NewModel VARCHAR(50),
    IN NewTransmission VARCHAR(14),
    IN NewColor VARCHAR(20),
    IN NewImages VARCHAR(100),
    IN NewDoors SMALLINT,
    OUT Flag BIT 
)
BEGIN
    -- Se verifica que los datos sea nulo o sea una cadena vacia --
    IF IdCar = null OR NewMark = '' OR NewModel  = '' OR NewTransmission  = '' OR NewColor = '' OR NewImages  = '' OR NewDoors  = '' THEN
        SET Flag = 0;
    ELSE
        -- Se verifica que el Auto exista --
        IF exists(select * from Cars where Id = IdCar) = 1 THEN
            UPDATE Cars
            SET 
                Mark = NewMark,
                Model = NewModel,
                Transmission = NewTransmission,
                Color = NewColor,
                Images = NewImages,
                Doors = NewDoors
            WHERE Id = IdCar;

            SET Flag = 1;
        ELSE 
            SET Flag = 0;

        END IF;
    END IF;
END;

-- DELETE

CREATE PROCEDURE SP_DeleteCar(
    IN IdCar SMALLINT,
    OUT Flag BIT 
)
BEGIN
    -- Verifica que el id no sea null
    IF IdCar = null THEN
        SET Flag = 0;
    ELSE
        -- Verifica que el Auto exista
        IF exists(select * from Cars where Id = IdCar) = 1 THEN
    
            DELETE FROM Cars where Id = IdCar;
    
            SET Flag = 1;

        ELSE 
            SET Flag = 0;

        END IF;
    END IF;
END;