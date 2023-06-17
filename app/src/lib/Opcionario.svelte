<script>
    export let lista;
    export let grupo;
    export let parametro;
</script>

<div class="space-y-2">    
    {#each lista as {id, item, descricao}}        
        <label class="flex items-center space-x-2">            
            <input class="radio" type="radio" 
                name={ grupo } 
                bind:group={ $parametro } 
                value={id} />
            <p>{item} - {descricao}</p>
        </label>
    {/each}    
</div>