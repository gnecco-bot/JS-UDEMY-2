async function buscarCNPJ() {
    const inputCNPJ = document.getElementById('cnpj').value.replace(/[^\d]/g, '');
    const url = `https://brasilapi.com.br/api/cnpj/v1/${inputCNPJ}`;
    try {
        const resposta = await fetch(url);
        if (!resposta.ok) {
            throw new Error(`Erro HTTP: ${resposta.status}`);
        }
        const dados = await resposta.json();
        mostrarResultado(dados);
    } catch (erro) {
        console.error('Erro:', erro);
        document.getElementById('resultado').innerHTML = `<p>Erro: ${erro.message}</p>`;
    }
};

function mostrarResultado(dados) {
    const cnaesSecundarios = dados.cnaes_secundarios.map(cnae =>
        `<li>${cnae.codigo} - ${cnae.descricao}</li>`
    ).join('');
    document.getElementById('resultado').innerHTML = `
        <h2>Informações da Empresa</h2>
        <p><strong>Razão Social:</strong> ${dados.razao_social}</p>
        <p><strong>Nome Fantasia:</strong> ${dados.nome_fantasia || 'Não disponível'}</p>
        <p><strong>CNPJ:</strong> ${dados.cnpj}</p>
        <p><strong>Atividade Principal:</strong> ${dados.cnae_fiscal_descricao}</p>
        <p><strong>Capital Social:</strong> ${dados.capital_social}</p>
        <p><strong>Endereço:</strong> ${dados.descricao_tipo_logradouro} ${dados.logradouro}, N. ${dados.numero}, ${dados.complemento || ''}, Bairro: ${dados.bairro}, ${dados.municipio}, ${dados.uf}, ${dados.cep}</p>
        <p><strong>Natureza Juridica:</strong> ${dados.natureza_juridica}</p>
        <p><strong>Situação Cadastral:</strong> ${dados.descricao_situacao_cadastral} desde ${dados.data_situacao_cadastral}</p>
        <p><strong>Telefone:</strong> ${dados.ddd_telefone_1 ? `(${dados.ddd_telefone_1})` : ""}</p>
        <p><strong>Opção pelo MEI:</strong> ${dados.opcao_pelo_mei ? "Sim" : "Não"}, desde ${dados.data_opcao_pelo_mei || "N/A"}</p>
        <p><strong>Opção pelo Simples Nacional:</strong> ${dados.opcao_pelo_simples ? "Sim" : "Não"}, desde ${dados.data_opcao_pelo_simples || "N/A"}</p>
        <p><strong>CNAEs Secundários:</strong><ul>${cnaesSecundarios}</ul></p>
    `
};

function exportarParaPDF() {

}