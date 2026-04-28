import { Link } from 'react-router-dom';
import './style.css';

function Home() {
    return (
        <>
        <h1>Bem vindo</h1>
        <Link to="/Ex1">
        <button>Exercicio 1</button>
        </Link>
        </>
    )
}

export default Home