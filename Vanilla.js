
function calcularSimulacao() {
    const valorSolicitado = parseFloat(document.getElementById('valor').value);
    const parcelas = parseInt(document.getElementById('meses').value);
    const taxaJuros = 0.018; 
    
    if (isNaN(valorSolicitado) || isNaN(parcelas)) {
        alert("Por favor, preencha os valores para a simulação.");
        return;
    }

    
    const valorParcela = (valorSolicitado * taxaJuros) / (1 - Math.pow(1 + taxaJuros, -parcelas));

    document.getElementById('resultado').innerHTML = `
        <div style="background-color: #f0f4f8; padding: 15px; border-radius: 8px; border-left: 5px solid #003366;">
            <h3 style="color: #003366;">Simulação Ilha Tech:</h3>
            <p>Crédito Estimado: <strong>R$ ${valorSolicitado.toFixed(2)}</strong></p>
            <p>Valor das Parcelas: <strong>${parcelas}x de R$ ${valorParcela.toFixed(2)}</strong></p>
            <small>*Sujeito a análise de margem e convênio.</small>
        </div>
    `;
}