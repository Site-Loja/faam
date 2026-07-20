-- ========================================
-- AUDITORIA - Políticas RLS
-- ========================================
-- Rode este SQL no Supabase Dashboard:
-- SQL Editor > New Query > cole > Run
-- ========================================

-- Habilitar RLS (ignora erro se já estiver habilitado)
ALTER TABLE auditoria ENABLE ROW LEVEL SECURITY;

-- Remover políticas antigas (se existirem) e recriar
DROP POLICY IF EXISTS "auditoria_select" ON auditoria;
DROP POLICY IF EXISTS "auditoria_insert" ON auditoria;
DROP POLICY IF EXISTS "auditoria_delete" ON auditoria;

CREATE POLICY "auditoria_select" ON auditoria FOR SELECT USING (true);
CREATE POLICY "auditoria_insert" ON auditoria FOR INSERT WITH CHECK (true);
CREATE POLICY "auditoria_delete" ON auditoria FOR DELETE USING (true);

-- Criar índices (ignora erro se já existirem)
CREATE INDEX IF NOT EXISTS idx_auditoria_timestamp ON auditoria(timestamp);
CREATE INDEX IF NOT EXISTS idx_auditoria_usuario_id ON auditoria(usuario_id);
