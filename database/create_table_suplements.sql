-- Create Supplements table
CREATE TABLE Supplements (
    id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT NOT NULL,
    supplement_name VARCHAR(100) NOT NULL,
    supplement_type VARCHAR(50),
    brand VARCHAR(100),
    purchase_date DATE,
    dosage VARCHAR(50),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES Users(id)
);

-- Insert sample supplements
INSERT INTO Supplements (user_id, supplement_name, supplement_type, brand, purchase_date, dosage) VALUES
(1, 'Whey Protein', 'Protein', 'Optimum Nutrition', '2023-01-15', '1 scoop daily'),
(1, 'Multivitamin', 'Vitamin', 'Centrum', '2023-03-10', '1 tablet daily'),
(2, 'Fish Oil', 'Omega-3', 'Nordic Naturals', '2023-02-20', '2 capsules daily'),
(3, 'Creatine', 'Performance', 'MuscleTech', '2023-05-22', '5g daily');