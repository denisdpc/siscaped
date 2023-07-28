<script>
    export let lista;
    export let grupo='';
    export let parametro;
</script>

<div class="space-y-2">    
    {#each lista as {id, grau, descricao}}        
        <label class="flex items-center space-x-2">            
            <input class="radio" type="radio" 
                name={ grupo } 
                bind:group={ $parametro } 
                value={id} />
            <p>{grau} - {descricao}</p>
        </label>
    {/each}    
</div>