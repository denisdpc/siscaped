<script>
    import Opcionario from '$lib/Opcionario.svelte';
    import { dominioTecnologico } from '$lib/shared/stores.js';
    const lista = [
        {id: 3, item: 'Avançado', descricao: 'pesquisa & desenvolvimento autônomos ou em conjunto com centros de pesquisa e universidades nacionais para viabilizar a sua concepção'},
        {id: 2, item: 'Intermediário', descricao: 'Engenharia terceirizada nacional, estabelecimento de consórcios e alianças estratégicas, de parte ou total, para viabilizar a sua concepção'},
        {id: 1, item: 'Básico', descricao: 'dependência operativa ou tecnológica internacional, de parte ou total, para viabilizar a sua concepção'},
    ]        
</script>

<Opcionario 
	lista={lista}
    grupo = "dominio"
    parametro = { dominioTecnologico } 
/>