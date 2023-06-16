<script>
    import { categorizacao, fomentoOperacional, dificuldadeObtencao } from '$lib/shared/stores.js';
    import FomentoOperacionalNivel from '$lib/prodeFomentoOperacionalNivel.svelte';
    import DificuldadeObtencao from '$lib/prodeDificuldadeObtencaoNivel.svelte';
    import Categoricao from '$lib/prodeCategorizacaoNivel.svelte';
    const matriz = [[3,2,1,0],[3,3,2,1],[2,2,1,1],[1,1,1,0]]    
    $: {
        if ($dificuldadeObtencao > -1 && $fomentoOperacional > -1) {
            $categorizacao = matriz[3-$dificuldadeObtencao][3-$fomentoOperacional]
        }
    }
</script>

<h2><Categoricao /></h2>  
<h3><DificuldadeObtencao /></h3>
<h3><FomentoOperacionalNivel /></h3>

{#if $categorizacao > 0 }
    {4 - $categorizacao}ª categoria
{:else}
    Não qualificado
{/if}

