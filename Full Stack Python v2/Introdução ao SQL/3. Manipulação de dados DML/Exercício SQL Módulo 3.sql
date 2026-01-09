-- EBAC - Module 3 - Script de inserção
-- Banco: ebac
-- Tabelas: customer, product, stock

BEGIN;

-- Inserções em customer
INSERT INTO customer (name, email, cpf, birth_date) VALUES
('João Silva', 'joaonovo@email.com', '12345678901', '1990-05-10'),
('Maria Oliveira', 'maria.oliveira@email.com', '23456789012', '1988-03-22'),
('Carlos Pereira', 'carlos.pereira@email.com', '34567890123', '1979-11-15'),
('Ana Costa', 'ana.costa@email.com', '45678901234', '1995-07-01'),
('Pedro Santos', 'pedro.santos@email.com', '56789012345', '2001-09-18');

-- Inserções em product
INSERT INTO product (cod_product, name) VALUES
(101, 'Notebook'),
(102, 'Mouse'),
(103, 'Keyboard'),
(104, 'Headset');

-- Inserções em stock
-- Observação: a tabela stock deve existir antes destas inserções
INSERT INTO stock (cod_product, quantity, location) VALUES
(101, 10, 'MAIN'),
(102, 50, 'MAIN'),
(103, 25, 'MAIN'),
(104, 15, 'MAIN');

COMMIT;
