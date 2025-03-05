CREATE TABLE class_room_to_students (
  id TEXT NOT NULL PRIMARY KEY,
  class_room_id TEXT NOT NULL,
  student_id TEXT NOT NULL,
  created_at TEXT DEFAULT CURRENT_TIMESTAMP,
  updated_at TEXT,
  FOREIGN KEY (class_room_id) REFERENCES class_rooms(id),
  FOREIGN KEY (student_id) REFERENCES persons(id)
);
