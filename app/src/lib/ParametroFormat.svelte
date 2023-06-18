<script>
    export let nome='';
    export let valor=-1;    
</script>

{nome} (
    {#if valor > -1}
        { valor }
    {:else}
        ---
    {/if}
)