import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyle from "../assets/style/GlobalStyle";
import Login from "./Login";
import SignUp from "./SignUp";


function App() {
    return (
        <BrowserRouter>
            <GlobalStyle />
            <Routes>
                <Route path="/" element={<Login/>}/>
                <Route path="/cadastro" element={<SignUp/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App;