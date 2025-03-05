CREATE TABLE
  universities (
    id TEXT NOT NULL PRIMARY KEY,
    name TEXT NOT NULL,
    created_at TEXT DEFAULT CURRENT_TIMESTAMP,
    updated_at TEXT,

    address_id TEXT,
    FOREIGN KEY (address_id) REFERENCES addresses(id)
  );
