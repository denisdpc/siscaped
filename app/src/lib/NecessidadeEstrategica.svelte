<script>
    import Opcionario from '$lib/Opcionario.svelte';
    import { necessidadeEstrategica } from '$lib/shared/stores.js';

    const lista = [
        {id: 3, item: 'Alta', descricao: ''},
        {id: 2, item: 'Média', descricao: ''},
        {id: 1, item: 'Baixa', descricao: ''},
    ]    
</script>

<h3>Necessidade Estratégica - ({ $necessidadeEstrategica })</h3>

<Opcionario 
	lista={lista}
    grupo = "estrategica"
    parametro = { necessidadeEstrategica } 
/>