<script>
    import Opcionario from '$lib/Opcionario.svelte';
    import { cicloTecnologico, maturidadeTecnologica } from '$lib/shared/stores.js';

    const lista_bemServicoObraInfo = [
        {id: 6, item: 'Inovador', descricao: ''},
        {id: 5, item: 'Contemporaneo', descricao: ''},
        {id: 4, item: 'Ostensivo', descricao: ''}        
    ]
    const lista_projeto = [
        {id: 3, item: 'Radical', descricao: ''},
        {id: 2, item: 'Conceitual', descricao: ''},
        {id: 1, item: 'Incremental', descricao: ''},
    ]        
</script>

{#if $maturidadeTecnologica > 3}
    <h4 class="h4">Bem, serviço, obra e informação</h4>
    <Opcionario 
        lista={lista_bemServicoObraInfo}
        grupo = "ciclo"
        parametro = { cicloTecnologico } 
    />
{:else}
    <h4 class="h4">Projeto</h4>
    <Opcionario 
        lista={lista_projeto}
        grupo = "ciclo"
        parametro = { cicloTecnologico } 
    />
{/if}