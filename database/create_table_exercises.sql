-- Create Exercises table
CREATE TABLE Exercises (
    id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT NOT NULL,
    exercise_name VARCHAR(100) NOT NULL,
    muscle_group VARCHAR(100),
    equipment_used VARCHAR(100),
    sets INT,
    reps INT,
    duration INT, -- duration in minutes or seconds, depending on exercise type
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES Users(id)
);

-- Insert sample exercises
INSERT INTO Exercises (user_id, exercise_name, muscle_group, equipment_used, sets, reps, duration) VALUES
(1, 'Squats', 'Legs', 'Barbell', 4, 12, NULL),
(1, 'Bench Press', 'Chest', 'Barbell', 3, 10, NULL),
(1, 'Running', 'Cardio', 'Treadmill', NULL, NULL, 30),
(3, 'Pull-ups', 'Back', 'None', 4, 8, NULL);