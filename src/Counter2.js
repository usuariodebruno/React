import React, { useEffect, useState } from "react";

function Counter(props) {
    const[count, setCount] = useState(props.count); // inicializa o estado com o valor de props.count

    // Com o array vazio, o useEffect é chamado apenas uma vez, quando o componente é montado
    useEffect(() => {
        setCount(parseInt(localStorage.getItem("count")));

        // Isso só será executado quando o componente for desmontado
        return () => {
            console.log("componente desmontado");
        }
    }, [])

    // Com o array de dependências, o useEffect é chamado toda vez que a variável count é alterada
    useEffect(()=> {
        document.title = count;
        localStorage.setItem("count", count);
    }, [count])

    // Função para incrementar o contador
    function increment() {
        setCount(count + 1);
        console.log("increment");
    }

    // Função para decrementar o contador
    function decrement() {
        setCount(count - 1);
        console.log("decrement");
    }

    return (
    <div>
        <h1>{count}</h1>
        <button onClick={increment}>+</button>        
        <button onClick={decrement}>-</button>
    </div>
    );    
}

export default Counter;