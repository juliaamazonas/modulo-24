function Aluno(nome, idade) {
    this.nome = nome;
    this.idade = idade;
}


Aluno.prototype.info = function() {
    return `${this.nome}, ${this.idade} anos`;
};

const aluno1 = new Aluno('Marcelo', 5);
console.log(aluno1.info());


function EnsinoFundamental(nome, idade, sala) {
    Aluno.call(this, nome, idade);
    this.sala = sala;
}

EnsinoFundamental.prototype = Object.create(Aluno.prototype);
EnsinoFundamental.prototype.constructor = EnsinoFundamental;

EnsinoFundamental.prototype.infoSala = function() {
    return `${this.nome} está na sala ${this.sala} do Ensino Fundamental`;
};


function EnsinoMedio(nome, idade, ano) {
    Aluno.call(this, nome, idade);
    this.ano = ano;
}

EnsinoMedio.prototype = Object.create(Aluno.prototype);
EnsinoMedio.prototype.constructor = EnsinoMedio;

EnsinoMedio.prototype.infoAno = function() {
    return `${this.nome} está no ${this.ano}º ano do Ensino Médio`;
};

const aluno2 = new EnsinoFundamental('Ricardo', 10, '4B');
console.log(aluno2.info()); 
console.log(aluno2.infoSala());

const alunoEnsinoFundamental = new EnsinoFundamental('Ana', 8, '2A');
console.log(alunoEnsinoFundamental.info()); 
console.log(alunoEnsinoFundamental.infoSala()); 

const alunoEnsinoMedio = new EnsinoMedio('Pedro', 15, '1');
console.log(alunoEnsinoMedio.info()); // Output: "Pedro, 22 anos"
console.log(alunoEnsinoMedio.infoAno()); // Output: "Pedro está cursando Engenharia"