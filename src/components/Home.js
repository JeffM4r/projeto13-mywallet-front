import styled from "styled-components";
import { Link } from "react-router-dom";
import { IoLogOutOutline, IoAddCircleOutline, IoRemoveCircleOutline } from 'react-icons/io5';


function Home() {
    return (
        <Main>

            <Header>
                <h1>Olá, Fulano</h1>
                <IoLogOutOutline />
            </Header>
            <Content></Content>
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

const Content = styled.div`
width: 85vw;
height: 446px;
background-color: #FFFFFF;
border-radius: 5px;
margin-bottom: 13px;
`

export default Home;