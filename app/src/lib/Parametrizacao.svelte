<script>
    import ProdeConteudoTecnologico from "$lib/prodeConteudoTecnologico.svelte";
	import ProdeDificuldadeObtencao from "$lib/prodeDificuldadeObtencao.svelte";    
	import ProdeImprescindibilidade from "$lib/prodeImprescindibilidade.svelte";
    import ProdeFomentoOperacional from "$lib/prodeFomentoOperacional.svelte";	
	import ProdeCategorizacao from "$lib/prodeCategorizacao.svelte";
       

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
    Domínio Tecnológico ( { $dominioTecnologico } )
    <br><br>
    Ciclo Tecnológico ( { $cicloTecnologico } )
    <br><br><hr><br>
    <ProdeDificuldadeObtencao />
    <br>
    Disponibilidade Logística ( { $disponibilidadeLogistica } )
    <br><br>
    Disponibilidade Produtiva ( { $disponibilidadeProdutiva } )
    <br><br><hr><br>
    <ProdeImprescindibilidade />
    <br>
    Necessidade Estratégica ( { $necessidadeEstrategica } )
    <br><br>
    Necessidade Tática ( { $necessidadeTatica } )
    <br><br><hr><br>
    <ProdeFomentoOperacional />    
    <br>
    Conteúdo Tecnológico ( { $conteudoTecnologico } )
    <br><br>
    Imprescindibilidade ( { $imprescindibilidade } )
    <br><br><hr><br>
    <ProdeCategorizacao />
    <br><br>
    Fomento Operacional ( { $fomentoOperacional } )
    <br><br>
    Dificuldade de Obtenção ( { $dificuldadeObtencao } )    
</div>
