import React, {Component} from "react";

class Teste extends Component {
    render() {
        return(
            <div>
                <h3>{this.props.id}</h3>
                <h4>Nome: {this.props.nome}</h4>
                <hr/>
            </div>

        )

    }

}

export default Teste;