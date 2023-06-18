<script>
    import { dificuldadeObtencao } from '$lib/shared/stores.js';    
	import ParametroFormat from '$lib/ParametroFormat.svelte';
</script>

* <ParametroFormat nome = "Dificuldade de Obtenção"
                 valor = {$dificuldadeObtencao} />
