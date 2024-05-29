CREATE TABLE Equipments (
    id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT,
    equipment_name VARCHAR(100) NOT NULL,
    equipment_type VARCHAR(50),
    purchase_date DATE,
    equipment_condition VARCHAR(50),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES Users(id)
);

-- Insert three pieces of equipment for user 1
INSERT INTO Equipments (user_id, equipment_name, equipment_type, purchase_date, equipment_condition) VALUES
(1, 'Treadmill', 'Cardio', '2023-01-15', 'New'),
(1, 'Dumbbell Set', 'Strength', '2023-03-10', 'Good'),
(1, 'Rowing Machine', 'Cardio', '2023-05-22', 'Excellent');

-- Insert one piece of equipment for user 3
INSERT INTO Equipments (user_id, equipment_name, equipment_type, purchase_date, equipment_condition) VALUES
(3, 'Exercise Bike', 'Cardio', '2022-11-25', 'Fair');
