CREATE TABLE apps (
  id VARCHAR(255) PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  description TEXT
);

CREATE TABLE variables (
  id VARCHAR(255) PRIMARY KEY,
  app_id VARCHAR(255),
  `key` VARCHAR(255) NOT NULL,
  value TEXT,
  FOREIGN KEY (app_id) REFERENCES apps(id) ON DELETE CASCADE
);

CREATE TABLE sources (
  id VARCHAR(255) PRIMARY KEY,
  module VARCHAR(255) NOT NULL,
  kwargs JSON NOT NULL
);

CREATE TABLE datasets (
  id VARCHAR(255) PRIMARY KEY,
  app_id VARCHAR(255) NOT NULL,
  name VARCHAR(255) NOT NULL,
  FOREIGN KEY (app_id) REFERENCES apps(id) ON DELETE CASCADE
);

CREATE TABLE dataset_has_sources (
  source_id VARCHAR(255),
  dataset_id VARCHAR(255),
  FOREIGN KEY (source_id) REFERENCES sources(id) ON DELETE CASCADE,
  FOREIGN KEY (dataset_id) REFERENCES datasets(id) ON DELETE CASCADE
);

CREATE TABLE solutions (
  id VARCHAR(255) PRIMARY KEY,
  module VARCHAR(255) NOT NULL
);

CREATE TABLE models (
  id VARCHAR(255) PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  kwargs JSON NOT NULL,
  app_id VARCHAR(255) NOT NULL,
  solution_id VARCHAR(255),
  FOREIGN KEY (app_id) REFERENCES apps(id) ON DELETE CASCADE,
  FOREIGN KEY (solution_id) REFERENCES solutions(id) ON DELETE CASCADE
);

CREATE TABLE versions (
  id VARCHAR(255) PRIMARY KEY,
  model_id VARCHAR(255) NOT NULL,
  FOREIGN KEY (model_id) REFERENCES models(id) ON DELETE CASCADE
);

CREATE TABLE recommenders (
  id VARCHAR(255) PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  kwargs JSON NOT NULL,
  app_id VARCHAR(255) NOT NULL,
  model_id VARCHAR(255) NOT NULL,
  version_id VARCHAR(255) NOT NULL,
  FOREIGN KEY (app_id) REFERENCES apps(id) ON DELETE CASCADE,
  FOREIGN KEY (model_id) REFERENCES models(id) ON DELETE CASCADE,
  FOREIGN KEY (version_id) REFERENCES versions(id) ON DELETE CASCADE
);

CREATE TABLE channels (
  id VARCHAR(255) PRIMARY KEY,
  module VARCHAR(255) NOT NULL,
  kwargs JSON NOT NULL
);

CREATE TABLE recommender_uses_channel (
  recommender_id VARCHAR(255),
  channel_id VARCHAR(255),
  FOREIGN KEY (recommender_id) REFERENCES recommenders(id) ON DELETE CASCADE,
  FOREIGN KEY (channel_id) REFERENCES channels(id) ON DELETE CASCADE
);

CREATE TABLE tutorials (
  id VARCHAR(255) PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  content TEXT NOT NULL,
  solution_id VARCHAR(255),
  FOREIGN KEY (solution_id) REFERENCES solutions(id) ON DELETE CASCADE
);

CREATE TABLE audits (
  id VARCHAR(255) PRIMARY KEY,
  module VARCHAR(255) NOT NULL,
  kwargs JSON NOT NULL,
  source_id VARCHAR(255),
  FOREIGN KEY (source_id) REFERENCES sources(id) ON DELETE CASCADE
);
