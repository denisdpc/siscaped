<script>
    import { fomentoOperacional, conteudoTecnologico, imprescindibilidade } from '$lib/shared/stores.js';
    import FomentoOperacionalNivel from '$lib/prodeFomentoOperacionalNivel.svelte';
    const matriz = [[3,3,2,1],[3,2,2,1],[2,2,1,1],[1,1,1,0]];
    $: {
        if ($conteudoTecnologico>-1 && $imprescindibilidade>-1) {
            $fomentoOperacional = matriz[3-$conteudoTecnologico][3-$imprescindibilidade]            
        }
    }
</script>

<h2><FomentoOperacionalNivel /></h2>
