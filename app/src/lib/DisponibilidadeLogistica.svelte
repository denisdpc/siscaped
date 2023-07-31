<script>
    import Opcionario from '$lib/Opcionario.svelte';
    import { disponibilidadeLogistica, disponibilidadeLogisticaGrau } from '$lib/shared/stores.js';

    const lista = [
        {id: 3, grau: 'Alta', descricao: 'autonomia logística nacional para viabilizar a sua concepção'},
        {id: 2, grau: 'Média', descricao: 'restrição logística internacional, de parte ou total, para viabilizar a sua concepção'},
        {id: 1, grau: 'Baixa', descricao: 'dependência logística internacional, de parte ou total, para viabilizar a sua concepção'},
    ]
    $: $disponibilidadeLogistica, (() => {
        if ($disponibilidadeLogistica > 0) {
            $disponibilidadeLogisticaGrau = lista[3-parseInt($disponibilidadeLogistica)].grau;            
        }
    })();    
</script>

<Opcionario 
	lista={lista}
    grupo = "dominio"
    parametro = { disponibilidadeLogistica } 
/>