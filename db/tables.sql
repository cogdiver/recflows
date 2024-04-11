CREATE TABLE apps (
  id VARCHAR(255) PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  description TEXT
);

-- CREATE TABLE sources (
--   id INT AUTO_INCREMENT PRIMARY KEY,
--   app_id INT NOT NULL,
--   name VARCHAR(255) NOT NULL,
--   type VARCHAR(100),
--   FOREIGN KEY (app_id) REFERENCES apps(app_id)
-- );

-- CREATE TABLE datasets (
--   id INT AUTO_INCREMENT PRIMARY KEY,
--   app_id INT NOT NULL,
--   name VARCHAR(255) NOT NULL,
--   creation_date DATE,
--   FOREIGN KEY (app_id) REFERENCES apps(app_id)
-- );

-- CREATE TABLE solutions (
--   id INT AUTO_INCREMENT PRIMARY KEY,
--   app_id INT NOT NULL,
--   name VARCHAR(255) NOT NULL,
--   description TEXT,
--   FOREIGN KEY (app_id) REFERENCES apps(app_id)
-- );

-- CREATE TABLE models (
--   id INT AUTO_INCREMENT PRIMARY KEY,
--   solution_id INT NOT NULL,
--   name VARCHAR(255) NOT NULL,
--   type VARCHAR(100),
--   FOREIGN KEY (solution_id) REFERENCES solutions(solution_id)
-- );

-- CREATE TABLE versions (
--   id INT AUTO_INCREMENT PRIMARY KEY,
--   model_id INT NOT NULL,
--   version_number VARCHAR(50) NOT NULL,
--   FOREIGN KEY (model_id) REFERENCES models(model_id)
-- );

-- CREATE TABLE recommenders (
--   id INT AUTO_INCREMENT PRIMARY KEY,
--   version_id INT NOT NULL,
--   name VARCHAR(255) NOT NULL,
--   FOREIGN KEY (version_id) REFERENCES versions(version_id)
-- );

-- CREATE TABLE tutorials (
--   id INT AUTO_INCREMENT PRIMARY KEY,
--   solution_id INT NOT NULL,
--   title VARCHAR(255) NOT NULL,
--   content TEXT,
--   FOREIGN KEY (solution_id) REFERENCES solutions(solution_id)
-- );

-- CREATE TABLE audits (
--   id INT AUTO_INCREMENT PRIMARY KEY,
--   app_id INT NOT NULL,
--   name VARCHAR(255) NOT NULL,
--   date DATE,
--   FOREIGN KEY (app_id) REFERENCES apps(app_id)
-- );

-- CREATE TABLE channels (
--   id INT AUTO_INCREMENT PRIMARY KEY,
--   recommender_id INT NOT NULL,
--   name VARCHAR(255) NOT NULL,
--   type VARCHAR(100),
--   FOREIGN KEY (recommender_id) REFERENCES recommenders(recommender_id)
-- );

-- CREATE TABLE variables (
--   id INT AUTO_INCREMENT PRIMARY KEY,
--   app_id INT NOT NULL,
--   key VARCHAR(255) NOT NULL,
--   value TEXT,
--   FOREIGN KEY (app_id) REFERENCES apps(app_id)
-- );
