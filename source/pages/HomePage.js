import Header from "../components/Header.js";
import Footer from "../components/Footer.js";
import ButtonComponent from "../components/ButtonComponent.js";
import StyleComponent from "../components/StyleComponent.js";
//funções para rodar
import AlertFunction from "../scripts/AlertComponent.js";
//importando css do arquivo js
import { stylesButton } from "../assets/styles/Styles.js";
import { stylesHtml } from "../assets/styles/Styles.js";
import { stylesBody } from "../assets/styles/Styles.js";
import { stylesHeader } from "../assets/styles/Styles.js";
//functions declarando elas que foram importadas
window.AlertFunction = AlertFunction;
document.addEventListener("DOMContentLoaded", function() {
    ButtonComponent("AlertFunction('Teste da função componentizada!')", "Acessar", "ButtonBIG","");
    Header();
    StyleComponent(`${stylesButton}${stylesHtml}${stylesBody}${stylesHeader}`);
    Footer();
    
});
