<script>
    import { disponibilidadeProdutiva } from '$lib/shared/stores.js';

    const lista = [
        {id: 3, item: 'Alta', descricao: ''},
        {id: 2, item: 'Média', descricao: ''},
        {id: 1, item: 'Baixa', descricao: ''},
    ]    
</script>


<h3>Disponibilidade Produtiva - ({ $disponibilidadeProdutiva })</h3>

<div class="space-y-2">
    {#each lista as {id, item, descricao}}        
        <label class="flex items-center space-x-2">
            <input class="radio" type="radio" name="produtiva" 
                   bind:group={ $disponibilidadeProdutiva } 
                   value={id} />
            <p>{item} - {descricao}</p>
        </label>        
    {/each}
</div>