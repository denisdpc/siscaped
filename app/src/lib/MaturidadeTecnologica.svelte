<script>    
    import { maturidadeTecnologica } from '$lib/shared/stores.js';
    const lista = [
        {id: 9, item: 'TRL 9', descricao: 'Sistema atual provado com sucesso em missões operacionais'},
        {id: 8, item: 'TRL 8', descricao: 'Sistema atual completo e qualificado em testes e demonstrações'},
        {id: 7, item: 'TRL 7', descricao: 'Modelo ou Protótipo do sistema/subsistema demonstrado em um ambiente operacional'},
        {id: 6, item: 'TRL 6', descricao: 'Modelo ou Protótipo do sistema/subsistema demonstrado em um ambiente relevante'},
        {id: 5, item: 'TRL 5', descricao: 'Validação de componentes e/ou equipamentos em ambiente relevante'},
        {id: 4, item: 'TRL 4', descricao: 'Validação de componentes e/ou equipamentos em ambiente controlado'},
        {id: 3, item: 'TRL 3', descricao: 'Prova de conceito analítica e experimental de características e/ou funções críticas'},
        {id: 2, item: 'TRL 2', descricao: 'Conceito e/ ou aplicação de tecnologia formulada'},
        {id: 1, item: 'TRL 1', descricao: 'Princípios básicos observados e reportados'},
    ]        
</script>

<p />
<h4 class="h4">Bem, serviço, obra e informação</h4>
<div class="space-y-2">    
    {#each lista as {id, item, descricao}}
        {#if id == 3}
            <br>
            <h4 class="h4">Projeto</h4>
        {/if}    
        <label class="flex items-center space-x-2">            
            <input class="radio" type="radio" name="maturidade" 
                bind:group={ $maturidadeTecnologica } 
                value={id} />
            <p>{item} - {descricao}</p>
        </label>
    {/each}    
</div>