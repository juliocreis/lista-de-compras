function gerarDiaDaSemana() {
    const weekDate = new Date().toLocaleDateString('pt-BR', {weekday: 'long'});
    const dataBrasileira = new Date().toLocaleDateString('pt-BR');
    const hora = new Date().toLocaleTimeString('pt-BR', {
        hour: 'numeric',
        minute: 'numeric'
    });

    const dataCompleta = `${weekDate} (${dataBrasileira} às ${hora})`
    
    return dataCompleta;
}

export default gerarDiaDaSemana;