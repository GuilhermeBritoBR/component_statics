export default function Header(){
    const header = document.getElementById("header");
    const headerComponent = document.createElement("div");
    headerComponent.innerHTML =  `
    <header>
    <nav>
    <h1>BRITO RUNNING</h1>
        <ul>
            <li><a href="#">Início</a> </li>
            <li><a href="#">Galeria</a> </li>
            <li><a href="#">Patrocinadores</a> </li>
            <li><a href="#">Plataformas</a> </li>
        </ul>
    </nav>
    </header>
    `;
    header.appendChild(headerComponent);
}
