<script>
    import { imprescindibilidade, necessidadeEstrategica, necessidadeTatica } from "$lib/shared/stores.js";
    import ImprescinbilidadeNivel from '$lib/calculados/prodeImprescindibilidadeNivel.svelte';
    const matriz = [[2,3,3],[1,2,3],[0,1,2]]    
    $: if ($necessidadeEstrategica && $necessidadeTatica) {
        $imprescindibilidade = matriz[3-$necessidadeEstrategica][$necessidadeTatica-1]
    }
</script>

<h2><ImprescinbilidadeNivel /></h2>