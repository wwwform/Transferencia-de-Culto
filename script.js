document.getElementById('avisoForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const tema = document.getElementById('tema').value;
    const nome = document.getElementById('nome').value.trim();
    const mensagem = document.getElementById('mensagem').value.trim();

    if (!tema || !nome || !mensagem) {
        alert('Por favor, preencha todos os campos.');
        return;
    }

    const numeroDestino = '+5527997094763'; // Substitua pelo número real com DDI e DDD
    const textoFormatado = `📌 *${tema}*

✍️ *Nome:* ${nome}
📝 *Mensagem:* ${mensagem}`;
    const url = `https://wa.me/${numeroDestino}?text=${encodeURIComponent(textoFormatado)}`;

    window.open(url, '_blank');
});
