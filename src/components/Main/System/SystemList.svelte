<script>
    import Divider from "../../UI/Divider.svelte";
    import SystemCard from "./SystemCard.svelte";
    import { planetarySystems } from "../../../data/planetarySystems";
</script>

<article id="systems">
    <Divider text="explore" />
    <div class="flex flex-col p-3 md:flex-row md:p-8">
        {#each planetarySystems as data}
            <SystemCard systemData={data} />
        {/each}
    </div>
</article>
