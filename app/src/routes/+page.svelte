<script>
	import { Accordion, AccordionItem } from '@skeletonlabs/skeleton';

	import MaturidadeTecnologica from "$lib/MaturidadeTecnologica.svelte";    
    import DominioTecnologico from "$lib/DominioTecnologico.svelte";
    import CicloTecnologico from "$lib/CicloTecnologico.svelte";
	import DisponibilidadeLogistica from "$lib/DisponibilidadeLogistica.svelte";
    import DisponibilidadeProdutiva from "$lib/DisponibilidadeProdutiva.svelte";
    import NecessidadeEstrategica from "$lib/NecessidadeEstrategica.svelte";
    import NecessidadeTatica from "$lib/NecessidadeTatica.svelte";
</script>

<Accordion autocollapse>
	<!-- <AccordionItem open>		 -->
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
		<svelte:fragment slot="summary"><h3 class="h3 bg-black">Disponibilidade Logística</h3></svelte:fragment>
		<svelte:fragment slot="content"><DisponibilidadeLogistica /></svelte:fragment>
	</AccordionItem>
	<AccordionItem>		
		<svelte:fragment slot="summary"><h3 class="h3 bg-black">Disponibilidade Produtiva</h3></svelte:fragment>
		<svelte:fragment slot="content"><DisponibilidadeProdutiva /></svelte:fragment>
	</AccordionItem>
	<AccordionItem>		
		<svelte:fragment slot="summary"><h3 class="h3 bg-black">Necessidade Estratégica</h3></svelte:fragment>
		<svelte:fragment slot="content"><NecessidadeEstrategica /></svelte:fragment>
	</AccordionItem>
	<AccordionItem>		
		<svelte:fragment slot="summary"><h3 class="h3 bg-black">Necessidade Tática</h3></svelte:fragment>
		<svelte:fragment slot="content"><NecessidadeTatica /></svelte:fragment>
	</AccordionItem>
</Accordion>

