document.addEventListener("DOMContentLoaded", () => {
    const treeContainer = $('#treeContainer');
    const tabelaCargos = document.getElementById('tabelaCargos').getElementsByTagName('tbody')[0];
    const exportarBtn = document.getElementById('exportar');
    const caminhoArquivo = 'funcionarios.xlsx';

    function carregarDadosExcel(url) {
        fetch(url)
            .then(response => response.arrayBuffer())
            .then(data => {
                const workbook = XLSX.read(data, { type: 'array' });
                const primeiraSheet = workbook.Sheets[workbook.SheetNames[0]];
                const jsonData = XLSX.utils.sheet_to_json(primeiraSheet, { header: 1 });
                populateTreeView(jsonData);
            })
            .catch(error => console.error("Erro ao carregar o arquivo Excel:", error));

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
                departamentos[departamento][cargo].push({ departamento, cargo, nome, salario });
            }
        });

        for (const departamento in departamentos) {
            const deptNode = {
                text: departamento,
                children: [],
                state: { opened: true },
                data: { tipo: 'departamento' }
            };

            for (const cargo in departamentos[departamento]) {
                const cargoNode = {
                    text: cargo,
                    children: [],
                    data: {
                        tipo: 'cargo',
                        funcionarios: departamentos[departamento][cargo]
                    }
                };
                deptNode.children.push(cargoNode);
            }

            treeData.push(deptNode);
        }


        treeContainer.jstree({
            'core': {
                'data': treeData
            }
        });

        treeContainer.on("select_node.jstree", function (e, data) {
            const selectedNode = data.node;
            if (selectedNode.data && selectedNode.data.tipo === 'cargo') {
                populateTabelaCargos(selectedNode.data.funcionarios);
            }
        });

    }

    function populateTabelaCargos(cargos) {
        tabelaCargos.innerHTML = '';
        cargos.forEach(cargo => {
            const linha = tabelaCargos.insertRow();
            const cellDepartamento = linha.insertCell(0);
            const cellCargo = linha.insertCell(1);
            const cellNome = linha.insertCell(2);
            const cellSalario = linha.insertCell(3);

            cellDepartamento.innerText = cargo.departamento;
            cellCargo.innerText = cargo.cargo;
            cellNome.innerText = cargo.nome;
            cellSalario.innerText = cargo.salario;
        });
    }

    function exportarTabelaParaExcel() {
        const wb = XLSX.utils.book_new();
        const ws = XLSX.utils.table_to_sheet(document.getElementById('tabelaCargos'));
        XLSX.utils.book_append_sheet(wb, ws, 'Funcionários');
        XLSX.writeFile(wb, 'funcionarios.xlsx');
    }

    exportarBtn.addEventListener('click', exportarTabelaParaExcel);
    carregarDadosExcel(caminhoArquivo);

});