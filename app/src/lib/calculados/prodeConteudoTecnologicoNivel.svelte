<script>
    import { conteudoTecnologico } from '$lib/shared/stores.js';
	import ParametroFormat from '$lib/ParametroFormat.svelte';
</script>

* <ParametroFormat nome = "Conteúdo Tecnológico"
                   valor = {$conteudoTecnologico} />
