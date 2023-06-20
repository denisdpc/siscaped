<script>
    import Opcionario from '$lib/Opcionario.svelte';
    import { disponibilidadeLogistica } from '$lib/shared/stores.js';

    const lista = [
        {id: 3, item: 'Alta', descricao: 'autonomia logística nacional para viabilizar a sua concepção'},
        {id: 2, item: 'Média', descricao: 'restrição logística internacional, de parte ou total, para viabilizar a sua concepção'},
        {id: 1, item: 'Baixa', descricao: 'dependência logística internacional, de parte ou total, para viabilizar a sua concepção'},
    ]    
</script>

<h3>Disponibilidade Logística - ({ $disponibilidadeLogistica })</h3>

<Opcionario 
	lista={lista}
    grupo = "dominio"
    parametro = { disponibilidadeLogistica } 
/>