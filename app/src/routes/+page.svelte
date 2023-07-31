<script>
	import { Accordion, AccordionItem } from '@skeletonlabs/skeleton';

	import Identificacao from '$lib/Identificacao.svelte';
	import Objetivo from '$lib/Objetivo.svelte';
	import AplicacaoFAB from '$lib/justificativas/AplicacaoFAB.svelte';
	import AplicacaoAtividadeFinalistica from '$lib/justificativas/AplicacaoAtividadeFinalistica.svelte';
	

	import MaturidadeTecnologica from "$lib/MaturidadeTecnologica.svelte";    
    import DominioTecnologico from "$lib/DominioTecnologico.svelte";
    import CicloTecnologico from "$lib/CicloTecnologico.svelte";
	import JustificativaConteudoTecnologico from '$lib/justificativas/JustificativaConteudoTecnologico.svelte';

	import DisponibilidadeLogistica from "$lib/DisponibilidadeLogistica.svelte";
    import DisponibilidadeProdutiva from "$lib/DisponibilidadeProdutiva.svelte";
	import JustificativaDificuldadeObtencao from '$lib/justificativas/JustificativaDificuldadeObtencao.svelte';

    import NecessidadeEstrategica from "$lib/NecessidadeEstrategica.svelte";
    import NecessidadeTatica from "$lib/NecessidadeTatica.svelte";
	import Justificativaimprescindibilidade from '$lib/justificativas/Justificativaimprescindibilidade.svelte';	

	import ArquivoFotos from '$lib/arq/ArquivoFotos.svelte';

	import TabelaFomentoCategorizacao from '$lib/justificativas/TabelaFomentoCategorizacao.svelte';
</script>

<Accordion autocollapse>
	<!-- <AccordionItem open>		 -->
	<AccordionItem>
		<svelte:fragment slot="summary"><h3 class="h3 bg-black">Identificação</h3></svelte:fragment>
		<svelte:fragment slot="content"><Identificacao /></svelte:fragment>
	</AccordionItem>
	<AccordionItem>
		<svelte:fragment slot="summary"><h3 class="h3 bg-black">Objetivo</h3></svelte:fragment>
		<svelte:fragment slot="content"><Objetivo /></svelte:fragment>
	</AccordionItem>
	<AccordionItem>
		<svelte:fragment slot="summary"><h3 class="h3 bg-black">Aplicação na FAB</h3></svelte:fragment>
		<svelte:fragment slot="content"><AplicacaoFAB /></svelte:fragment>
	</AccordionItem>
	<AccordionItem>
		<svelte:fragment slot="summary"><h3 class="h3 bg-black">Aplicação na atividade finalística de defesa</h3></svelte:fragment>
		<svelte:fragment slot="content"><AplicacaoAtividadeFinalistica /></svelte:fragment>
	</AccordionItem>
	<AccordionItem>
		<svelte:fragment slot="summary"><h3 class="h3 bg-black">Maturidade Tecnológica</h3></svelte:fragment>
		<svelte:fragment slot="content"><MaturidadeTecnologica /></svelte:fragment>
	</AccordionItem>	
	<AccordionItem>		
		<svelte:fragment slot="summary"><h3 class="h3 bg-black">Domínio Tecnológico</h3></svelte:fragment>
		<svelte:fragment slot="content"><DominioTecnologico /></svelte:fragment>
	</AccordionItem>
	<AccordionItem>		
		<svelte:fragment slot="summary"><h3 class="h3 bg-black">Ciclo Tecnológico</h3></svelte:fragment>
		<svelte:fragment slot="content"><CicloTecnologico /></svelte:fragment>
	</AccordionItem>
	<AccordionItem>		
		<svelte:fragment slot="summary"><h3 class="h3 bg-black">Conteúdo Tecnológico</h3></svelte:fragment>
		<svelte:fragment slot="content"><JustificativaConteudoTecnologico /></svelte:fragment>
	</AccordionItem>
	<AccordionItem>		
		<svelte:fragment slot="summary"><h3 class="h3 bg-black">Disponibilidade Logística</h3></svelte:fragment>
		<svelte:fragment slot="content"><DisponibilidadeLogistica /></svelte:fragment>
	</AccordionItem>
	<AccordionItem>		
		<svelte:fragment slot="summary"><h3 class="h3 bg-black">Disponibilidade Produtiva</h3></svelte:fragment>
		<svelte:fragment slot="content"><DisponibilidadeProdutiva /></svelte:fragment>
	</AccordionItem>
	
	<AccordionItem>		
		<svelte:fragment slot="summary"><h3 class="h3 bg-black">Dificuldade de Obtenção</h3></svelte:fragment>
		<svelte:fragment slot="content"><JustificativaDificuldadeObtencao /></svelte:fragment>
	</AccordionItem>
	
	<AccordionItem>		
		<svelte:fragment slot="summary"><h3 class="h3 bg-black">Necessidade Estratégica</h3></svelte:fragment>
		<svelte:fragment slot="content"><NecessidadeEstrategica /></svelte:fragment>
	</AccordionItem>
	<AccordionItem>		
		<svelte:fragment slot="summary"><h3 class="h3 bg-black">Necessidade Tática</h3></svelte:fragment>
		<svelte:fragment slot="content"><NecessidadeTatica /></svelte:fragment>
	</AccordionItem>
	<AccordionItem>		
		<svelte:fragment slot="summary"><h3 class="h3 bg-black">Imprescindibilidade</h3></svelte:fragment>
		<svelte:fragment slot="content"><Justificativaimprescindibilidade /></svelte:fragment>
	</AccordionItem>
	<AccordionItem>		
		<svelte:fragment slot="summary"><h3 class="h3 bg-black">Fotos</h3></svelte:fragment>
		<svelte:fragment slot="content"><ArquivoFotos /></svelte:fragment>
	</AccordionItem>
	<AccordionItem>		
		<svelte:fragment slot="summary"><h3 class="h3 bg-black">Fomento Operacional & Categorização</h3></svelte:fragment>
		<svelte:fragment slot="content"><TabelaFomentoCategorizacao /></svelte:fragment>
	</AccordionItem>
</Accordion>