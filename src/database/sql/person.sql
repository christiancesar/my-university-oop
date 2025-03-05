CREATE TABLE
  persons (
    id TEXT NOT NULL PRIMARY KEY,
    person_type TEXT NOT NULL,
    name TEXT NOT NULL,
    cpf TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT,
    age INTEGER,
    birthday TEXT,
    created_at TEXT DEFAULT CURRENT_TIMESTAMP,
    updated_at TEXT,
    address_id TEXT,
    university_id TEXT,
    FOREIGN KEY (university_id) REFERENCES universities (id),
    FOREIGN KEY (address_id) REFERENCES addresses (id)
  );
