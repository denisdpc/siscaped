<script>
    import { imprescindibilidade } from '$lib/shared/stores.js';
	import ParametroFormat from '$lib/ParametroFormat.svelte';
</script>

* <ParametroFormat nome = "Imprescindibilidade"
                 valor = {$imprescindibilidade} />
