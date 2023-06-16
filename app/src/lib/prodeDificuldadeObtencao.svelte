<script>
    import { dificuldadeObtencao, disponibilidadeLogistica, disponibilidadeProdutiva } from '$lib/shared/stores.js';
    import DificuldadeObtencao from '$lib/prodeDificuldadeObtencaoNivel.svelte';
    const matriz = [[1,2,3],[0,2,3],[0,0,1]];
    
    $: {
        if ($disponibilidadeLogistica && $disponibilidadeProdutiva) {
            $dificuldadeObtencao = matriz[$disponibilidadeProdutiva-1][3-$disponibilidadeLogistica]
        }
    }
</script>

<h2><DificuldadeObtencao /></h2>