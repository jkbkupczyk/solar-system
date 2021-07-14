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

	@layer utilities {
		.border-radius-right {
			border-radius: 0 .5rem .5rem 0;
		}
	}

	body {
		overflow-x: hidden;
	}

	body::-webkit-scrollbar {
		width: .75rem;
	}

	body::-webkit-scrollbar-track {
		background: #101010;
	}

	body::-webkit-scrollbar-thumb {
		background: rgb(229, 231, 235);
		border-radius: 12.5%;
	}

	body::-webkit-scrollbar-thumb:hover {
		background: rgb(176, 178, 182);
	}

	* {
		/* debug only */
		/* border: 1px solid red; */
	}
</style>
