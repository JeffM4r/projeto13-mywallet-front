import styled from "styled-components";
import { Link } from "react-router-dom";

function Login() {
    return (
        <Main>
            <h1>MyWallet</h1>
            <form>
                <Input placeholder="E-mail" />
                <Input placeholder="Senha" />
                <Button>Entrar</Button>
            </form>
            <Link to="/cadastro">
                Primeira vez? Cadastre-se!
            </Link>
        </Main>
    )
}

const Main = styled.main`
background-color: #8C11BE;
height: 100vh;
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
    form{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    h1{
        font-family: 'Saira Stencil One', cursive;
        color: #FFFFFF;
        font-size: 32px;
        margin-bottom: 24px;
    }
    a{
        font-weight: 700;
        color:#FFFFFF;
        text-decoration: none;
    }
`
const Input = styled.input`
width: 85vw;
height: 58px;
border-radius: 5px;
padding-left: 15px;
padding-right: 15px;
font-size: 20px;
border:none;
box-sizing: border-box;
margin-bottom: 13px;
color: #000000;
`
const Button = styled.button`
height: 58px;
width: 85vw;
background-color: #A328D6;
border-radius: 5px;
border:none;
font-size: 20px;
color: #FFFFFF;
font-weight: 700;
margin-bottom: 36px;
`

export default Login;