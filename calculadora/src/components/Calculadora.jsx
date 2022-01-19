import React, { useState }from "react";
import "./Calculadora.css";

function Calculadora() {
  const [num, setNum] = useState(0);
  const [numAntigo, setNumAntigo] = useState(0);
  const [operador, setOperador] = useState();

  function handleOperador(e) {
    var operadorEntrada=e.target.value;
    setOperador(operadorEntrada);
    setNumAntigo(num);
    setNum(0);
  }

  function calcular () {
if(operador==="+"){
  setNum(parseFloat(numAntigo)+parseFloat(num));
} else if(operador==="-"){
  setNum(numAntigo-num);
} else if(operador==="*"){
  setNum(numAntigo*num);
} else if(operador==="/"){
  setNum(numAntigo/num);
}

 console.log(numAntigo);
 console.log(num);
 console.log(operador);
  }

  function entradaNumero(e) {
    if(num=== 0) {
      setNum(e.target.value);
    } else {
      setNum(num + e.target.value);
    }
  }

  function limpar() {
    setNum(0);
  }
  return (
    <div className="container">
      <h1>Calculadora</h1>
      <table>
        <tr>
          <td>
            <button  onClick={entradaNumero} value={7}> 7</button>
            <button  onClick={entradaNumero} value={8}> 8</button>
            <button  onClick={entradaNumero} value={9}> 9</button>
            <button  onClick={entradaNumero} value={"/"}> /</button>
          </td>
          <td>
          <button  onClick={entradaNumero} value={4}> 4</button>
          <button  onClick={entradaNumero} value={5}> 5</button>
          <button  onClick={entradaNumero} value={6}> 6</button>
          <button  onClick={entradaNumero} value={"*"}> *</button>
          </td>
          <button  onClick={entradaNumero} value={1}> 1</button>
          <button  onClick={entradaNumero} value={2}> 2</button>
          <button  onClick={entradaNumero} value={3}> 3</button>
          <button  onClick={entradaNumero} value={"-"}> -</button>
          <td>
          <button  onClick={entradaNumero} value={0}> 0</button>
          <button  onClick={entradaNumero} value={"."}> .</button>
          <button  onClick={entradaNumero} value={"="}> 9</button>
          <button  onClick={entradaNumero} value={"+"}> +</button>
          </td>
        </tr>
      </table>
      <h2 className="resultado">{num}</h2>
    </div>
  );
}

export default Calculadora;
