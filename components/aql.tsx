// CREATE TABLE categories (
//   id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
//   name TEXT NOT NULL,
//   created_at TIMESTAMP DEFAULT NOW(),
//   updated_at TIMESTAMP DEFAULT NOW()
// );

// ALTER TABLE categories ENABLE ROW LEVEL SECURITY;

// CREATE POLICY "Readable by everyone" ON categories
// FOR SELECT
// USING (true);