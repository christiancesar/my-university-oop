CREATE TABLE class_rooms (
  id TEXT NOT NULL PRIMARY KEY,
  room TEXT NOT NULL,
  discipline_id TEXT NOT NULL,
  created_at TEXT DEFAULT CURRENT_TIMESTAMP,
  updated_at TEXT,
);
