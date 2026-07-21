-- ========================================
-- SCRIPT SQL PARA CRIAR TABELA NUTRICIONISTA
-- ========================================
-- Copie TODO o conteúdo abaixo e cole no SQL Editor do Supabase
-- (Dashboard > SQL Editor > New Query > cole aqui > Run)
-- ========================================

-- Tabela de Dados Nutricionais
CREATE TABLE IF NOT EXISTS nutricionista_dados (
  id TEXT PRIMARY KEY,
  paciente_id TEXT NOT NULL,
  tipo TEXT NOT NULL,
  data DATE,
  
  -- Avaliação Nutricional
  peso NUMERIC,
  altura NUMERIC,
  imc NUMERIC,
  risco_nutricional TEXT,
  estado_nutricional TEXT,
  
  -- Prescrição Dietética
  tipo_dieta TEXT,
  calorias NUMERIC,
  proteinas NUMERIC,
  carboidratos NUMERIC,
  lipidios NUMERIC,
  restricoes TEXT,
  cardapio TEXT,
  validade DATE,
  
  -- Aceitação Alimentar
  refeicao TEXT,
  percentual INTEGER,
  alimentos_nao_aceitos TEXT,
  
  -- Hidratação
  volume INTEGER,
  meta INTEGER,
  via TEXT,
  
  -- Intercorrência/Alerta
  tipo_intercorrencia TEXT,
  gravidade TEXT,
  descricao TEXT,
  conduta TEXT,
  notificar_equipe TEXT,
  
  -- Relatório
  tipo_relatorio TEXT,
  conclusao TEXT,
  
  -- Geral
  observacoes TEXT,
  profissional TEXT,
  status TEXT DEFAULT 'pendente',
  criado_em TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Habilitar RLS
ALTER TABLE nutricionista_dados ENABLE ROW LEVEL SECURITY;

-- Remover políticas antigas se existirem
DROP POLICY IF EXISTS "nutricionista_dados_select" ON nutricionista_dados;
DROP POLICY IF EXISTS "nutricionista_dados_insert" ON nutricionista_dados;
DROP POLICY IF EXISTS "nutricionista_dados_update" ON nutricionista_dados;
DROP POLICY IF EXISTS "nutricionista_dados_delete" ON nutricionista_dados;

-- Criar políticas novas
CREATE POLICY "nutricionista_dados_select" ON nutricionista_dados FOR SELECT USING (true);
CREATE POLICY "nutricionista_dados_insert" ON nutricionista_dados FOR INSERT WITH CHECK (true);
CREATE POLICY "nutricionista_dados_update" ON nutricionista_dados FOR UPDATE USING (true);
CREATE POLICY "nutricionista_dados_delete" ON nutricionista_dados FOR DELETE USING (true);

-- Índices
CREATE INDEX IF NOT EXISTS idx_nutricionista_paciente_id ON nutricionista_dados(paciente_id);
CREATE INDEX IF NOT EXISTS idx_nutricionista_tipo ON nutricionista_dados(tipo);
CREATE INDEX IF NOT EXISTS idx_nutricionista_data ON nutricionista_dados(data);
CREATE INDEX IF NOT EXISTS idx_nutricionista_risco ON nutricionista_dados(risco_nutricional);

-- Adicionar perfil nutricionista na tabela usuarios se não existir
DO $$
BEGIN
  -- Verificar se a coluna perfil aceita 'nutricionista'
  -- (A coluna é TEXT, então aceita qualquer valor)
  RAISE NOTICE 'Perfil nutricionista disponível para uso';
END $$;
