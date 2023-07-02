<script>
	// Your selected Skeleton theme:
	import '@skeletonlabs/skeleton/themes/theme-skeleton.css';

	// This contains the bulk of Skeletons required styles:
	import '@skeletonlabs/skeleton/styles/skeleton.css';
	
	// Theme
	import '@skeletonlabs/skeleton/themes/theme-skeleton.css';

	// Finally, your application's global stylesheet (sometimes labeled 'app.css')
	import '../app.postcss';
	
	import { AppShell, AppBar } from '@skeletonlabs/skeleton';
	import manual from '$lib/assets/manual.pdf'

	import ArquivoLer from '$lib/arq/ArquivoLer.svelte';
	import ArquivoGerar from '$lib/arq/ArquivoGerar.svelte';	
	import Parametrizacao from '$lib/Parametrizacao.svelte';	
	

	let janelaSalvarAberta = false;
	function salvar() {		
		janelaSalvarAberta = true;		
	}

	function handleMessage() {
		janelaSalvarAberta = false;
	}


</script>

<svelte:head>
	<title>SisCaPED</title>
</svelte:head>

<AppShell slotSidebarLeft="bg-surface-500/5 w-40 p-1">
	<svelte:fragment slot="header">		
		<AppBar>
			<svelte:fragment slot="lead">
				<strong class="text-xl uppercase"><a href="/">SISCAPED</a></strong>
			</svelte:fragment>
			<svelte:fragment slot="trail">
				<ArquivoLer />
				<button on:click={salvar} type="button" class="btn variant-filled">gerar arquivo</button>
				{#if janelaSalvarAberta}
					<ArquivoGerar on:message={handleMessage} />					
				{/if}		
				<a href="/relatorio">relatorio</a>
				<a href="{manual}" target="_blank">manual</a>
				<a href="/sobre">sobre</a>				
			</svelte:fragment>			
		</AppBar>
	</svelte:fragment>
	<svelte:fragment slot="sidebarRight"><Parametrizacao /></svelte:fragment>
	<slot />
</AppShell>

