<div class="settings-cog fixed top-0 right-0 m-2 md:m-4 select-none" on:click>
    <input type="checkbox" class="hidden" id="settings" />

    <label for="settings text-white">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-white cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
    </label>
</div>

<style>
    .settings-cog {
        transition: transform .7s ease-in-out;
        -o-transition: -o-transform .7s ease-in-out;
        -moz-transition: -moz-transform .7s ease-in-out;
        -webkit-transition: -webkit-transform .7s ease-in-out;
    }

    .settings-cog:hover {
        transform: rotate(360deg);
        -o-transform: rotate(360deg);
        -moz-transform: rotate(360deg);
        -webkit-transform: rotate(360deg);
    }
</style>
