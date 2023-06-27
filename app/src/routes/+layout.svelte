<script>
	// Your selected Skeleton theme:
	import '@skeletonlabs/skeleton/themes/theme-skeleton.css';

	// This contains the bulk of Skeletons required styles:
	import '@skeletonlabs/skeleton/styles/skeleton.css';
	
	// Theme
	import '@skeletonlabs/skeleton/themes/theme-skeleton.css';

	// Finally, your application's global stylesheet (sometimes labeled 'app.css')
	import '../app.postcss';
	
	import ArquivoLer from '$lib/ArquivoLer.svelte';
	import ArquivoSalvar from '$lib/ArquivoSalvar.svelte';
	import { AppShell, AppBar } from '@skeletonlabs/skeleton';
	import Parametrizacao from '$lib/Parametrizacao.svelte';						
</script>

<AppShell slotSidebarLeft="bg-surface-500/5 w-40 p-1">
	<svelte:fragment slot="header">		
		<AppBar>
			<svelte:fragment slot="lead">
				<strong class="text-xl uppercase"><a href="/">SISCAPED</a></strong>
			</svelte:fragment>
			<svelte:fragment slot="trail">
				<ArquivoLer />
				<ArquivoSalvar />				
				<a href="/salvar">salvar</a>
				<a href="/sobre">sobre</a>
				
			</svelte:fragment>			
		</AppBar>
	</svelte:fragment>
	<svelte:fragment slot="sidebarRight"><Parametrizacao /></svelte:fragment>
	<slot />
</AppShell>

