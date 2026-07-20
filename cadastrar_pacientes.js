// Script para cadastrar pacientes no Supabase
const SUPABASE_URL = 'https://htfhfutjhlqktbzjbiuc.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh0ZmhmdXRqaGxxa3RiempiaXVjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODM4ODQzNDQsImV4cCI6MjA5OTQ2MDM0NH0.j9fyx9LyndY2ltnyPAdVoByNa8JIynCwtOVp5A-BycI';

const pacientes = [
  {
    nome: "AUGUSTO FERREIRA DOS SANTOS",
    cpf: "573.132.616-91",
    data_nascimento: "1919-10-05",
    sexo: "M",
    naturalidade: "CORAÇÃO DE JESUS-MG",
    municipio_residencia: "CORAÇÃO DE JESUS/LUIZ PIRIS DE MINAS",
    estado_civil: "Solteiro",
    data_entrada: "2021-07-21",
    diagnostico_principal: "HAS, DPOC",
    medicamentos: "LOSARTANA 50MG 01 CP 08/20HS; BETINA 24MG 01 CP 08HS; CLONAZEPAN 2,5MG/ML 20HS S/N; AMITRIPTILINA 25MG 01 CP 08HS; SALBUTAMOL SPARAY 02JATOS; GABAPENTINA 300MG 01 CP 08/20HS; ALÊNIA 61200 01 01 CP 08/20HS; USO DE FRALDA GERIATRICAS TM-G 4 A 6 TROCAS DIARIAS",
    observacoes: "DEPENDÊNCIA FISICA: ACAMADO; GRAU DE DEPENDÊNCIA: III"
  },
  {
    nome: "BENTO BARRETO DE CARVALHO",
    cpf: "158.348.756-53",
    data_nascimento: "1943-12-30",
    sexo: "M",
    naturalidade: "CORAÇÃO DE JESUS",
    municipio_residencia: "CORAÇÃO DE JESUS",
    estado_civil: "Casado",
    data_entrada: "2016-11-25",
    diagnostico_principal: "HIPERTENSÃO, EX-ETILISTA, EX-TABAGISTA E TRANSTORNO DEPRESSIVO",
    medicamentos: "LOSARTANA 50MG 01 CP 08HS; QUETIAPINA 100MG 01 CP 20HS; MIRTAZAPINA 30MG 01 CP 20HS; MEMANTINA 10MG 01 CP 08/20HS",
    observacoes: "DEPENDÊNCIA FISICA: DEAMBULA; GRAU DE DEPENDÊNCIA: I"
  },
  {
    nome: "CLAUDINEI GONÇALVES",
    cpf: "094.277.046-32",
    data_nascimento: "1965-05-14",
    sexo: "M",
    naturalidade: "LAGOA DOS PATOS-MG",
    municipio_residencia: "LAGOA DOS PATOS",
    estado_civil: "Separado",
    data_entrada: "2023-06-06",
    diagnostico_principal: "CADEIRANTE, USUÁRIO DE FRALDA; PARALISIA FLÁCIDA TRANSTORNO DEPRESSIVO; DIABETES TIPO II, EX-ETILISTA, EX-TABAGISTA",
    medicamentos: "AMPLICTIL 25MG 01 CP 20HS; ACETAZOLAMIDA 250MG 01 CP 08/20HS; PAROXETINA 20MG 01 CP 08HS; GLIFAGE XR 500MG 01 CP 08/14/20HS; GLICAZIDA 60MG 01 CP 06HS; INSULINA NPH 10UI 20HS; INSULIN A REGULAR CONFORME O ESQUIMA; USO DE FRALDA GERIATRICA TM-G 4 A 6 TROCAS DIARIAS",
    observacoes: "DEPENDÊNCIA FISICA: CADEIRANTE; GRAU DE DEPENDÊNCIA: II; CID10: F 33.0 E M 50.0"
  },
  {
    nome: "DOMINGAS SOARES DE OLIVEIRA",
    cpf: "931.314.06-82",
    data_nascimento: "1959-05-10",
    sexo: "F",
    naturalidade: "CORAÇÃO DE JESUS",
    municipio_residencia: "SÃO JOAQUIM",
    data_entrada: "2026-03-10",
    diagnostico_principal: "SAÚDE MENTAL",
    medicamentos: "RESPIRIDONA 02 MG 01 CP 20HS; CLONAZEPAM 2,5ML/05GTS 20HS/SN",
    observacoes: "GRAU DE DEPENDÊNCIA: I"
  },
  {
    nome: "EVANEUZA APARECIDA DOS SANTOS",
    cpf: "016.778.926-09",
    data_nascimento: "1969-10-08",
    sexo: "F",
    naturalidade: "LAGOA DOS PATOS-MG",
    municipio_residencia: "LAGOA DOS PATOS",
    estado_civil: "Solteira",
    data_entrada: "1998-02-17",
    diagnostico_principal: "EPLEPSIA RETARDO MENTAL, OBESIDADE, MANTÉM USO DE FRALDA",
    medicamentos: "DEPAKENE 250MG 01 CP 08HS; FENOBARBITAL 100MG 01 CP 08/20HS; SINVASTATINA 20MG 01 CP 20HS; FUROSEMIDA 40MG 1/2 CP 3 X POR SEMANA; USO DE FRALDA GERIATRICA TM-G-XG 4 A 6 TROCAS DIARIAS",
    observacoes: "DEPENDÊNCIA FISICA: ACAMADA; GRAU DE DEPENDÊNCIA: III; CID 10: G 40 e F 71"
  },
  {
    nome: "EXPEDITO GONÇALVES SANTOS",
    cpf: "069.149.336-77",
    data_nascimento: "1951-02-23",
    sexo: "M",
    naturalidade: "CORAÇÃO DE JESUS-MG",
    municipio_residencia: "C. DE JESUS/ LUIZ PIRES DE MINAS",
    estado_civil: "Separado",
    data_entrada: "2025-03-12",
    diagnostico_principal: "HAS, EX-ETILISTA, EX-TABAGISTA E TRANSTORNO DEPRESSIVO",
    medicamentos: "ENALAPRIL 20 MG 01 CP 08HS; MIRTAZAPINA 30MG 01 CP 20HS; RESPERIDONA 1MG 01 CP 20HS; DIAZEPAM 10 MG 01 CP 20HS; SINVASTATINA 40 MG 01 CP 20H; QUETIAPINA 25MG 01 CP 20HS; USO DE FRALDA GERIATRICA TM-XG 4 A 6 TROCAS DIARIAS",
    observacoes: "DEPENDÊNCIA FISICA: LOCOMOÇÃO COMPROMOTIDA; GRAU DE DEPENDÊNCIA: II; CID10: I10; F32"
  },
  {
    nome: "EDILMAR MOREIRA LEITE",
    cpf: "055.272.766-04",
    data_nascimento: "1965-05-23",
    sexo: "M",
    naturalidade: "CORAÇÃO DE JESUS-MG",
    municipio_residencia: "CORAÇÃO DE JESUS",
    estado_civil: "Solteiro",
    data_entrada: "2025-07-27",
    diagnostico_principal: "HAS, TABAGISMO",
    medicamentos: "ENALAPRIL 20 MG 01 CP 08HS; ONLAZAPINA 05 MG 01 CP 08 HS; PAROXETINA 20 MG 01 CP 14 HS; DIAZEPAM 10 MG 01 CP 20HS S/N; CLONAZEPAM 2/5MG/ML 05 GTS 20HS; USO DE FRALDA GERIATRICA TM-G-XG 4 A 6 TROCAS DIARIAS",
    observacoes: "DEPENDÊNCIA FISICA: DEAMBULA; GRAU DE DEPENDÊNCIA: I; CID10: 110 E F.17.1"
  },
  {
    nome: "ETIENA LAUREANO DOS SANTOS",
    cpf: "016.778.906-65",
    data_nascimento: "1971-05-31",
    sexo: "F",
    naturalidade: "IBIAI-MG",
    municipio_residencia: "IBIAI",
    estado_civil: "Solteira",
    data_entrada: "1991-12-16",
    diagnostico_principal: "SAÚDE MENTAL/ ESQUIOSOFRENIA",
    medicamentos: "QUETIAPINA 25 MG 01 CP 20HS; USO DE FRALDA GERIATRICA TM-G-XG 4 A 6 TROCAS DIARIAS",
    observacoes: "DEPENDÊNCIA FISICA: DEAMBULA; GRAU DE DEPENDÊNCIA: III"
  },
  {
    nome: "FLORIPES FERREIRA DA SILVA",
    cpf: "803.425.236-00",
    data_nascimento: "1921-09-17",
    sexo: "F",
    naturalidade: "CORAÇÃO DE JESUS-MG",
    municipio_residencia: "CORAÇÃO DE JESUS",
    estado_civil: "Solteira",
    data_entrada: "2008-11-15",
    diagnostico_principal: "RETARDO MENTAL/ ESQUIZOFRENIA, ACAMADA EM USO DE FRALDA",
    medicamentos: "AMITRIPTILINA 25MG MEIO CP. 08HS E 01 CP 20HS; CELESTRAT 01 CP A CADA DOIS DIAS; CLONAZEPAN 2,5MG/ML 05GTS S/N; USO DE FRALDA GERIATRICA TM-G-XG 4 A 6 TROCAS DIARIAS",
    observacoes: "DEPENDÊNCIA FISICA: LOCOMOÇÃO COMPROMETIDA; GRAU DE DEPENDÊNCIA: III; CID 10: F 20 e G 40"
  },
  {
    nome: "HÉLIA APARECIDA PEREIRA SANTOS",
    cpf: "840.826.076-68",
    data_nascimento: "1967-08-11",
    sexo: "F",
    naturalidade: "LAGOA DOS PATOS-MG",
    municipio_residencia: "LAGOAS DOS PATOS",
    estado_civil: "Solteira",
    data_entrada: "1989-10-16",
    diagnostico_principal: "EPLEPSIA, ANSIEDADE",
    medicamentos: "CARBAMAZEPINA 200MG 01 CP. 08/14/20HS; FENOBARBITAL 100MG 01 CP. 08/20HS; CLONAZEPAM 05 GTS SE ESTIVER ANSIOSA; SERTRALINA 100 MG 01 CP 08HS/(DOIS CP DE 50MG) INICIO DIA 24/06/2026",
    observacoes: "DEPENDÊNCIA FISICA: DEAMBULA; GRAU DE DEPENDÊNCIA: I; CID 10: G 40"
  },
  {
    nome: "ITABAJARA PEREIRA MOURA",
    cpf: "863.761.361-68",
    data_nascimento: "1972-06-08",
    sexo: "M",
    naturalidade: "SÃO JOÃO DO PACUÍ-MG",
    municipio_residencia: "SÃO JOÃO DO PACUI",
    estado_civil: "Solteiro",
    data_entrada: "2019-11-11",
    diagnostico_principal: "TRANSTORNO MENTAL GRAVE CADEIRANTE EM USO DE FRALDA, EX-ETILISTA",
    medicamentos: "FENOBARBITAL 100MG 01 CP. 08/20HS; AMPLICTIL 100MG 01 CP. 20HS; HALOPERIDOL 5MG 01 CP. 20HS; AKINETON 2MG 01 CP. 08/20HS; CLONAZEPAN 2,5MG/ML 10GTS 20HS S/N; CARBAMAZEPINA 200 MG 01 CP 08/01CP 20HS; USO DE FRALDA GERIATRICA TM-G-XG 4 A 6 TROCAS DIARIAS",
    observacoes: "DEPENDÊNCIA FISICA: CADEIRANTE; GRAU DE DEPENDÊNCIA: III; CID 10: I10, Z99.3 e F 99"
  },
  {
    nome: "JOSE ALVES FERREIRA",
    cpf: "041.465.196-08",
    data_nascimento: "1941-03-02",
    sexo: "M",
    naturalidade: "BRASILIA DE MINAS-MG",
    municipio_residencia: "C. DE JESUS /POVOADO DE BREJINHO",
    estado_civil: "Separado",
    data_entrada: "2026-02-04",
    diagnostico_principal: "HAS",
    medicamentos: "LOSARTANA 50MG 01 CP 08/20HS; PANTOPRAZOL 01 CP 40MG 08HS (JEJUM); USO DE FRALDA GERIATRICA TM-G-XG 4 A 6 TROCAS DIARIAS",
    observacoes: "GRAU DE DEPENDÊNCIA: II; CID 10: I10"
  },
  {
    nome: "JOSÉ OLIVEIRA SANTOS",
    cpf: "757.733.096-53",
    data_nascimento: "1942-09-12",
    sexo: "M",
    naturalidade: "CORAÇÃO DE JESUS-MG",
    municipio_residencia: "CORAÇÃO DE JESUS",
    data_entrada: "2025-07-10",
    diagnostico_principal: "INSUFICIÊNCIA CARDÍACA E HIPOTIREOIDISMO, PRÉ-DM",
    medicamentos: "CAPTOPRIL 25 MG 01 CP 6/6HS; FUROSEMIDA 40 MG SEGUNDA QUARTA E SEXTA 08HS; SELOZOK/METROPOROL 25MG 01 CP 08HS; ESPIRONOLACTONA 25 MG 01 CP 08HS; AMIODARONA 200MG 01 CP 08/20HS; MIRTAZAPINA 30MG 01 CP 20HS; METFORMINA 850 MG01 CP 08 HS; LEVOTIROXINA 25 MG 01 CP EM JEJUM; USO DE FRALDA GERIATRICA TM-G-XG 4 A 6 TROCAS DIARIAS",
    observacoes: "DEPENDÊNCIA FISICA: DEABULA COMPROMETIDA DEVIDO A IDADE E PROBLEMAS NA COLUNA; GRAU DE DEPENDÊNCIA: II; CID: I50; E03"
  },
  {
    nome: "JOAQUIM MUNIZ FREIRE",
    cpf: "158.215.526-72",
    data_nascimento: "1934-07-28",
    sexo: "M",
    naturalidade: "IBIAI-MG",
    municipio_residencia: "CORAÇÃO DE JESUS",
    data_entrada: "2023-06-07",
    diagnostico_principal: "CADEIRANTE EM USO DE FRALDA, EX-ETILSTA",
    medicamentos: "QUETIAPINA 25MG 01 COMP. 20HS; MIRTAZAPINA 15MG 01 COMP. 20HS; MEMANTINA 10MG 01 COMP. 08/20HS; CLONAZEPAN 2,5MG/ML 10GTS S/N; USO DE FRALDA GERIATRICA TM-G-XG 4 A 6 TROCAS DIARIAS",
    observacoes: "DEPENDÊNCIA FISICA: CADEIRANTE; GRAU DE DEPENDÊNCIA: II; CID10: Z99.3"
  },
  {
    nome: "JOSÉ APARECIDO FERREIRA DE AZEVEDO",
    cpf: "066.128.826-97",
    data_nascimento: "1960-07-11",
    sexo: "M",
    naturalidade: "CORAÇÃO DE JESUS",
    municipio_residencia: "SÃO JOÃO DO PACUI",
    estado_civil: "Solteiro",
    data_entrada: "2020-02-12",
    diagnostico_principal: "HAS, CADEIRANTE EM USO DE FRALDA, SEQUELAS EM MMII, APÓS ACIDENTE, CARROÇÃO PASSOU EM CIMA DAS PERNAS",
    medicamentos: "LOSARTANA 50MG 01 CP. 08HS; DIOSMIN 450MG +50MG 01 CP. 08/20HS; QUETIAPINA 50 MG 01 CP 20 HS; USO DE FRALDA GERIATRICA TM-G-XG 4 A 6 TROCAS DIARIAS",
    observacoes: "DEPENDÊNCIA FISICA: CADEIRANTE/ACAMADO; GRAU DE DEPENDÊNCIA: III; CID 10: I10 e I 87"
  },
  {
    nome: "JOSE FAGUNDES LIMA",
    cpf: "711.138.786-49",
    data_nascimento: "1946-05-30",
    sexo: "M",
    naturalidade: "CORAÇÃO DE JESUS",
    municipio_residencia: "CORAÇÃO DE JESUS / PONTE DOS CIGANOS",
    estado_civil: "Solteiro",
    data_entrada: "2025-03-27",
    diagnostico_principal: "HAS/ CHAGAS E PARKSON",
    medicamentos: "LOSARTANA 50MG 01 CP 08/20HS; COMBODART 0,5MG+0,4MG 01 CP 20HS; PROLOPA BD 100/25MG 01 CP 08/20HS; OMEPRAZOL 40 MG 01 CP EM JENUM; USO DE FRALDA GERIATRICA TM-G-XG 4 A 6 TROCAS DIARIA",
    observacoes: "DEPENDÊNCIA FISICA: ACAMADO/CADEIRANTE; GRAU DE DEPENDÊNCIA: III; CID10: F.41, B.573; G.20"
  },
  {
    nome: "JOANA GONÇALVES DE OLIVEIRA",
    cpf: "131.219.186-48",
    data_nascimento: "1935-05-04",
    sexo: "F",
    naturalidade: "CORAÇÃO DE JESUS",
    municipio_residencia: "CORAÇÃO DE JESUS /TAMBORILZINHO",
    estado_civil: "Solteiro",
    data_entrada: "2022-02-11",
    diagnostico_principal: "ACAMADA EM USO FRALDA",
    medicamentos: "NÃO FAZ USO DE MEDICAMENTOS; USO DE FRALDA GERIATRICA TM-G-XG 4 A 6 TROCAS DIARIA",
    observacoes: "DEPENDÊNCIA FISICA: ACAMADA; GRAU DE DEPENDÊNCIA: II"
  },
  {
    nome: "JOÃO PAULO DA SILVA",
    cpf: "054.188.236-80",
    data_nascimento: "1920-01-25",
    sexo: "M",
    naturalidade: "CORAÇÃO DE JESUS-MG",
    municipio_residencia: "LAGOS DOS PATOS",
    estado_civil: "Solteiro",
    data_entrada: "2024-12-16",
    diagnostico_principal: "",
    medicamentos: "CLONAZEPAM 2,5MG/ML 05 GTS 20HS/SN; USO DE FRALDA GERIATRICA TM-G-XG 4 A 6 TROCAS DIARIA",
    observacoes: "DEPENDÊNCIA FISICA: ACAMADO; GRAU DE DEPENDÊNCIA: III"
  },
  {
    nome: "JURACI PEREIRA SANTOS",
    cpf: "016.779.036-60",
    data_nascimento: "1950-04-15",
    sexo: "F",
    naturalidade: "CORAÇÃO DE JESUS-MG",
    municipio_residencia: "CORAÇÃO DE JEUS /LUIZ PIRES DE MINAS",
    data_entrada: "1999-08-28",
    diagnostico_principal: "HAS, DOENÇA DE CHAGAS E INSUFICIÊNCIA CARDÍACA (ICC)",
    medicamentos: "AMINOFILINA 100MG 01 CP. 08/20HS; FLUOXETINA 20MG 01 CP.08HS; AMPLICTIL 25MG 01 CP. 08HS; AAS 100MG 01 CP APÓS A ALMOÇO 14HS; CLOPDOGREL 75 MG 01 CP 20HS; ATORVASTATINA 40 MG 01 CP 20 H; LOSARTANA 50 MG MEIO CP 08HS; METROPOLOL 25MG 01 CP 08/20HS; DAPAGLIFOSINA/FORXIGA 10 MG 01 CP 08HS; ESPIRONOLACTONA 25 MG 01 CP 14 HS; USO DE FRALDA GERIATRICA TM-G-XG 4 A 6 TROCAS DIARIA",
    observacoes: "DEPENDÊNCIA FISICA: DEAMBULA COM DIFICULDADE; GRAU DE DEPENDÊNCIA: I; CID10: I10; I50; B57"
  },
  {
    nome: "MANOEL AFONSO PEREIRA",
    cpf: "668.373.756-87",
    data_nascimento: "1962-12-18",
    sexo: "M",
    naturalidade: "SÃO JOÃO DA LAGOA",
    municipio_residencia: "SÃO JOÃO DA LAGOA",
    data_entrada: "2010-01-05",
    diagnostico_principal: "HAS, ESQUIZOFRENIA, RETARDO MENTAL LEVE",
    medicamentos: "AMPLICTIL 50MG 01 CP. 08HS E 02 CP 50MG20HS; AKINETON 2MG 01 CP. 08/20HS; DIAZEPAM 10MG 01 CP. 20HS; FENOBARBITAL 100MG 01 CP. 08/20HS; LOSARTANA 50MG 01 CP. 08/20HS",
    observacoes: "DEPENDÊNCIA FISICA: DEABULA; GRAU DE DEPENDÊNCIA: I; CID10: L10, F.70. H91. 9"
  },
  {
    nome: "MÁRCIA GONÇALVES DA SILVA OLIVEIRA",
    cpf: "016.382.246-84",
    data_nascimento: "1955-05-06",
    sexo: "F",
    naturalidade: "MONTES CLAROS-MG",
    municipio_residencia: "CORAÇÃO DE JESUS",
    data_entrada: "2010-01-05",
    diagnostico_principal: "RETARDO MENTAL, PERDA VISÃO BILATERAL TOTAL; TIMPANO PERFURADO",
    medicamentos: "AMINOFILINA 100MG 01 CP. 08/20HS; AKINETON 2MG 01 CP. 08HS; RISPERIDONA 2MG 01 CP. 20HS; USO DE FRALDA GERIATRICA TM-G-XG 4 A 6 TROCAS DIARIA",
    observacoes: "DEPENDÊNCIA FISICA: DEAMBULA COM AUXILO DEVIDO DEFICIÊNCIA VISUAL; GRAU DE DEPENDÊNCIA: II; CID10: F.70, H 91.9; H54"
  },
  {
    nome: "MARGARIDA ALVES DE JESUS",
    cpf: "103.836.668-21",
    data_nascimento: "1945-01-18",
    sexo: "F",
    naturalidade: "CAMPO AZUL-MG",
    municipio_residencia: "C.J / S. JOAQUIM",
    data_entrada: "2020-03-20",
    diagnostico_principal: "DIABETES TIPO I, HIPERTENSÃO ARTERIAL, INSUFICIÊNCIA VASCULAR PERIFÉRICA",
    medicamentos: "METFORMINA 850MG 01 CP. 08/20HS; NEBILET 5MG 01 COMP. 08HS; TRIPLIXAM 5 MG + 1,25 +5 MG 01 CP. 08HS; ESPIRONOLACTONA 25MG 01 CP. 08HS; SERTRALINA 25MG 01 CP. 08HS; OMEPRAZOL 20MG 01 CP. 08HS; CILOSTAZOL 50MG 01 CP 08HS; RIVAROXABANA 10MG 01 COMP.08HS; CAPTOPRIL 25 MG 01 CP 08HS; GABAPENTINA 300MG 01 CP 08HS",
    observacoes: "DEPENDÊNCIA FISICA: DEABULA COM DIFICULDADE DEVIDO FERIDA CRONICA POR ULCERA VENOSA EM MID; GRAU DE DEPENDÊNCIA: I; CID 10: I10, E14, I87.2"
  },
  {
    nome: "MARIA CONCEIÇÃO DE JESUS",
    cpf: "701.342.516-87",
    data_nascimento: "1920-07-13",
    sexo: "F",
    naturalidade: "CORAÇÃO DE JESUS-MG",
    municipio_residencia: "CORAÇÃO DE JUSUS",
    data_entrada: "2002-02-01",
    diagnostico_principal: "SAÚDE MENTAL",
    medicamentos: "DIOSMIN 450MG + 50MG 01 CP. 08/20HS; MIRTAZAPINA 30MG 01 CP. 20HS; QUETIAPINA 100MG 01 CP. 20HS; USO DE FRALDA GERIATRICA TM-G-XG 4 A 6 TROCAS DIARIA",
    observacoes: "DEPENDÊNCIA FISICA: DEAMBULA; GRAU DE DEPENDÊNCIA: I; CID10: I. 87.2"
  },
  {
    nome: "MARIA GERALDA DURÃES",
    cpf: "626.749.436-53",
    data_nascimento: "1944-02-05",
    sexo: "F",
    naturalidade: "CORAÇÃO DE JESUS-MG",
    municipio_residencia: "SÃO JOÃO DA LAGOA",
    data_entrada: "2026-06-02",
    diagnostico_principal: "SAÚDE MENTAL",
    medicamentos: "DIAZEPAN 2,5MG/DL 05 GOTAS 20HS; MIRTAZAPINA 15 MG 01 CP. 20HS; CITALOPRAN 10 01 CP. 20HS; OMEPRAZOL 20MG 01 CP DE JEJUM; USO DE FRALDA GERIATRICA TM-G-XG 4 A 6 TROCAS DIARIA",
    observacoes: "DEPENDÊNCIA FISICA: DEAMBULA; GRAU DE DEPENDÊNCIA: I; CID10: I. 87.2"
  },
  {
    nome: "MARIA INÊS PEREIRA SANTOS",
    cpf: "030.056.866-55",
    data_nascimento: "1957-06-01",
    sexo: "F",
    naturalidade: "CORAÇÃO DE JESUS-MG",
    municipio_residencia: "C. J.",
    data_entrada: "2020-12-28",
    diagnostico_principal: "HAS, DIABETES MELLITUS (DM)",
    medicamentos: "METFORMINA 850MG 01 CP 08HS; AMPLICTIL 100MG 01 CP 20HS; AMINOFILINA 100MG 01 CP 08/20HS; PREGABALINA 75MG 01 CP 08 HS; MITARZAPINA DE 30 MG 01 CP 20HS; QUETIAPINA 50 MG 01 CP 20HS; OMEPRAZOL 20MG 01 CP 08HS; DIOSMIN 450MG+HESPERIDINA 50MG 01 CP 08/20HS; USO DE FRALDA GERIATRICA TM-G-XG 4 A 6 TROCAS DIARIA",
    observacoes: "DEPENDÊNCIA FISICA: DEAMBULA; GRAU DE DEPENDÊNCIA: I; CID 10: I10, E14, N819"
  },
  {
    nome: "MARIA JOSE RAMOS DOS SANTOS",
    cpf: "016.779.146-02",
    data_nascimento: "1983-07-02",
    sexo: "F",
    naturalidade: "JANUÁRIA-MG",
    municipio_residencia: "CORAÇÃO DE JESUS /CONEGO MARINHO DISTRIO DE JANUARIA",
    estado_civil: "Solteira",
    data_entrada: "2010-01-05",
    diagnostico_principal: "HAS, ANSIEDADE",
    medicamentos: "LOSARTANA 50MG 01 CP 08/20HS; AMITRIPTILINA 25MG 01 CP 08HS; MEDROGIPROGESTERONA 01 AMPOLA A CADA 3 MESES PROXIMA 07/05/25",
    observacoes: "DEPENDÊNCIA FISICA: DEAMBULAÇÃO COMPRMETETIDA DEVIDO DEFICIÊNCIA FÍSICA EM MSD E MID; GRAU DE DEPENDÊNCIA: I; CID 10: F41 e H10"
  },
  {
    nome: "MARIA LOPES CARVALHO",
    cpf: "112.662.626-01",
    data_nascimento: "1927-06-10",
    sexo: "F",
    naturalidade: "BRASILIA DE MINAS",
    municipio_residencia: "C. JESUS / S. JOAQUIM",
    estado_civil: "Solteira",
    data_entrada: "2026-04-03",
    diagnostico_principal: "HAS",
    medicamentos: "CAPTOPRIL 25 MG 01 CP 08HS; HIDROCLOROTIAZIDA 25MG 01 CP 08HS; CARBONATO DE LITIO+VIT.D 600+100UI PROL 01 CP APÓS O ALMOÇO/ 14HS; USO DE FRALDA GERIATRICA TM-G 2 A 3 TROCAS DIARIAS",
    observacoes: "DEPENDÊNCIA FISICA: DEAMBULA COM DIFICULDADE DEVIDO IDADE; GRAU DE DEPENDÊNCIA: II"
  },
  {
    nome: "MARIA MADALENA FERREIRA DE JESUS",
    cpf: "037.092.606-47",
    data_nascimento: "1948-12-20",
    sexo: "F",
    naturalidade: "SÃO JOAQUIM",
    municipio_residencia: "CORAÇÃO DE JEUS",
    data_entrada: "2022-07-27",
    diagnostico_principal: "ANSIEDADE, CADEIRANTE, EM USO DE FRALDA",
    medicamentos: "FLUOXETINA 20MG 01 CP 08HS; USO DE FRALDA GERIATRICA TM-G-XG 2 A 3 TROCAS DIARIAS",
    observacoes: "DEPENDÊNCIA FISICA: DEAMBULAÇÃO COMPROMETIDA; GRAU DE DEPENDÊNCIA: II; CID10: F41"
  },
  {
    nome: "MARIA NILZA PEREIRA DA SILVA",
    cpf: "034.926.716-24",
    data_nascimento: "1964-05-05",
    sexo: "F",
    naturalidade: "CLARO DOS POÇOES-MG",
    municipio_residencia: "LAGOAS DOS PATOS/ AGUA BOA",
    data_entrada: "1999-08-09",
    diagnostico_principal: "SEQUELAS DE AVE",
    medicamentos: "CARBAMAZEPINA 200MG 01 CP 08/20HS; DEPAKENE 250MG 01 CP 8HS; FENOBARBITAL 100MG 01 CP 08/20HS; DIAZEPAM 10MG 01 CP 08/20HS; OMEPRAZOL 20MG 01 CP 08HS; USO DE FRALDA GERIATRICA TM-G-XG 2 A 3 TROCAS DIARIAS",
    observacoes: "DEPENDÊNCIA FISICA: DEAMBULAÇÃO COMPROMETIDA DEVIDO DEFICIÊNCIA EM MID; GRAU DE DEPENDÊNCIA: I; CID 10: I69"
  },
  {
    nome: "MARIA RAIMUNDA GONÇALVES SOARES",
    cpf: "016.778.856-61",
    data_nascimento: "1949-04-23",
    sexo: "F",
    naturalidade: "CORAÇÃO DE JESUS-MG",
    municipio_residencia: "CORAÇÃO DE JESUS",
    data_entrada: "2004-01-19",
    diagnostico_principal: "SAÚDE MENTAL, HAS",
    medicamentos: "LOSARTANA 50MG 01 CP. 08/20HS; QUETIAPINA 25 MG 01 CP. 20HS",
    observacoes: "DEPENDÊNCIA FISICA: DEAMBULA; GRAU DE DEPENDÊNCIA: I; CID10: I.10"
  },
  {
    nome: "MARIA ZITA SALOME DA SILVA",
    cpf: "815.510.886-49",
    data_nascimento: "1958-09-17",
    sexo: "F",
    naturalidade: "CORAÇÃO DE JESUS – MG",
    municipio_residencia: "C.DE JESUS",
    data_entrada: "2019-01-02",
    diagnostico_principal: "EX-ETILISTA, EX-TABAGISTA, TRANSTORNO MENTAL",
    medicamentos: "RISPERIDONA 1MG 01 CP 08/20HS; RISPERIDONA 2MG 01 CP 08/20HS; AMITRIPTILINA 25MG 01 CP 08/20HS( suspenso); SINVASTATINA 40MG 01 CP 20HS; QUETIAPINA 100MG 01 CP 20HS; MIRTAZAPINA 15MG 01 CP 20HS; DIAZEPAM 10MG 01 CP 20HS; BUPROPRIONA 150MG 01 CP 08HS; ADESIVO DE NICOTINA 21MG APLICAR 01 ADESIVO AO DIA, POR 28 DIAS - INICIO 06/02/2026",
    observacoes: "DEPENDÊNCIA FISICA: DEAMBULA; GRAU DE DEPENDÊNCIA: I; CID10: F17.2, F10.6"
  },
  {
    nome: "MARIA MENEZES DE JESUS",
    cpf: "673.617.656-53",
    data_nascimento: "1937-03-20",
    sexo: "F",
    naturalidade: "PIRANHAS-PB",
    municipio_residencia: "C.J",
    estado_civil: "Solteira",
    data_entrada: "2025-02-07",
    diagnostico_principal: "HAS",
    medicamentos: "MIRTAZAPINA 30MG 01 CP 20HS; DIOSMIN 450+ 50 MG 01 CP 08HS; LOSARTANA 50MG 01 CP 08/20HS; ANLODIPINO 5MG 01 CP 08 HS; AAS 100MG 01 CP APÓS ALMOÇO; ALENIA 12/400MCG 01 PSULA 08/20HS; USO DE FRALDA GERIATRICA TM-G-XG 4 A 6 TROCAS DIARIAS",
    observacoes: "DEPENDÊNCIA FISICA: ACAMADA; GRAU DE DEPENDÊNCIA: III; CID: I10"
  },
  {
    nome: "MATILDE RODRIGUES RUAS",
    cpf: "016.905.226-45",
    data_nascimento: "1942-11-05",
    sexo: "F",
    naturalidade: "SANTA ROSA DE LIMA-MG/MOC",
    municipio_residencia: "C. DE JESUS",
    data_entrada: "2010-03-23",
    diagnostico_principal: "HAS",
    medicamentos: "ANLODIPINO 5MG 01 CP 08HS; CAPTOPRIL 25MG 01 CP 08/20HS; CLONAZEPAN 2,5MG/ML; USO DE FRALDA GERIATRICA TM-G 4 A 6 TROCAS DIARIAS",
    observacoes: "DEPENDÊNCIA FISICA: ACAMADA; GRAU DE DEPENDÊNCIA: I; CID10: I.10"
  },
  {
    nome: "SEBASTIANA FERREIRA DE OLIVEIRA",
    cpf: "705.832.246-52",
    data_nascimento: "1938-09-19",
    sexo: "F",
    naturalidade: "CORAÇÃO DE JESUS-MG",
    municipio_residencia: "C.DE JESUS / LUIZ PIRES DE MINAS",
    data_entrada: "2025-06-09",
    diagnostico_principal: "HAS/DEFICIENCIA VISUAL",
    medicamentos: "LOSARTANA 50MG 01 CP 08/20HS; ANLODIPINO 10MG 01 CP 08HS; SINVASTTINA 20MG 01 CP 20HS; CARBAMAZEPINA 200MG 01 CP 20HS; MIRTAZAPINA 15 MG 01 CP 20HS; USO DE FRALDA GERIATRICA TM-G 4 A 6 TROCAS DIARIAS",
    observacoes: "DEPENDÊNCIA FISICA: DEABULA COM AUXILIO DEVIDO DEFICIÊNCIA VISUAL; GRAU DE DEPENDÊNCIA: II; CID10: I10"
  },
  {
    nome: "SEBASTIÃO MOREIRA LEITE",
    cpf: "043.212.186-24",
    data_nascimento: "1973-02-14",
    sexo: "M",
    naturalidade: "CORAÇÃO DE JESUS",
    municipio_residencia: "C. DE JESUS",
    data_entrada: "2026-03-31",
    diagnostico_principal: "HAS / DM E SEQUELA DE TCE",
    medicamentos: "DEPAKENNE 250MG 01 CM 06HS; AMITRIPTILINA 25 MG 01 CP 18 HS; LEVOTIROXINA 37.5 01 CP EM JEJUM; METFORMINA 850MG 01 CP 14HS; USO DE FRALDA GERIATRICA TM-G-XG 2 A 3 TROCAS DIARIAS",
    observacoes: "DEPENDÊNCIA FISICA: CADEIRANTE; GRAU DE DEPENDÊNCIA: II"
  },
  {
    nome: "TEREZA SOARES FONSECA",
    cpf: "116.398.686-07",
    data_nascimento: "1948-10-12",
    sexo: "F",
    naturalidade: "LAGOA DOS PATOS",
    municipio_residencia: "LAGOS DOS PATOS / C. DE JESUS",
    data_entrada: "2021-08-06",
    diagnostico_principal: "HAS, ANSIEDADE, OSTEOPOROSE",
    medicamentos: "AMITRIPTILINA 25 MG 01 CP. 08/20HS; CAPTOPRIL 25MG 01 CP. 08 HS; ALENDRONATO DE SÓDIO 70 MG 01 CP SEGUNDA TOMAR 30 MINUTOS ANTES DO ALMOÇO, SEM DEITAR 01 H",
    observacoes: "DEPENDÊNCIA FISICA: DEAMBULA SEM AUXILIO; GRAU DE DEPENDÊNCIA: I; CID10: H10 e F41"
  },
  {
    nome: "TEREZINHA ALVES DA ROCHA",
    cpf: "016.792.116-92",
    data_nascimento: "1955-05-16",
    sexo: "F",
    naturalidade: "JEQUITAI/ BOCAIUVA-MG",
    municipio_residencia: "C. DE JESUS",
    estado_civil: "Solteira",
    data_entrada: "2010-01-02",
    diagnostico_principal: "SAÚDE MENTAL",
    medicamentos: "QUETIAPINA 25MG 01 CP 20HS",
    observacoes: "DEPENDÊNCIA FISICA: DEAMBULA SEM AUXILIO; GRAU DE DEPENDÊNCIA: I"
  },
  {
    nome: "VALDENICE DOS SANTOS",
    cpf: "016.779.066-85",
    data_nascimento: "1964-10-15",
    sexo: "F",
    naturalidade: "CORAÇÃO DE JESUS – MG",
    municipio_residencia: "C. DE JESUS",
    estado_civil: "Solteira",
    data_entrada: "1999-06-26",
    diagnostico_principal: "ESQUIZOFRENIA",
    medicamentos: "AMPLICTIL 50MG 01 CP. 20HS; HALOPERIDOL 5MG 01 CP. 08/20HS; AKINETON 2MG 01 CP. 08/20HS",
    observacoes: "DEPENDÊNCIA FISICA: DEABULA SEM AUXILIO; GRAU DE DEPENDÊNCIA: I; CID10: F20"
  },
  {
    nome: "VICENTE AMARAL FERNANDES",
    cpf: "053.779.066-85",
    data_nascimento: "1943-07-17",
    sexo: "M",
    naturalidade: "CORAÇÃO DE JESUS",
    municipio_residencia: "C.DE JESUS",
    data_entrada: "2024-04-16",
    diagnostico_principal: "ACAMADO, CADEIRANTE EM USO DE FRALDA",
    medicamentos: "CARBAMAZEPINA 200MG 01 CP. 08HS; AAS 100MG 01 COMP. 014 HS; PROPANOLOL 10MG 01 CP. 08HS; MIRTAZPINA 30MG 01 CP.; USO DE FRALDA GERIATRICA TM-G-XG 4 A 6 TROCAS DIARIAS",
    observacoes: "DEPENDÊNCIA FISICA: CADEIRANTE; GRAU DE DEPENDÊNCIA: II; CID10: Z99.3"
  },
  {
    nome: "ZENILDA PEREIRA DA SILVA",
    cpf: "038.588.706-09",
    data_nascimento: "1971-04-14",
    sexo: "F",
    naturalidade: "CAMPO AZUL-MG",
    municipio_residencia: "PIRAPORA/C.DE JESUS",
    estado_civil: "Casada",
    data_entrada: "1999-11-24",
    diagnostico_principal: "TRANSTORNO MENTAL NÃO ESPECIFICADO",
    medicamentos: "AKINETON 2MG 01 CP. 08HS; AMITRIPTILINA 25MG 02 CP. 08/20HS; HALOPERIDOL 5MG 01 CP. 20HS; DIAZEPAM 10MG 01 CP. 20HS; QUETIAPINA 25MG 01 CP. 08HS",
    observacoes: "DEPENDÊNCIA FISICA: DEABULA SEM AUXÍLIO; GRAU DE DEPENDÊNCIA: I; CID10: F99"
  },
  {
    nome: "ZELITA DIAS FRAGA",
    cpf: "887.821.076-53",
    data_nascimento: "1957-06-10",
    sexo: "F",
    naturalidade: "CORAÇÃO DE JESUS-MG",
    municipio_residencia: "C. DE JESUS",
    data_entrada: "2010-01-04",
    diagnostico_principal: "DIABETES MELLITUS INSULINO DEPENDENTE",
    medicamentos: "INSULINA NPH 16 UI /DIA 06HS; ESCITALOPRAN 20MG 01 CP 08HS-INICIO 15/07/2026 MEDICAÇÃO POR 30 A 60 DIAS",
    observacoes: "DEPENDÊNCIA FISICA: DEAMBULA SEM AUXÍLIO; GRAU DE DEPENDÊNCIA: I; CID10: E10"
  }
];

async function buscarCPFs() {
  const resp = await fetch(`${SUPABASE_URL}/rest/v1/pacientes?select=cpf`, {
    headers: {
      'apikey': SUPABASE_KEY,
      'Authorization': `Bearer ${SUPABASE_KEY}`
    }
  });
  const data = await resp.json();
  return new Set(data.map(p => p.cpf));
}

async function cadastrarPaciente(paciente) {
  const id = paciente.cpf.replace(/\D/g, '') + Date.now().toString(36);
  const dados = {
    id,
    nome: paciente.nome,
    cpf: paciente.cpf,
    data_nascimento: paciente.data_nascimento,
    sexo: paciente.sexo,
    estado_civil: paciente.estado_civil || '',
    naturalidade: paciente.naturalidade || '',
    municipio_residencia: paciente.municipio_residencia || '',
    data_entrada: paciente.data_entrada,
    diagnostico_principal: paciente.diagnostico_principal,
    medicamentos: paciente.medicamentos,
    observacoes: paciente.observacoes || '',
    status: 'ativo'
  };

  const resp = await fetch(`${SUPABASE_URL}/rest/v1/pacientes`, {
    method: 'POST',
    headers: {
      'apikey': SUPABASE_KEY,
      'Authorization': `Bearer ${SUPABASE_KEY}`,
      'Content-Type': 'application/json',
      'Prefer': 'return=minimal'
    },
    body: JSON.stringify(dados)
  });

  return resp.ok;
}

async function main() {
  console.log('Buscando CPFs existentes...');
  const cpfsExistentes = await buscarCPFs();
  console.log(`Já existem ${cpfsExistentes.size} pacientes no sistema.`);

  let cadastrados = 0;
  let duplicados = 0;
  let erros = 0;

  for (const p of pacientes) {
    if (cpfsExistentes.has(p.cpf)) {
      console.log(`SKIP (duplicado): ${p.nome} - CPF: ${p.cpf}`);
      duplicados++;
      continue;
    }

    const ok = await cadastrarPaciente(p);
    if (ok) {
      console.log(`OK: ${p.nome} - CPF: ${p.cpf}`);
      cadastrados++;
    } else {
      console.log(`ERRO: ${p.nome} - CPF: ${p.cpf}`);
      erros++;
    }
  }

  console.log(`\n=== RESUMO ===`);
  console.log(`Cadastrados: ${cadastrados}`);
  console.log(`Duplicados (skip): ${duplicados}`);
  console.log(`Erros: ${erros}`);
}

main().catch(console.error);
