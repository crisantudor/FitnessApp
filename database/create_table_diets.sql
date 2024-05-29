CREATE TABLE Diets (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    title VARCHAR(255),
    description TEXT,
    FOREIGN KEY (user_id) REFERENCES Users(id)
);