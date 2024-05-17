export default function ButtonComponent(functionality, text, typeCSS, styles){
    const Button = document.getElementById('button');
    const buttonComponent = document.createElement("div");
    buttonComponent.innerHTML = `
    <button class=${typeCSS}
    style="${styles}"
    onclick="${functionality}" type="submit">${text}</button>
    `;
    Button.appendChild(buttonComponent);

}