<script>
    import { categorizacao } from '$lib/shared/stores.js';
</script>

Categorização (
    {#if $categorizacao == -1}
        ---
    {:else}
        { $categorizacao }
    {/if}
)