import styled from "styled-components";
import {useContext,useState} from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import TokenContext from "./Context";

function NewEntryNegative() {
    const {token} = useContext(TokenContext);
    const [isSending,setIsSending] = useState(false);
    const [form, setForm] = useState({description:"", value:""});
    const config = { headers: { "authorization": `Bearer ${token}` }};
    let navigate = useNavigate();

    function sendFailed(){
        setIsSending(false);
        alert("não foi possivel enviar, tente de novo")
    }

    function sendSucces(response){
        alert("enviado com sucesso")
        navigate("/registros")
    }

    function send(body, cadastro){    
    const promise = axios.post(`http://localhost:5000/negativevalue`, body, cadastro);
    return promise;
    }

    function handleSubmit(event){
        event.preventDefault();
        if(isSending){return};
        setIsSending(!isSending);
        const promise = send(form, config);
        promise.then(response=>sendSucces(response));
        promise.catch(response=>sendFailed(response));
    }


    return (
        <Main>
            <h1>Nova saída</h1>
            <form onSubmit={handleSubmit}>
                <Input required disabled={isSending ? true: false } onChange={(e) => setForm({...form, value: e.target.value.toString().replace(",", ".")})} step="any" placeholder="Valor" />
                <Input required disabled={isSending ? true: false } onChange={(e) => setForm({...form, description: e.target.value})} type="text" placeholder="Descrição" />
                <Button>Salvar saída</Button>
            </form>
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
    form{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    h1{
        width: 85vw;
        text-align: left;
        margin-top: 25px;
        font-weight: 700;
        color: #FFFFFF;
        font-size: 26px;
        margin-bottom: 40px;
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


export default NewEntryNegative;