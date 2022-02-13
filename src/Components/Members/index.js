import React, {Component} from 'react';

class Member extends Component{

    constructor(props){
        super(props);
        this.state = {
            nome: props.nome
        };
        this.enter = this.enter.bind(this);
    }

    enter(){
        this.setState({nome: 'Fernando Coutinho'})
    }

    render(){
        return(
            <div>
                <h2>Bem vindo(a) {this.state.nome}</h2>
                <button onClick={this.enter}>Entrar como Fernando</button>
                <button onClick={() => this.setState({nome: 'Visitante'})}>Sair</button>
            </div>
        )
    }
}

export default Member;