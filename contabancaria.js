class ContaBancaria {
    constructor(senha, usuario, cpf, saldo){
        this.senha = senha;
        this.usuario = usuario;
        this.cpf = cpf;
        this.saldo = saldo;
        usuario(){
            console.log(`O ${this.usuario} acessou seu ${this.saldo}.`);
        }
    }
}

class Unidade extends ContaBancaria{
    constructor(senha, usuario, cpf, saldo){
        super(senha, usuario, cpf, saldo)
        saque(){
            console.log(`O saque só acontecerá quando o ${this.usuario} logar com seu ${this.cpf} e entrar com a ${this.senha}.`);
            
        }
    }
}