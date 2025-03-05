CREATE TABLE dailies (
  id TEXT NOT NULL PRIMARY KEY,
  description TEXT NOT NULL,
  workload_pratical INTEGER NOT NULL,
  workload_theoretical INTEGER NOT NULL,
  created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TEXT,

  class_room_id TEXT NOT NULL,
  FOREIGN KEY (class_room_id) REFERENCES class_rooms(id)
)
