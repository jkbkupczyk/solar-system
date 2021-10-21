<script>
    export let checkedVal = false;
</script>

<label class="relative inline-block w-8 h-4 my-1">
    <input
        type="checkbox"
        bind:checked={checkedVal}
        class="opacity-0 w-0 h-0"
    />
    <span class="absolute cursor-pointer inset-0 bg-gray-500 rounded-full" />
</label>

<style>
    span {
        -webkit-transition: 500ms;
        transition: 500ms;
    }

    span::before {
        position: absolute;
        content: "";
        width: 16px;
        height: 16px;
        inset: 0;
        border-radius: 50%;
        background-color: white;
        -webkit-transition: 500ms;
        transition: 500ms;
    }

    input:checked + span {
        background-color: rgb(37, 99, 235);
    }

    input:checked + span::before {
        -webkit-transform: translateX(16px);
        -ms-transform: translateX(16px);
        transform: translateX(16px);
    }
</style>
