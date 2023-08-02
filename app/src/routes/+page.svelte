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
	import Justificativaimprescindibilidade from '$lib/justificativas/JustificativaImprescindibilidade.svelte';	

	import ArquivoFotos from '$lib/arq/ArquivoFotos.svelte';

	import TabelaFomentoCategorizacao from '$lib/justificativas/TabelaFomentoCategorizacao.svelte';

	const items = [
		{descricao: 'Identificação', componente: Identificacao },
		{descricao: 'Objetivo', componente: Objetivo },
		{descricao: 'Aplicação na FAB', componente: AplicacaoFAB },
		{descricao: 'Aplicação na atividade finalística de defesa', componente: AplicacaoAtividadeFinalistica },
		{descricao: 'Maturidade Tecnológica', componente: MaturidadeTecnologica },
		{descricao: 'Domínio Tecnológico', componente: DominioTecnologico },
		{descricao: 'Ciclo Tecnológico', componente: CicloTecnologico },
		{descricao: 'Conteúdo Tecnológico', componente: JustificativaConteudoTecnologico },
		{descricao: 'Disponibilidade Logística', componente: DisponibilidadeLogistica },
		{descricao: 'Disponibilidade Produtiva', componente: DisponibilidadeProdutiva },
		{descricao: 'Dificuldade de Obtenção', componente: JustificativaDificuldadeObtencao },
		{descricao: 'Necessidade Estratégica', componente: NecessidadeEstrategica },
		{descricao: 'Necessidade Tática', componente: NecessidadeTatica },
		{descricao: 'Imprescindibilidade', componente: Justificativaimprescindibilidade },
		{descricao: 'Fomento Operacional & Categorização', componente: TabelaFomentoCategorizacao },
		{descricao: 'Fotos', componente: ArquivoFotos }
	]
</script>

<Accordion autocollapse>
	{#each items as item}
		<AccordionItem>
			<svelte:fragment slot="summary"><h3 class="h3 bg-black">{ item.descricao }</h3></svelte:fragment>
			<svelte:fragment slot="content"><svelte:component this={ item.componente} /></svelte:fragment>
		</AccordionItem>
	{/each}
</Accordion>

<!-- 
<Accordion autocollapse>	
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
</Accordion> -->