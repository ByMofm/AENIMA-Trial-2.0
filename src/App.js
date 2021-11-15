import Inicio from './Componentes/Inicio';
import Header from  './Componentes/Header.js';
import Footer from  './Componentes/Footer';
import "./App.css"

function App(){

return(
    <div className="app">
        <Header />
        <Inicio />
        <Footer />
    </div>
);
}

export default App