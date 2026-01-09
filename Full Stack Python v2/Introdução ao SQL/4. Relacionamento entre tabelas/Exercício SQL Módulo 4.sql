-- ================================
-- EBAC - Módulo 4
-- Relacionamento entre product e stock
-- Banco: postgres (ou ebac, se preferir)
-- ================================

BEGIN;

DROP TABLE IF EXISTS stock;
DROP TABLE IF EXISTS product;

-- Tabela de produtos
CREATE TABLE product (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  price NUMERIC(12,2) NOT NULL
);

-- Tabela de estoque (relacionada ao produto)
CREATE TABLE stock (
  id SERIAL PRIMARY KEY,
  product_id INTEGER NOT NULL UNIQUE,
  quantity INTEGER NOT NULL DEFAULT 0,

  CONSTRAINT fk_stock_product
    FOREIGN KEY (product_id)
    REFERENCES product(id)
);

COMMIT;