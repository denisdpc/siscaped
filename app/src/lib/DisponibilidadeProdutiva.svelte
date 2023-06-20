<script>
    import Opcionario from '$lib/Opcionario.svelte';
    import { disponibilidadeProdutiva } from '$lib/shared/stores.js';

    const lista = [
        {id: 3, item: 'Alta', descricao: 'autonomia produtiva nacional para viabilizar a sua concepção'},
        {id: 2, item: 'Média', descricao: 'restrição produtiva internacional, de parte ou total, para viabilizar a sua concepção'},
        {id: 1, item: 'Baixa', descricao: 'dependência produtiva internacional, de parte ou total, para viabilizar a sua concepção'},
    ]    
</script>

<h3>Disponibilidade Produtiva - ({ $disponibilidadeProdutiva })</h3>

<Opcionario 
	lista={lista}
    grupo = "produtiva"
    parametro = { disponibilidadeProdutiva } 
/>