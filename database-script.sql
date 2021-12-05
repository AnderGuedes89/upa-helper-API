-- Script SQL para database upahelper -- 
-- Popular as tabelas: Genders | RiskRatings | Ethnicities | PainIntensities | UserTypes | AttendanceStatuses com dados iniciais --
-- Criar usuário Administrador do Sistema com CPF: 000.000.000-00 e Senha: 123 --
-- Criar usuários com Senha: 123 --
-- Executar esse script após o 1º start da API da plataforma

INSERT INTO public."Genders"
  VALUES (1, 'Masculino', TRUE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  (2, 'Feminino', TRUE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

INSERT INTO public."RiskRatings"
  VALUES (1, 'Azul', TRUE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  (2, 'Verde', TRUE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  (3, 'Amarelo', TRUE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  (4, 'Vermelho', TRUE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

INSERT INTO public."Ethnicities"
  VALUES (1, 'Branca', TRUE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  (2, 'Preta', TRUE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  (3, 'Parda', TRUE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  (4, 'Indígena', TRUE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  (5, 'Amarela', TRUE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  (99, 'Sem informação', TRUE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

INSERT INTO public."PainIntensities"
  VALUES (1, 'Dor Leve', TRUE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  (2, 'Dor Moderada', TRUE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  (3, 'Dor Intensa', TRUE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  (4, 'Sem Dor', TRUE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

INSERT INTO public."UserTypes"
  VALUES (1, 'Médico(a)', TRUE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  (2, 'Enfermeiro(a)', TRUE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  (3, 'Técnico(a) de Enfermagem', TRUE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  (4, 'Auxiliar Administrativo', TRUE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  (5, 'Técnico(a) em Radiologia', TRUE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  (6, 'Técnico(a) de Laboratório', TRUE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  (7, 'Farmacêutico(a)', TRUE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  (8, 'Auxiliar de Farmácia', TRUE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  (9, 'Diretor(a)', TRUE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  (10, 'Coordenador(a)', TRUE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  (11, 'Auxiliar de TI', TRUE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  (99, 'Administrador(a) do Sistema', TRUE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

INSERT INTO public."AttendanceStatuses"
  VALUES (1, 'Aguardando Triagem', TRUE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  (2, 'Aguardando Consulta', TRUE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  (3, 'Aguardando Exame', TRUE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  (4, 'Aguardando Medicação', TRUE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  (5, 'Aguardando Retorno', TRUE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  (6, 'Atendimento Concluído', TRUE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

-- ########################################################################################## -- 
-- ########################################################################################## -- 

INSERT INTO public."Users"
	VALUES (1,
	'Administrador',
	'$2a$10$HLXIRj02kxXZddWb5pngVOIyaSP/ly8v3r2z3QvL1WSPJK11A7h6i',
	'admin@email.com',
	CURRENT_TIMESTAMP,
	'00.000.000-0',
	'000.000.000-00',
	'13607-117',
	'Rua Tenente Oswaldo Valério do Sacramento',
	'679',
	'Jardim Santa Efigênia',
	'Araras',
	'SP',
	'',
	'(19) 3771-9867',
	'(19) 99936-9739',
	'',
	true,
	99,
	CURRENT_TIMESTAMP,
	CURRENT_TIMESTAMP);

-- ########################################################################################## -- 
-- ########################################################################################## -- 

INSERT INTO public."Users"
  VALUES (2,
  'Gregory House',
  '$2a$10$HLXIRj02kxXZddWb5pngVOIyaSP/ly8v3r2z3QvL1WSPJK11A7h6i',
  'house@email.com',
  '1959-05-15 00:00:00.000 -0300',
  '11.111.11-1',
  '111.111.111-11',
  '13607-050',
  'Rua Gerolamo Gaiano',
  '213',
  'Jardim Nossa Senhora de Fátima',
  'Araras',
  'SP',
  'Casa',
  '(19) 3510-6131',
  '(19) 99680-1441',
  '11111111111111111111',
  true,
  1,
  CURRENT_TIMESTAMP,
  CURRENT_TIMESTAMP),
  (3,
  'Carol Hathaway',
  '$2a$10$HLXIRj02kxXZddWb5pngVOIyaSP/ly8v3r2z3QvL1WSPJK11A7h6i',
  'hathaway@email.com',
  '1957-05-08 00:00:00.000 -0300',
  '22.22.222-2',
  '222.222.222-22',
  '13601-362',
  'Rua João Zorzenon Filho',
  '343',
  'Vila Dona Rosa Zurita',
  'Araras',
  'SP',
  '',
  '(19) 3866-5040',
  '(19) 98468-0846',
  '2222222222222222222',
  true,
  2,
  CURRENT_TIMESTAMP,
  CURRENT_TIMESTAMP),
  (4,
  'Abby Lockhart',
  '$2a$10$HLXIRj02kxXZddWb5pngVOIyaSP/ly8v3r2z3QvL1WSPJK11A7h6i',
  'lockhart@email.com',
  '1968-01-10 00:00:00.000 -0300',
  '33.333.333-3',
  '333.333.333-33',
  '13604-047',
  'Rua Sorocaba',
  '918',
  'Jardim São João',
  'Araras',
  'SP',
  '',
  '(19) 2741-5397',
  '(19) 98562-0087',
  '',
  true,
  3,
  CURRENT_TIMESTAMP,
  CURRENT_TIMESTAMP),
  (5,
  'Jerry Markovic',
  '$2a$10$HLXIRj02kxXZddWb5pngVOIyaSP/ly8v3r2z3QvL1WSPJK11A7h6i',
  'markovic@email.com',
  '1968-09-24 00:00:00.000 -0300',
  '44.444.444-4',
  '444.444.444-44',
  '13603-276',
  'Rua Higino Turatti',
  '757',
  'Jardim Residencial Lagoa',
  'Araras',
  'SP',
  '',
  '(19) 2667-7267',
  '(19) 98133-5630',
  '',
  true,
  4,
  CURRENT_TIMESTAMP,
  CURRENT_TIMESTAMP);
