<script>
    import { cicloTecnologico, maturidadeTecnologica } from '$lib/shared/stores.js';

    const ciclo_tecnologico_bemServicoObraInfo_lista = [
        {id: 6, item: 'Inovador', descricao: ''},
        {id: 5, item: 'Contemporaneo', descricao: ''},
        {id: 4, item: 'Ostensivo', descricao: ''}        
    ]
    const ciclo_tecnologico_projeto_lista = [
        {id: 3, item: 'Radical', descricao: ''},
        {id: 2, item: 'Conceitual', descricao: ''},
        {id: 1, item: 'Incremental', descricao: ''},
    ]        
</script>


<div class="space-y-2">
    {#if $maturidadeTecnologica > 3}
        <h4 class="h4">Bem, serviço, obra e informação</h4>    
        {#each ciclo_tecnologico_bemServicoObraInfo_lista as {id, item, descricao}}        
            <label class="flex items-center space-x-2">            
                <input class="radio" type="radio" name="dominio" 
                    bind:group={ $cicloTecnologico } 
                    value={id} />
                <p>{item} - {descricao}</p>
            </label>
        {/each}    
    {:else}
        <h4 class="h4">Projeto</h4>    
        {#each ciclo_tecnologico_projeto_lista as {id, item, descricao}}        
            <label class="flex items-center space-x-2">            
                <input class="radio" type="radio" name="dominio" 
                    bind:group={ $cicloTecnologico } 
                    value={id} />
                <p>{item} - {descricao}</p>
            </label>
        {/each}        
    {/if}
</div>
