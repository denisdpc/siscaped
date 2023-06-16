<script>
    import { maturidadeTecnologica, conteudoTecnologico, dominioTecnologico, cicloTecnologico } from '$lib/shared/stores.js';
    import ConteudoTecnologicoNivel from '$lib/prodeConteudoTecnologicoNivel.svelte';
    const matrizBemServicoObraInfo = [[1,3,3],[0,2,2],[0,0,1]];
    const matrizProjeto =[[2,3,3],[1,2,2],[0,0,1]];    
    $: {
        if ($dominioTecnologico && $cicloTecnologico) {
            if ($maturidadeTecnologica > 3) {                
                $conteudoTecnologico = matrizBemServicoObraInfo[3-$dominioTecnologico][$cicloTecnologico-4];        
            } else {
                $conteudoTecnologico = matrizProjeto[3-$dominioTecnologico][$cicloTecnologico-1];
            }   
        }
    }
</script>

<h2><ConteudoTecnologicoNivel /></h2>