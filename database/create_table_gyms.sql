-- Create Gyms table
CREATE TABLE Gyms (
    id INT PRIMARY KEY AUTO_INCREMENT,
    gym_name VARCHAR(100) NOT NULL,
    city_id INT,
    location VARCHAR(255),
    contact_number VARCHAR(20),
    email VARCHAR(100),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (city_id) REFERENCES Cities(id)
);

-- Insert sample gyms
INSERT INTO Gyms (gym_name, city_id, location, contact_number, email) VALUES
('Fitness First', (SELECT id FROM Cities WHERE city_name = 'Berlin'), 'Kurfürstendamm 21', '030-1234567', 'contact@fitnessfirst.de'),
('Gold\'s Gym', (SELECT id FROM Cities WHERE city_name = 'Paris'), 'Rue de Rivoli 118', '01-2345678', 'info@goldsgym.fr'),
('Anytime Fitness', (SELECT id FROM Cities WHERE city_name = 'Madrid'), 'Calle de Alcalá 42', '91-5555555', 'support@anytimefitness.es'),
('Arad Gym', (SELECT id FROM Cities WHERE city_name = 'Arad'), 'Strada Revoluției 45', '257-123456', 'contact@aradgym.ro'),
('Cluj Fitness', (SELECT id FROM Cities WHERE city_name = 'Cluj-Napoca'), 'Bulevardul Eroilor 21', '264-789012', 'info@clujfitness.ro');
