<script>
	import { Router, Route } from "svelte-routing";

	export let url = "";
	export let routes;
</script>

<Router {url}>
	{#each routes as rt}
		<Route path={rt.path} let:params>
			<svelte:component this={rt.component} system={params} />
		</Route>
	{/each}
</Router>

<style global lang="postcss">
	@tailwind base;
	@tailwind components;
	@tailwind utilities;

	.tooltip {
		@apply invisible absolute;
	}

	.has-tooltip:hover .tooltip {
		@apply visible z-50;
	}

	@layer utilities {
		.border-radius-right {
			border-radius: 0 0.5rem 0.5rem 0;
		}
	}

	body {
		overflow-x: hidden;
	}

	body::-webkit-scrollbar {
		width: 0.75rem;
	}

	body::-webkit-scrollbar-track {
		background: #101010;
	}

	body::-webkit-scrollbar-thumb {
		background: rgb(229, 231, 235);
		border-radius: 1.25rem;
	}

	body::-webkit-scrollbar-thumb:hover {
		background: rgb(176, 178, 182);
	}

	* {
		/* debug only */
		/* border: 1px solid red; */
	}
</style>
