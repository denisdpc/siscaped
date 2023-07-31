<script>
    import Opcionario from '$lib/Opcionario.svelte';
    import { dominioTecnologico, dominioTecnologicoGrau } from '$lib/shared/stores.js';
    const lista = [
        {id: 3, grau: 'Avançado', descricao: 'pesquisa & desenvolvimento autônomos ou em conjunto com centros de pesquisa e universidades nacionais para viabilizar a sua concepção'},
        {id: 2, grau: 'Intermediário', descricao: 'Engenharia terceirizada nacional, estabelecimento de consórcios e alianças estratégicas, de parte ou total, para viabilizar a sua concepção'},
        {id: 1, grau: 'Básico', descricao: 'dependência operativa ou tecnológica internacional, de parte ou total, para viabilizar a sua concepção'},
    ]        
    $: $dominioTecnologico, (() => {
        if ($dominioTecnologico>0) {
            $dominioTecnologicoGrau = lista[3-parseInt($dominioTecnologico)].grau;                    
        }                
    })();
</script>

<Opcionario 
	lista={lista}
    grupo = "dominio"
    parametro = { dominioTecnologico } 
/>