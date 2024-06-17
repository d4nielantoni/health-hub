function gerar_cor(opacidade = 1) {
    let r = Math.random() * 255;
    let g = Math.random() * 255;
    let b = Math.random() * 255;
    return `rgba(${r}, ${g}, ${b}, ${opacidade})`;
}

export default gerar_cor;