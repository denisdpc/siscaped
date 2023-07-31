<script>
    import Opcionario from '$lib/Opcionario.svelte';
    import { disponibilidadeProdutiva, disponibilidadeProdutivaGrau } from '$lib/shared/stores.js';

    const lista = [
        {id: 3, grau: 'Alta', descricao: 'autonomia produtiva nacional para viabilizar a sua concepção'},
        {id: 2, grau: 'Média', descricao: 'restrição produtiva internacional, de parte ou total, para viabilizar a sua concepção'},
        {id: 1, grau: 'Baixa', descricao: 'dependência produtiva internacional, de parte ou total, para viabilizar a sua concepção'},
    ]
    $: $disponibilidadeProdutiva, (() => {
        if ($disponibilidadeProdutiva > 0) {
            $disponibilidadeProdutivaGrau = lista[3-parseInt($disponibilidadeProdutiva)].grau;            
        }
    })();
</script>

<Opcionario 
	lista={lista}
    grupo = "produtiva"
    parametro = { disponibilidadeProdutiva } 
/>