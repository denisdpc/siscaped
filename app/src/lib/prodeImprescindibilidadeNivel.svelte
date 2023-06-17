<script>
    import { imprescindibilidade } from '$lib/shared/stores.js';
</script>

* Imprescindibilidade (
    {#if $imprescindibilidade > -1}
        { $imprescindibilidade }
    {:else}
        ---
    {/if}
)