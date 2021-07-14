<script>
    export let systemData;
</script>

<div class="grid md:grid-cols-2 m-4 border select-none md:w-1/3">
    <div class="p-2">
        <h2 class="text-xl">{systemData.name}</h2>
        <!-- <div><p>{systemData.desc}</p></div> -->
        <a href="#" class="flex">
            <span class="m-0">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 m-0" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                    <path fill-rule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clip-rule="evenodd" />
                </svg>
            </span>
            <p>View System</p>
        </a>
    </div>
    <div>
        <img src={systemData.img} alt={systemData.parentStar} class="min-h-full border-radius-right" />
    </div>
</div>

<style>
    .border {
        border: 1px solid rgba(151, 152, 153, 0.4);
        border-radius: .5rem;
    }
</style>