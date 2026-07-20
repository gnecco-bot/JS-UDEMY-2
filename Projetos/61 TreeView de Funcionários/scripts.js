document.addEventListener('DOMContentLoaded', () => {
    const treeContainer = $('#treeContainer');
    const departamentoInput = document.getElementById('departamento');
    const cargoInput = document.getElementById('cargo');
    const nomeInput = document.getElementById('nome');
    const salarioInput = document.getElementById('salario');
    const excelCaminhoArquivo = "funcionarios.xlsx";
    function carregarDadosExcel(url) {
        fetch(url)
            .then(response => response.arrayBuffer())
            .then(data => {
                const workbook = XLSX.read(data, { type: 'array' });
                const primeiraSheet = workbook.Sheets[workbook.SheetNames[0]];
                const jsonData = XLSX.utils.sheet_to_json(primeiraSheet, { header: 1 });
                populateTreeView(jsonData);
            })
            .catch(error => console.error('Erro ao carregar o arquivo:', error));
    }
    function populateTreeView(data) {
        const treeData = [];
        const departamentos = {};
        data.forEach((linha, indice) => {
            if (indice > 0) {
                const [departamento, cargo, nome, salario] = linha;
                if (!departamentos[departamento]) {
                    departamentos[departamento] = {};
                }
                if (!departamentos[departamento][cargo]) {
                    departamentos[departamento][cargo] = [];
                }
                departamentos[departamento][cargo].push({ nome, salario });
            }
        });
        for (const departamento in departamentos) {
            const deptNode = { text: departamento, children: [] };
            for (const cargo in departamentos[departamento]) {
                const cargoNode = { text: cargo, children: [] };
                departamentos[departamento][cargo].forEach(funcionario => {
                    const nomeNode = {
                        text: funcionario.nome,
                        data: { departamento, cargo, nome: funcionario.nome, salario: funcionario.salario }
                    };
                    cargoNode.children.push(nomeNode);
                });
                deptNode.children.push(cargoNode);
            };
            treeData.push(deptNode);
        }
        treeContainer.jstree({
            'core': {
                'data': treeData
            }
        });
        treeContainer.on("select_node.jstree", function (e, data) {
            const noSelecionado = data.node;
            if (noSelecionado.data) {
                departamentoInput.value = noSelecionado.data.departamento;
                cargoInput.value = noSelecionado.data.cargo;
                nomeInput.value = noSelecionado.data.nome;
                salarioInput.value = noSelecionado.data.salario;
            }
        });
    }
    carregarDadosExcel(excelCaminhoArquivo);
});