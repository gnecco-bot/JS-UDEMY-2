document.addEventListener('DOMContentLoaded', function () {
    const listaProdutos = document.getElementById('lista-produtos');
    const detalhesProduto = this.document.getElementById('detalhes-produto');
    const filtroPrudoto = document.getElementById('filtro-produto');
    const filtroVendedor = document.getElementById('filtro-vendedor');
    const mostrarTodosBtn = document.getElementById('mostrar-todos');
    const totalVendas = document.getElementById('total-vendas');
    let dadosTabela = [];
    let produtosUnicos = [];
    let vendedoresUnicos = [];

    function carregarExcel() {
        fetch('Vendedor.xlsx')
            .then(responses => responses.arrayBuffer())
            .then(data => {
                const workbook = XLSX.read(data, { type: 'array' });
                const sheetName = workbook.sheetNames[0];
                const sheet = workbook.Sheets[sheetName];
                const json = XLSX.utils.sheet_to_json(sheet);
                dadosTablea = json;
                criarListaProdutos();
                criarListaVendedores();
                calcularTotalVendas(dadosTabela);
            })
            .catch(error => console.error('Error ao carregar o arquivo', error));
    };

    function criarListaProdutos() {

    };

    function criarListaVendedores() {

    };

    function calcularTotalVendas() {

    };
});