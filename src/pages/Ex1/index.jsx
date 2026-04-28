import { useState } from 'react';
import './style.css';

function Ex1() {
    const [ numero1, setNumero1 ] = useState ("")
    const [ numero2, setNumero2 ] = useState ("")

    const [ resultado, setResultado ] = useState ("")
    function handleSubmit(event) {
        event.preventDefault()
        console.log(numero1,numero2)
        setResultado (numero1+numero2)
    }
     return (
        <>
        <h1>Conta matematica</h1>

        <form onSubmit={handleSubmit}>
            <label>Numero 1</label>
            <input
            type="number"
            value={numero1}
            anCharge={ (event) => setNumero1(event.target.value) }
            />

              <label>Numero 2</label>
            <input
            type="Number"
            value={numero2}
            anCharge={ (event) => setNumero2(event.target.value) }
            />

            <p>{resultado}</p>

            <button type="submit">Somar</button>
        </form>
            </>
    )
}

export default Ex1