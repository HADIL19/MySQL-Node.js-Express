create DATABASE notes_app ;
use notes_app;

create table notes (
    id int primary key auto_increment,
    title varchar(255) not null,
    contents text not null,
    created timestamp not null default now(),

);

insert into notes (title, contents) values 
('First Note', 'This is my first note!');
('my second note, a note avout somthing else');