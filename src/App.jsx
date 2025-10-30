import React, {Component} from "react";
import cronometroImg from './assets/cronometro.png';
import './estilo.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numero: 0.0,
      botao: "VAI"

    }

    this.timer = null;
    this.vai = this.vai.bind(this);
    this.limpar = this.limpar.bind(this);

  }

  vai() {
    if(this.timer !== null) {
      const state = this.state;
      clearInterval(this.timer);//Pausa
      this.timer = null;//Atribui num novamente
      state.botao = "VAI";
      this.setState(this);

    }else{
      this.timer = setInterval(() => {
        let state = this.state;
        state.numero += 0.1;
        state.botao = "PAUSAR";
        this.setState({state: state});

      }, 100)

    }

  }

  limpar() {
    const state = this.state;
    clearInterval(this.timer);//Pausa
    this.timer = null;//Atribui null novamente
    state.numero = 0;//Modifica o valor para 0
    state.botao = "VAI";
    this.setState({state: state});

  }

  render() {
    return(
      <div className="container">
        <img src={cronometroImg} className="img"/>
        <a className="timer">{this.state.numero.toFixed(1)}</a>
        <div className="areaBtns">
          <a className="btns" onClick={this.vai}>{this.state.botao}</a>
          <a className="btns" onClick={this.limpar}>LIMPAR</a>
        </div>

      </div>

    )

  }

}

export default App;