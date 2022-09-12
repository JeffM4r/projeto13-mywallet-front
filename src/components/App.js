import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
import TokenContext from "./Context";
import GlobalStyle from "../assets/style/GlobalStyle";
import Login from "./Login";
import SignUp from "./SignUp";
import Home from "./Home";
import NewEntryNegative from "./NewEntryNegative";
import NewEntryPositive from "./NewEntryPositive";


function App() {
    const [token, setToken] = useState("");
    const [name, setName] = useState("");

    return (
        <TokenContext.Provider value={{ token, setToken, name, setName }}>
            <BrowserRouter>
                <GlobalStyle />
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/cadastro" element={<SignUp />} />
                    <Route path="/registros" element={<Home />} />
                    <Route path="/novaentrada" element={<NewEntryPositive />} />
                    <Route path="/novasaida" element={<NewEntryNegative />} />
                </Routes>
            </BrowserRouter>
        </TokenContext.Provider>
    )
}

export default App;