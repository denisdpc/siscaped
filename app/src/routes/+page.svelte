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