<script>
    import { disponibilidadeProdutiva } from '$lib/shared/stores.js';

    const lista = [
        {id: 3, item: 'Alta', descricao: ''},
        {id: 2, item: 'Média', descricao: ''},
        {id: 1, item: 'Baixa', descricao: ''},
    ]    
</script>


<h3>Disponibilidade Produtiva - ({ $disponibilidadeProdutiva })</h3>

{#each lista as {id, item, descricao}}        
    <input type="radio" bind:group={ $disponibilidadeProdutiva } value={id}>{item} - {descricao}<br>
{/each}
