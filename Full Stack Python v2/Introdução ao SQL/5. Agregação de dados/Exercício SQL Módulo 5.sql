-- ================================
-- EBAC - Módulo 5 (Agregação)
-- Objetivo: total de itens em estoque por produto
-- ================================

BEGIN;

-- (opcional, mas recomendado) para poder rodar mais de uma vez
DROP TABLE IF EXISTS stock;
DROP TABLE IF EXISTS product;

-- ---------- DDL ----------
CREATE TABLE product (
    product_id SERIAL PRIMARY KEY,
    name VARCHAR(25) NOT NULL,
    created_date TIMESTAMP NOT NULL DEFAULT now()
);

CREATE TABLE stock (
    id SERIAL PRIMARY KEY,
    product_id INT NOT NULL,
    quantity INT NOT NULL,
    CONSTRAINT fk_stock_product
        FOREIGN KEY (product_id)
        REFERENCES product(product_id)
);

-- ---------- DML ----------
INSERT INTO product (name) VALUES
('celular'),
('livro'),
('tablet'),
('notebook'),
('roteador');

INSERT INTO stock (product_id, quantity) VALUES
(1, 5),
(2, 3),
(3, 0),
(4, 1),
(5, 0);

-- ---------- Query 2 ----------
-- Quantidade de itens que cada produto tem (agregação + join)
SELECT
    p.name AS product_name,
    SUM(s.quantity) AS product_stock
FROM product p
JOIN stock s ON s.product_id = p.product_id
GROUP BY p.name
ORDER BY product_stock DESC;

-- ---------- Query 3 ----------
-- Soma total de itens no estoque (agregação simples)
SELECT
    SUM(quantity) AS total_items_in_stock
FROM stock;

COMMIT;
