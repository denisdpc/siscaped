<script>
    import Opcionario from '$lib/Opcionario.svelte';
    import { necessidadeTatica } from '$lib/shared/stores.js';

    const lista = [
        {id: 3, item: 'Alta', descricao: 'alta restrição operacional, decorrente da inviabilidade do produto, na execução da concepção tática'},
        {id: 2, item: 'Média', descricao: 'média restrição operacional, decorrente da inviabilidade do produto, na execução da concepção tática'},
        {id: 1, item: 'Baixa', descricao: 'baixa restrição operacional, decorrente da inviabilidade do produto, na execução da concepção tática'},
    ]    
</script>

<h3>Necessidade Tática - ({ $necessidadeTatica })</h3>

<Opcionario 
	lista={lista}
    grupo = "tatica"
    parametro = { necessidadeTatica } 
/>