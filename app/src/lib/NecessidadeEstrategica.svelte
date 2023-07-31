<script>
    import Opcionario from '$lib/Opcionario.svelte';
    import { necessidadeEstrategica, necessidadeEstrategicaGrau } from '$lib/shared/stores.js';

    const lista = [
        {id: 3, grau: 'Alta', descricao: 'alta restrição operacional, decorrente da inviabilidade do produto, na execução da concepção estratégica'},
        {id: 2, grau: 'Média', descricao: 'média restrição operacional, decorrente da inviabilidade do produto, na execução da concepção estratégica'},
        {id: 1, grau: 'Baixa', descricao: 'baixa restrição operacional, decorrente da inviabilidade do produto, na execução da concepção estratégica'},
    ]
    $: $necessidadeEstrategica, (() => {
        if ($necessidadeEstrategica > 0) {
            $necessidadeEstrategicaGrau = lista[3-parseInt($necessidadeEstrategica)].grau;            
        }
    })();    
</script>

<Opcionario 
	lista={lista}
    grupo = "estrategica"
    parametro = { necessidadeEstrategica } 
/>