import styled from "styled-components";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";


function SignUp() {
    const [isSignIn,setIsSignIn] = useState(false);
    const [form , setForm] = useState({name:"", email:"",password:"", passwordConfirmation: ""})
    let navigate = useNavigate();

    function signUpError(){
        setIsSignIn(false);
        alert("Houve um erro nessa tentativa de cadastro, por favor tente novamente");
    }

    function signUpSucces(){
        alert("cadastro feito com sucesso")
        navigate("/")
    }

    function signUp(cadastro) {
        const promise = axios.post(`http://localhost:5000/signup`, cadastro);
        return promise;
    }

    function handleSubmit(event){
        event.preventDefault();
        if(isSignIn){return};
        if(form.password !== form.passwordConfirmation){
            alert("As senhas estão diferents")
            return
        }
        setIsSignIn(!isSignIn);
        
        const promise = signUp({
            name:form.name,
            email:form.email,
            password:form.password
        })

        promise.then(response => signUpSucces(response));
        promise.catch(response => signUpError(response));
    }

    return (
        <Main>
            <h1>MyWallet</h1>
            <form onSubmit={handleSubmit}>
                <Input required type="text" disabled={isSignIn ? true: false } onChange={(e) => setForm({...form, name: e.target.value})} placeholder="Nome" />
                <Input required type="email" disabled={isSignIn ? true: false } onChange={(e) => setForm({...form, email: e.target.value})} placeholder="E-mail" />
                <Input required type="password" disabled={isSignIn ? true: false } onChange={(e) => setForm({...form, password: e.target.value})} placeholder="Senha" />
                <Input required type="password" disabled={isSignIn ? true: false } onChange={(e) => setForm({...form, passwordConfirmation: e.target.value})} placeholder="Confirme a senha" />
                <Button>Cadastrar</Button>
            </form>
            <Link to="/">
                Já tem uma conta? Entre agora!
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

export default SignUp;