<script>
    import { conteudoTecnologico } from '$lib/shared/stores.js';
</script>


* Conteúdo Tecnológico (
    {#if $conteudoTecnologico > -1} 
        { $conteudoTecnologico }
    {:else}
        ---
    {/if}
)