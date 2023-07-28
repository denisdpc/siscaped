<script>
    import Opcionario from '$lib/Opcionario.svelte';
    import { cicloTecnologico, cicloTecnologicoGrau, maturidadeTecnologica } from '$lib/shared/stores.js';

    const lista_bemServicoObraInfo = [
        {id: 3, grau: 'Inovador', descricao: 'reflete o incremento da capacidade operacional através de tecnologias inovadoras, de parte ou total'},
        {id: 2, grau: 'Contemporaneo', descricao: 'reflete o incremento da capacidade operacional através de absorção de tecnologia contemporânea, de parte ou total'},
        {id: 1, grau: 'Domínio Público', descricao: 'reflete a capacidade operacional baseada na tecnologia ostensiva'}        
    ]
    const lista_projeto = [
        {id: 3, grau: 'Radical', descricao: 'reflete mudanças tanto na estrutura do mercado quanto na tecnologia existente. Ele ocasiona o surgimento de novas estruturas, que normalmente sobrepõem às estruturas conhecidas'},
        {id: 2, grau: 'Conceitual', descricao: 'reflete o impacto no mercado ou na tecnologia. Este conceito inclui a introdução de novas tecnologias em mercados existentes (adições em linhas existentes) ou de tecnologias existentes em novos mercados (novo produto)'},
        {id: 1, grau: 'Incremental', descricao: 'incorpora melhorias (funcionalidades, benefícios, manufatura, processo) em produtos por meio da adoção de tecnologias conhecidas e introdução em mercados existentes'},
    ]
    $: $cicloTecnologico, (() => {
        // TODO diferenciar projeto de produto, corrigir tabela
        if ($cicloTecnologico>0) {
            $cicloTecnologicoGrau = lista[3-parseInt($cicloTecnologico)].grau;                    
        }                
    })();
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