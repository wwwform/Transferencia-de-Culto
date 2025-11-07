document.getElementById('avisoForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const tema = document.getElementById('tema').value;
    const nome = document.getElementById('nome').value.trim();
    const mensagem = document.getElementById('mensagem').value.trim();

    if (!tema || !nome || !mensagem) {
        alert('Por favor, preencha todos os campos.');
        return;
    }

    document.getElementById('cartaoTema').textContent = tema;
    document.getElementById('cartaoNome').textContent = nome;
    document.getElementById('cartaoMensagem').textContent = mensagem;
    document.getElementById('cartao').style.display = 'block';

    html2canvas(document.getElementById('cartao')).then(canvas => {
        const imageDataUrl = canvas.toDataURL("image/png");

        // Em uma próxima etapa: enviar imagem para um serviço externo
        // Por enquanto: WhatsApp com link e aviso
        const numeroDestino = '+5527997094763'; // Substitua pelo número real
        const texto = `📌 Novo aviso de culto criado por ${nome} sobre "${tema}".%0AA mensagem está disponível no cartão visual.`;

        const url = `https://wa.me/${numeroDestino}?text=${encodeURIComponent(texto)}`;
        window.open(url, '_blank');
    });
});
