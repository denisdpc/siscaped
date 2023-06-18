<script>
    import { categorizacao } from '$lib/shared/stores.js';
	import ParametroFormat from '$lib/ParametroFormat.svelte';
</script>

* <ParametroFormat nome = "Categorização"
                   valor = {$categorizacao} />