import { BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "../Home/Home.jsx"
import Sobre from "../Sobre/Sobre.jsx"
import Contato from "../Contato/Contato.jsx"
import Header from "../Header/Header.jsx"
import Rodape from "../Rodape/Rodape.jsx"


const App = () => {
    return(
        <BrowserRouter>
        <Header/>
             <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/Sobre" element={<Sobre/>} />
                <Route path="/contato" element={<Contato/>} />
             </Routes>
             <Rodape/>
        </BrowserRouter>
    )
}
export default App;