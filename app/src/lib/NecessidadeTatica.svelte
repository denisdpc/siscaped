<script>
    import Opcionario from '$lib/Opcionario.svelte';
    import { necessidadeTatica, necessidadeTaticaGrau } from '$lib/shared/stores.js';

    const lista = [
        {id: 3, grau: 'Alta', descricao: 'alta restrição operacional, decorrente da inviabilidade do produto, na execução da concepção tática'},
        {id: 2, grau: 'Média', descricao: 'média restrição operacional, decorrente da inviabilidade do produto, na execução da concepção tática'},
        {id: 1, grau: 'Baixa', descricao: 'baixa restrição operacional, decorrente da inviabilidade do produto, na execução da concepção tática'},
    ]    
    $: $necessidadeTatica, (() => {
        if ($necessidadeTatica > 0) {
            $necessidadeTaticaGrau = lista[3-parseInt($necessidadeTatica)].grau;            
        }
    })();
</script>


<Opcionario 
	lista={lista}
    grupo = "tatica"
    parametro = { necessidadeTatica } 
/>