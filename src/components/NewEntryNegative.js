import styled from "styled-components";

function NewEntryNegative() {
    return (
        <Main>
            <h1>Nova saída</h1>
            <form>
                <Input placeholder="Valor" />
                <Input placeholder="Descrição" />
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