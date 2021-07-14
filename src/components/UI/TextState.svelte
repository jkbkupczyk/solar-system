<script>
    export let props;
</script>

<p>
    {props.text}
    <a href={props.target} target="_blank">
        {props.textState}
    </a>
</p>

<style>
    p {
        isolation: isolate;
    }

    a {
        position: relative;
        padding: 0 .25rem;
        text-decoration: none;
    }

    a::after {
        content: "";
        position: absolute;
        inset: 0;
        background: currentColor;
        mix-blend-mode: difference;
        transform: scaley(0.05);
        transform-origin: 0 100%;
        transition: transform 0.25s;
    }

    a:focus {
        outline: none;
    }

    a:focus,
    a:focus::after,
    a:hover,
    a:hover::after {
        transform: none;
    }
</style>
