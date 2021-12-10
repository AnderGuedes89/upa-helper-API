-- Script SQL para database upahelper -- 
-- Popular as tabelas: Genders | RiskRatings | Ethnicities | PainIntensities | UserTypes | AttendanceStatuses com dados iniciais --
-- Cria usuário Administrador do Sistema com CPF: 000.000.000-00 e Senha: 123 --
-- Executar esse script após o 1º start da API da plataforma --

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
