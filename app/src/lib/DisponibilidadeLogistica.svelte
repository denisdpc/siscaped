<script>
    import Opcionario from '$lib/Opcionario.svelte';
    import { disponibilidadeLogistica } from '$lib/shared/stores.js';

    const lista = [
        {id: 3, item: 'Alta', descricao: ''},
        {id: 2, item: 'Média', descricao: ''},
        {id: 1, item: 'Baixa', descricao: ''},
    ]    
</script>

<h3>Disponibilidade Logística - ({ $disponibilidadeLogistica })</h3>

<Opcionario 
	lista={lista}
    grupo = "dominio"
    parametro = { disponibilidadeLogistica } 
/>