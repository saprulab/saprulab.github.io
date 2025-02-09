<script>
	import Nav from '$lib/component/nav.svelte';
	import ScribbleBlue from '$lib/component/scribbleBlue.svelte';
	import ScribbleRed from '$lib/component/scribbleRed.svelte';
    import '../app.css';
	let { children } = $props();
    import { page } from '$app/state';
	import ScribblePurple from '$lib/component/scribblePurple.svelte';
	import { onMount } from 'svelte';

    onMount(() => {
        console.log(page.url.pathname)
    })

</script>

<style>
    .main {
        padding: 0 10%;
        display: flex;
        flex-direction: column;
        overflow: hidden;
    }
</style>

<div class="main">
    <Nav/>
    {@render children()}
    {#if page.url.pathname.endsWith("/people")}<ScribbleRed />
    {:else if page.url.pathname.endsWith("/news")}<ScribblePurple />
    {:else}<ScribbleBlue />{/if}
</div>

