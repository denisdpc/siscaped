<script>
    import { fomentoOperacional } from '$lib/shared/stores.js';
	import ParametroFormat from '$lib/ParametroFormat.svelte';
</script>

* <ParametroFormat nome = "Fomento Operacional"
                 valor = {$fomentoOperacional} />
