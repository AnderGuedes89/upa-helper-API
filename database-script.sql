-- Script SQL para database upahelper -- 
-- Popular as tabelas: Genders | RiskRatings | Ethnicities | PainIntensities | UserTypes | AttendanceStatuses com dados iniciais --
-- Criar usuário Administrador do Sistema com CPF: 000.000.000-00 e Senha: 123 --
-- Executar esse script após o 1º start da API da plataforma

insert
	into
	public."Genders"
values (1,
'Masculino',
true,
CURRENT_TIMESTAMP,
CURRENT_TIMESTAMP),
(2,
'Feminino',
true,
CURRENT_TIMESTAMP,
CURRENT_TIMESTAMP);

-- -------------------------- --
insert
	into
	public."RiskRatings"
values (1,
'Azul',
true,
CURRENT_TIMESTAMP,
CURRENT_TIMESTAMP),
(2,
'Verde',
true,
CURRENT_TIMESTAMP,
CURRENT_TIMESTAMP),
(3,
'Amarelo',
true,
CURRENT_TIMESTAMP,
CURRENT_TIMESTAMP),
(4,
'Vermelho',
true,
CURRENT_TIMESTAMP,
CURRENT_TIMESTAMP);

-- -------------------------- --
insert
	into
	public."Ethnicities"
values (1,
'Branca',
true,
CURRENT_TIMESTAMP,
CURRENT_TIMESTAMP),
(2,
'Preta',
true,
CURRENT_TIMESTAMP,
CURRENT_TIMESTAMP),
(3,
'Parda',
true,
CURRENT_TIMESTAMP,
CURRENT_TIMESTAMP),
(4,
'Indígena',
true,
CURRENT_TIMESTAMP,
CURRENT_TIMESTAMP),
(5,
'Amarela',
true,
CURRENT_TIMESTAMP,
CURRENT_TIMESTAMP),
(99,
'Sem informação',
true,
CURRENT_TIMESTAMP,
CURRENT_TIMESTAMP);

-- -------------------------- --
insert
	into
	public."PainIntensities"
values (1,
'Dor Leve',
true,
CURRENT_TIMESTAMP,
CURRENT_TIMESTAMP),
(2,
'Dor Moderada',
true,
CURRENT_TIMESTAMP,
CURRENT_TIMESTAMP),
(3,
'Dor Intensa',
true,
CURRENT_TIMESTAMP,
CURRENT_TIMESTAMP),
(4,
'Sem Dor',
true,
CURRENT_TIMESTAMP,
CURRENT_TIMESTAMP);

-- -------------------------- --
insert
	into
	public."UserTypes"
values (1,
'Médico(a)',
true,
CURRENT_TIMESTAMP,
CURRENT_TIMESTAMP),
(2,
'Enfermeiro(a)',
true,
CURRENT_TIMESTAMP,
CURRENT_TIMESTAMP),
(3,
'Técnico(a) de Enfermagem',
true,
CURRENT_TIMESTAMP,
CURRENT_TIMESTAMP),
(4,
'Auxiliar Administrativo',
true,
CURRENT_TIMESTAMP,
CURRENT_TIMESTAMP),
(5,
'Técnico(a) em Radiologia',
true,
CURRENT_TIMESTAMP,
CURRENT_TIMESTAMP),
(6,
'Técnico(a) de Laboratório',
true,
CURRENT_TIMESTAMP,
CURRENT_TIMESTAMP),
(7,
'Farmacêutico(a)',
true,
CURRENT_TIMESTAMP,
CURRENT_TIMESTAMP),
(8,
'Auxiliar de Farmácia',
true,
CURRENT_TIMESTAMP,
CURRENT_TIMESTAMP),
(9,
'Diretor(a)',
true,
CURRENT_TIMESTAMP,
CURRENT_TIMESTAMP),
(10,
'Coordenador(a)',
true,
CURRENT_TIMESTAMP,
CURRENT_TIMESTAMP),
(11,
'Auxiliar de TI',
true,
CURRENT_TIMESTAMP,
CURRENT_TIMESTAMP),
(99,
'Administrador(a) do Sistema',
true,
CURRENT_TIMESTAMP,
CURRENT_TIMESTAMP);

-- -------------------------- --
insert
	into
	public."AttendanceStatuses"
values (1,
'Aguardando Triagem',
true,
CURRENT_TIMESTAMP,
CURRENT_TIMESTAMP),
(2,
'Aguardando Consulta',
true,
CURRENT_TIMESTAMP,
CURRENT_TIMESTAMP),
(3,
'Aguardando Exame',
true,
CURRENT_TIMESTAMP,
CURRENT_TIMESTAMP),
(4,
'Aguardando Medicação',
true,
CURRENT_TIMESTAMP,
CURRENT_TIMESTAMP),
(5,
'Aguardando Retorno',
true,
CURRENT_TIMESTAMP,
CURRENT_TIMESTAMP),
(6,
'Atendimento Concluído',
true,
CURRENT_TIMESTAMP,
CURRENT_TIMESTAMP);

-- -------------------------- --
insert
	into
	public."Users"
values (1,
'Admin',
'$2a$10$HLXIRj02kxXZddWb5pngVOIyaSP/ly8v3r2z3QvL1WSPJK11A7h6i',
'',
CURRENT_TIMESTAMP,
'00.000.000-0',
'000.000.000-00',
'',
'',
'',
'',
'',
'',
'',
'',
'',
'',
true,
99,
CURRENT_TIMESTAMP,
CURRENT_TIMESTAMP);
