CREATE TABLE university_to_students (
  id TEXT NOT NULL PRIMARY KEY,
  university_id TEXT NOT NULL,
  student_id TEXT NOT NULL,
  created_at TEXT DEFAULT CURRENT_TIMESTAMP,
  updated_at TEXT,
  
  FOREIGN KEY (university_id) REFERENCES universities(id),
  FOREIGN KEY (student_id) REFERENCES persons(id)
);
