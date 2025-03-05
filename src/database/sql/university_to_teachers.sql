CREATE TABLE university_to_teacher (
  id TEXT NOT NULL PRIMARY KEY,
  university_id TEXT NOT NULL,
  teacher_id TEXT NOT NULL,
  created_at TEXT DEFAULT CURRENT_TIMESTAMP,
  updated_at TEXT,
  
  FOREIGN KEY (university_id) REFERENCES universities(id),
  FOREIGN KEY (teacher_id) REFERENCES persons(id)
);
