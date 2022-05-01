create database db_grade;
use db_grade;

create table curso(
	id int not null auto_increment primary key,
    nome varchar(100) not null
);

create table professor(
	matricula char(8) primary key not null,
    nome varchar(100) not null,
    email varchar(100) not null,
    cargo varchar(40) not null
);

create table aluno(
	matricula char(9) primary key,
    email varchar(255),
    isBolsista boolean,
    nome varchar(255),
    situacao enum('Regular', 'Em Risco', 'Jubilado') not null default 'Regular',
    rendimento float not null default 3,
    cursoId int null,
    foreign key (cursoId) references curso(id)
);

create table rate(
	id int auto_increment primary key not null,
    `description` varchar(255) null,
    nota int not null,
    professorMatricula char(8) null,
    foreign key (professorMatricula) references professor(matricula)
);

create table materia(
	codigo char(7) not null primary key,
    nome varchar(100) not null,
    carga int not null
);

create table materia_prerequisito_materia(
	materiaCodigo char(7) not null primary key,
	requisitoCodigo char(7) not null primary key,
	foreign key ('materiaCodigo') references 'materia'('codigo') on delete cascade on update cascade,
	foreign key ('requisitoCodigo') references 'materia'('codigo') on delete cascade on update cascade
);

create table materia_professores_professor(
	materiaCodigo char(7) not null primary key,
	professorMatricula char(8) not null primary key,
	foreign key ('materiaCodigo') references 'materia'('codigo') on delete cascade on update cascade,
	foreign key ('professorMatricula') references 'professor'('matricula') on delete cascade on update cascade
);

create table materia_cursos_curso(
	materiaCodigo char(7) not null primary key,
	cursoId int not null primary key,
    	foreign key ('materiaCodigo') references 'materia'('codigo') on delete cascade on update cascade,
	foreign key ('cursoId') references 'curso'('id') on delete cascade on update cascade
);

create table aluno_materias_materia(
	alunoMatricula char(9) not null primary key,
	materiaCodigo char(10) not null primary key,
    	foreign key ('alunoMatricula') references 'aluno'('matricula') on delete cascade on update cascade,
	foreign key ('materiaCodigo') references 'materia'('codigo') on delete cascade on update cascade
);

--CREATE VIEW alunos_matriculados_materias
--AS
--SELECT a.nome, m.codigo
--FROM aluno_materias_materia amm 
--LEFT JOIN aluno a ON a.matricula = amm.alunoMatricula
--RIGHT JOIN materia m ON m.codigo = amm.materiaCodigo
--WHERE amm.alunoMatricula is not null
--ORDER BY amm.materiaCodigo;


--delimiter //
--CREATE PROCEDURE db_grade.avg_nota_professor (IN matricula_professor char(8))
--BEGIN
--	SELECT AVG(r.nota) as media
--	FROM rate as r
--	JOIN professor as p on r.professorMatricula = matricula_professor and p.matricula = r.professorMatricula;
--END//
--delimiter ;
