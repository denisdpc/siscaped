<script>
    import { dominioTecnologico } from '$lib/shared/stores.js';

    const lista = [
        {id: 3, item: 'Avançado', descricao: ''},
        {id: 2, item: 'Intermediário', descricao: ''},
        {id: 1, item: 'Básico', descricao: ''},
    ]        
</script>

<div class="space-y-2">    
    {#each lista as {id, item, descricao}}        
        <label class="flex items-center space-x-2">            
            <input class="radio" type="radio" name="dominio" 
                bind:group={ $dominioTecnologico } 
                value={id} />
            <p>{item} - {descricao}</p>
        </label>
    {/each}    
</div>