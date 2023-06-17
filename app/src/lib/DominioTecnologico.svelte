<script>
    import Opcionario from '$lib/Opcionario.svelte';
    import { dominioTecnologico } from '$lib/shared/stores.js';
    const lista = [
        {id: 3, item: 'Avançado', descricao: ''},
        {id: 2, item: 'Intermediário', descricao: ''},
        {id: 1, item: 'Básico', descricao: ''},
    ]        
</script>

<Opcionario 
	lista={lista}
    grupo = "dominio"
    parametro = { dominioTecnologico } 
/>