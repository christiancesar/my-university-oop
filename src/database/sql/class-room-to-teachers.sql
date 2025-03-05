CREATE TABLE class_room_to_teachers (
  id TEXT NOT NULL PRIMARY KEY,
  class_room_id TEXT NOT NULL,
  teacher_id TEXT NOT NULL,
  created_at TEXT DEFAULT CURRENT_TIMESTAMP,
  updated_at TEXT,
  FOREIGN KEY (class_room_id) REFERENCES class_rooms(id),
  FOREIGN KEY (teacher_id) REFERENCES persons(id)
);
