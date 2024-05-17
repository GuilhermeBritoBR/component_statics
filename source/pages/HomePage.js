import Header from "../components/Header.js";
import Footer from "../components/Footer.js";
import ButtonComponent from "../components/ButtonComponent.js";
import StyleComponent from "../components/StyleComponent.js";
//funções para rodar
import AlertFunction from "../scripts/AlertComponent.js";
//functions declarando elas que foram importadas
window.AlertFunction = AlertFunction;
document.addEventListener("DOMContentLoaded", function() {
    ButtonComponent("AlertFunction('Teste da função componentizada!')", "Acessar", "ButtonBIG","");
    Header();
    StyleComponent(`${stylesButton}`)
    Footer();
    
});
//css dos componentes
const stylesButton = `
    button{
    height: 40px;
    width: 120px;
    background-color: #000000;
    border: 'solid', 1px, #000000;
    border-radius: 5px;
    cursor: pointer;
    color: #ffffff;
    }
    button:hover{
        opacity: 80%;
    }
    `

