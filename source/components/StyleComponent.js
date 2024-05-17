export default function StyleComponent(css){
    const style = document.getElementById('style');
    const StyleComponent = document.createElement('div');
    StyleComponent.innerHTML = `
    <style>
    ${css}
    </style>
    `
    style.appendChild(StyleComponent);
}