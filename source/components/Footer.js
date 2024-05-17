export default function Footer(){
    const Footer = document.getElementById('footer');
    const footerComponent = document.createElement("div");
    footerComponent.innerHTML = `
    <footer>
        <h4 class="data_class" id="data_id">BRITO.RUNNING | </h4>
    </footer>
    `;
    Footer.appendChild(footerComponent)
}