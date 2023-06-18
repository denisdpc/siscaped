<script>
    import ProdeConteudoTecnologico from "$lib/prodeConteudoTecnologico.svelte";
	import ProdeDificuldadeObtencao from "$lib/prodeDificuldadeObtencao.svelte";    
	import ProdeImprescindibilidade from "$lib/prodeImprescindibilidade.svelte";
    import ProdeFomentoOperacional from "$lib/prodeFomentoOperacional.svelte";	
	import ProdeCategorizacao from "$lib/prodeCategorizacao.svelte";
    import ParametroFormat from "$lib/ParametroFormat.svelte";  

    import { maturidadeTecnologica, 
            dominioTecnologico, cicloTecnologico,
            disponibilidadeLogistica, disponibilidadeProdutiva,
            necessidadeEstrategica, necessidadeTatica,
            conteudoTecnologico, imprescindibilidade,
            fomentoOperacional, dificuldadeObtencao
           } from '$lib/shared/stores.js';
</script>

<div class="h3 bg-black p-6">
    <h2 class="h2">Parametrização</h2>
    <br>
    Maturidade Tecnológica ( {$maturidadeTecnologica} )
    <hr><br>
    <ProdeConteudoTecnologico />
    <br>
    - Domínio Tecnológico ( { $dominioTecnologico } )
    <br><br>
    - Ciclo Tecnológico ( { $cicloTecnologico } )
    <br><br><hr><br>
    <ProdeDificuldadeObtencao />
    <br>
    - Disponibilidade Logística ( { $disponibilidadeLogistica } )
    <br><br>
    - Disponibilidade Produtiva ( { $disponibilidadeProdutiva } )
    <br><br><hr><br>
    <ProdeImprescindibilidade />
    <br>
    - Necessidade Estratégica ( { $necessidadeEstrategica } )
    <br><br>
    - Necessidade Tática ( { $necessidadeTatica } )
    <br><br><hr><br>
    <ProdeFomentoOperacional />    
    <br>
    - <ParametroFormat nome = "Conteúdo Tecnológico"
                       valor = {$conteudoTecnologico} />
    <br><br>
    - <ParametroFormat nome = "Imprescindibilidade"
                       valor = {$imprescindibilidade} />
    <br><br><hr><br>
    <ProdeCategorizacao />
    <br><br>    
    - <ParametroFormat nome = "Fomento Operacional"
                       valor = {$fomentoOperacional} />
    <br><br>    
    - <ParametroFormat nome = "Dificuldade de Obtenção"
                       valor = {$dificuldadeObtencao} />
</div>
