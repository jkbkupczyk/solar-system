<script>
	import { Router, Route } from "svelte-routing";

	export let url = "";
	export let routes;
</script>

<Router {url}>
	{#each routes as rt}
		<Route path={rt.path}>
			<svelte:component this={rt.component} />
		</Route>
	{/each}
</Router>

<style global lang="postcss">
	@tailwind base;
	@tailwind components;
	@tailwind utilities;

	body::-webkit-scrollbar {
		width: .5rem;
	}

	body::-webkit-scrollbar-track {
		background: #101010;
	}

	body::-webkit-scrollbar-thumb {
		background: rgba(229, 231, 235, 1);
		border-radius: 12.5%;
	}

	body::-webkit-scrollbar-thumb:hover {
		background: red;
	}

	body {
		overflow-x: hidden;
	}
</style>
