CREATE TABLE diciplines (
  id TEXT NOT NULL PRIMARY KEY,
  short_id TEXT,
  name TEXT NOT NULL,
  period TEXT,
  pre_requisite_id TEXT,
  workload_practical INTEGER NOT NULL,
  workload_theoretical INTEGER NOT NULL,
  created_at TEXT DEFAULT CURRENT_TIMESTAMP,
  updated_at TEXT,

  FOREIGN KEY (pre_requisite_id) REFERENCES diciplines(id);
)
