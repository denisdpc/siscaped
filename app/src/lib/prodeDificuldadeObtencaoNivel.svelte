<script>
    import { dificuldadeObtencao } from '$lib/shared/stores.js';    
</script>

Dificuldade de Obtenção (
    {#if $dificuldadeObtencao > -1} 
        { $dificuldadeObtencao }
    {:else}
        ---
    {/if}
)