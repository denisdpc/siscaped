<script>
    import { fomentoOperacional } from '$lib/shared/stores.js';
</script>

* Fomento Operacional (
    {#if $fomentoOperacional > -1}
        { $fomentoOperacional }
    {:else}
        ---
    {/if}
)