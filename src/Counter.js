import React from "react";

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = { count: this.props.count }; // Estado inicial do contador

        this.increment = this.increment.bind(this);
        // localStorage.setItem("state", JSON.stringify (localStorage.getItem('state'))) 

    }

    increment() {
        // Forma correta de atualizar o estado - Pois cria uma fila de atualizações
        this.setState((state) => {
            return { count: state.count + 1 }
        },
            () => {
                console.log(this.state.count) // Callback para mostrar o valor atualizado (callback é chamado após o estado ser atualizado)
                localStorage.setItem("state", JSON.stringify(this.state)) // Salvando o estado no localStorage
            });
    }

    // Método que é chamado após o componente ser montado
    componentDidMount() { 
        // Se há algum dado que voce precisa recuperar do backend, é aqui que você deve fazer isso

        localStorage.setItem("state", JSON.stringify(this.state)) // Salvando o estado no localStorage
        this.setState(JSON.parse(localStorage.getItem("state")));  // Recuperando o estado do localStorage
        
        console.log("Componente montado: "+ localStorage.getItem('state'));

        //this.setState(JSON.parse(localStorage.getItem("state")));  // Recuperando o estado do localStorage
    }

    // shouldComponentUpdate - Método que é chamado toda vez que um componente é atualizado
    shouldComponentUpdate(nextProps, nextState) {
        if (nextState.count > 10) {
            return false, console.log("Chegou a 10, não atualiza mais");
        }
        return true;
    }

    // Método que é chamado quando o componente vai sair da tela
    componentWillUnmount() {

    }

    render() { // Renderiza toda vez que um componente é atualizado
        return (
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={() => this.increment()}>Incrementa</button>
            </div>
        );
    }
}

export default Counter;