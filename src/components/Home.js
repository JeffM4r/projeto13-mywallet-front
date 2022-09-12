import styled from "styled-components";
import { Link,useNavigate } from "react-router-dom";
import { IoLogOutOutline, IoAddCircleOutline, IoRemoveCircleOutline } from 'react-icons/io5';
import { useContext, useState, useEffect } from "react";
import axios from "axios";
import TokenContext from "./Context";


function Home() {
    const {name,token} = useContext(TokenContext);
    const config = { headers: { "authorization": `Bearer ${token}` }};
    const [hasItems, setHasItems] = useState(false);
    const [totalValor, setTotalValor] = useState(0);
    const [values, setValues] = useState([]);
    const [positive, setPosive] = useState(true);
    const navigate = useNavigate();

    function getShowValues(cadastro) {
        const promise = axios.get(`http://localhost:5000/values`, cadastro);
        return promise;
    }

    function logOut(){
        navigate("/")
    }


    function changeTotal(){
        let total2 = 0

        values.forEach(value => {
            if(value.type === "positive"){
                total2 += Number(value.value)
                return                    
            }

            total2-=Number(value.value)
            return                
        });

        if(total2 < 0){
            setPosive(false)
        }
        return total2.toFixed(2)
    }

    useEffect(() => {
        const requisition = getShowValues(config)
        requisition.then(response =>{
            if(response.data.length>0){
                setHasItems(true)
            } 
            setValues(response.data); 
            setTotalValor(changeTotal().replace(".", ","))
            return totalValor                                           
        });
 
    }, [totalValor])

    return (
        <Main>

            <Header>
                <h1>Olá, {name}</h1>
                <IoLogOutOutline onClick={logOut} />
            </Header>
            <Content style={{ display: hasItems ? "initial" : "flex" }}>
                <NoItemText style={{ display: hasItems ? "none" : "flex" }}>Não há registros de entrada ou saída</NoItemText>
                <SaldoDiv style={{ display: hasItems ? "flex" : "none" }}><Saldo>SALDO</Saldo> <Price style={{color:positive? "#03AC00" : "#C70000"}}>{totalValor}</Price></SaldoDiv> 
                {values.map((value,index) => <List key={index}> <span><Date>{value.date}</Date>{value.description}</span> <span style={{ color: value.type === "negative" ? "#C70000" : "#03AC00" }}>{Number(value.value).toFixed(2).replace(".", ",")}</span> </List>)}            
            </Content>
            <ButtonsContainer>
                <Link to="/novaentrada">
                    <button>
                        <IoAddCircleOutline />
                        <p>Nova entrada</p>
                    </button>
                </Link>
                <Link to="/novasaida">
                    <button>
                        <IoRemoveCircleOutline />
                        <p>Nova saída</p>
                    </button>
                </Link>
            </ButtonsContainer>

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
   
`
const Header = styled.header`
display: flex;
align-items: center;
justify-content: space-between;
margin-top: 25px;
margin-bottom: 22px;
width: 85vw;

    svg{
        color: #FFFFFF;
        font-size: 30px;
    }
    h1{
        font-size: 26px;
        font-weight: 700;
        color: #FFFFFF;
    }
`

const ButtonsContainer = styled.div`
width: 85vw;
height: 114px;
display: flex;
justify-content: space-between;

    a{
        height: 100%;
        width: 48%;
        text-decoration: none;

            button{
            height: 100%;
            width: 100%;
            border-radius: 5px;
            border: none;
            background-color: #A328D6;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
                svg{
                    font-size: 22px;
                    color: #ffffff;
                    margin-left: 10px;
                    margin-top: 10px;
                }
                p{
                    font-weight: 700;
                    color: #ffffff;
                    font-size: 17px;
                    text-align: left;
                    max-width: 65px;
                    margin-bottom: 9px;
                    margin-left: 10px;

                }
            }
    }
`

const List = styled.div`
margin-top: 8px;
display: flex;
width: 85vw;
justify-content: space-between;
    span{
        margin-left: 5px;
        margin-right: 5px;
        display: flex;
    }
`
const Date = styled.p`
font-size: 16px;
margin-right: 4px;
color:#C6C6C6;
`

const SaldoDiv = styled.div`
position: absolute;
width: 85vw;
justify-content: space-between;
bottom: 5px;
`

const Price = styled.p`
font-size: 17px;
margin-right: 5px;
`

const Saldo = styled.p`
font-size: 17px;
color:#000000;
font-weight: 700;
margin-left: 5px;
`

const NoItemText = styled.p`
font-size: 20px;
max-width: 180px;
text-align: center;
color: #868686;
`

const Content = styled.div`
position: relative;
width: 85vw;
height: 446px;
background-color: #FFFFFF;
border-radius: 5px;
margin-bottom: 13px;
justify-content: center;
align-items: center;

`

export default Home;