<script>
    import Opcionario from '$lib/Opcionario.svelte';
    import { necessidadeEstrategica } from '$lib/shared/stores.js';

    const lista = [
        {id: 3, item: 'Alta', descricao: 'alta restrição operacional, decorrente da inviabilidade do produto, na execução da concepção estratégica'},
        {id: 2, item: 'Média', descricao: 'média restrição operacional, decorrente da inviabilidade do produto, na execução da concepção estratégica'},
        {id: 1, item: 'Baixa', descricao: 'baixa restrição operacional, decorrente da inviabilidade do produto, na execução da concepção estratégica'},
    ]    
</script>

<h3>Necessidade Estratégica - ({ $necessidadeEstrategica })</h3>

<Opcionario 
	lista={lista}
    grupo = "estrategica"
    parametro = { necessidadeEstrategica } 
/>