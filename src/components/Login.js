import { useState,useContext } from "react";
import styled from "styled-components";
import { useNavigate,Link } from "react-router-dom";
import axios from "axios";
import TokenContext from "./Context";

function Login() {
    const { setToken,setName } = useContext(TokenContext);
    const [isLogIn, setIsLogIn] = useState(false);
    const [form, setForm] = useState({email:"", password:""});
    let navigate = useNavigate();

    function LoginError(){
        setIsLogIn(false);
        alert("Houve um erro nessa tentativa de login, por favor verifique seu email e senha");
    }

    function LoginSucces(response){
        setToken(response.data.token)
        setName(response.data.name)
        navigate("/registros")
    }

    function login(cadastro) {
        const promise = axios.post(`http://localhost:5000/login`, cadastro);
        return promise;
    }

    function handleSubmit(event){
        event.preventDefault();
        if(isLogIn){return};
        setIsLogIn(!isLogIn);
        const promise = login(form);
        promise.then(response => LoginSucces(response));
        promise.catch(response => LoginError(response));
    }


    return (
        <Main>
            <h1>MyWallet</h1>
            <form onSubmit={handleSubmit}>
                <Input required disabled={isLogIn ? true: false } onChange={(e) => setForm({...form, email: e.target.value})} type="email" placeholder="E-mail" />
                <Input required disabled={isLogIn ? true: false } onChange={(e) => setForm({...form, password: e.target.value})} type="password" placeholder="Senha" />
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