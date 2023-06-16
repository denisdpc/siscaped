<script>
	import { Accordion, AccordionItem } from '@skeletonlabs/skeleton';
	import MaturidadeTecnologica from "$lib/MaturidadeTecnologica.svelte";    
    import DominioTecnologico from "$lib/DominioTecnologico.svelte";
    import CicloTecnologico from "$lib/CicloTecnologico.svelte";
</script>


<Accordion>
	<AccordionItem open>		
		<svelte:fragment slot="summary"><h3 class="h3">Maturidade Tecnológica</h3></svelte:fragment>
		<svelte:fragment slot="content"><MaturidadeTecnologica /></svelte:fragment>
	</AccordionItem>
	<AccordionItem>		
		<svelte:fragment slot="summary"><h3 class="h3">Domínio Tecnológico</h3></svelte:fragment>
		<svelte:fragment slot="content"><DominioTecnologico /></svelte:fragment>
	</AccordionItem>
	<AccordionItem>		
		<svelte:fragment slot="summary"><h3 class="h3">Ciclo Tecnológico</h3></svelte:fragment>
		<svelte:fragment slot="content"><CicloTecnologico /></svelte:fragment>
	</AccordionItem>
</Accordion>


					
