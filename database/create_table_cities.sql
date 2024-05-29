CREATE TABLE Cities (
    id INT PRIMARY KEY AUTO_INCREMENT,
    city_name VARCHAR(100) NOT NULL,
    country VARCHAR(100)
);

-- Insert sample cities
INSERT INTO Cities (city_name, country) VALUES
('Arad', 'Romania'),
('Cluj-Napoca', 'Romania'),
('Berlin', 'Germany'),
('Paris', 'France'),
('Madrid', 'Spain');
