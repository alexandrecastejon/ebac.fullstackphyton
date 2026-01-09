-- ============================================
-- EBAC - Módulo Índices (Antes x Depois)
-- Banco: postgres
-- ============================================

-- 1) Limpeza e criação da tabela
DROP TABLE IF EXISTS customer_index_test;

CREATE TABLE customer_index_test (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    email TEXT NOT NULL
);

-- 2) Carga de dados
INSERT INTO customer_index_test (name, email)
SELECT
    'Cliente ' || gs,
    'cliente' || gs || '@email.com'
FROM generate_series(1, 500000) gs;

-- 3) Consulta sem índice
SELECT *
FROM customer_index_test
WHERE email = 'cliente400000@email.com';

-- 4) Medição sem índice
EXPLAIN ANALYZE
SELECT *
FROM customer_index_test
WHERE email = 'cliente400000@email.com';

-- 5) Criação do índice
CREATE INDEX idx_customer_index_test_email
ON customer_index_test (email);

-- 6) Medição com índice
EXPLAIN ANALYZE
SELECT *
FROM customer_index_test
WHERE email = 'cliente400000@email.com';