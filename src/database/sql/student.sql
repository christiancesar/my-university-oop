CREATE TABLE
  students (
    id TEXT NOT NULL PRIMARY KEY,
    name TEXT NOT NULL,
    cpf TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT,
    age INTEGER,
    birthday TEXT,
    created_at TEXT DEFAULT CURRENT_TIMESTAMP,
    updated_at TEXT,

    address_id TEXT,
    FOREIGN KEY (address_id) REFERENCES addresses(id)
  );
