import React from 'react';
import IFSP_Logo from './images/IFSP_Logo.png';
import './Login.css';



export default class Login extends React.Component{
    constructor(props){
        super(props);
        this.state= {message: "em progresso..."};
    }

    sendMessage = () =>{
        this.setState({message: "concluído. Acesse o seu e-mail e clique no link de autenticação para prosseguir"});
    }

    render(){
    return(

        <div className="login-container">

            <form>
                <h3>Se cadastre no portal do IFSP</h3>
                <img src={IFSP_Logo} alt="Cadastro IFSP"></img>
                <input placeholder="Digite o seu nome completo"></input>
                <input placeholder="Digite o nome do seu usuário"></input>
                <input placeholder="Digite o seu e-mail"/>
                <input placeholder="Digite uma senha"></input>
                <input placeholder="Confirme a sua senha"></input>
                <button type="button" onClick={this.sendMessage}>Cadastrar</button>
                <h4>O seu cadastro está {this.state.message}</h4>
            </form>
        </div>
    );
    }
}
    

