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
						
</script>

<AppShell slotSidebarLeft="bg-surface-500/5 w-40 p-1">
	<svelte:fragment slot="header">
		<!-- App Bar -->
		<AppBar>
			<svelte:fragment slot="lead">
				<strong class="text-xl uppercase"><a href="/">SISCAPED</a></strong>
			</svelte:fragment>
			<svelte:fragment slot="trail">
				<a href="/sobre">Sobre</a>
			</svelte:fragment>			
		</AppBar>
	</svelte:fragment>
	<slot />
</AppShell>

