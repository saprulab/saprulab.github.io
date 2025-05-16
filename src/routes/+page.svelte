<script>
	import AboutChip from '$lib/component/AboutChip.svelte';
	import BannerCarousel from '$lib/component/banner-carousel.svelte';
	import DevModal from '$lib/component/devModal.svelte';

    
    import { Button } from 'flowbite-svelte';
	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';

    let { data } = $props();

    onMount(() => {
        console.log(data.visited)
    })

    //https://images.pexels.com/photos/11210350/pexels-photo-11210350.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1
</script>

<style lang="scss">
    :global(.page) {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 6rem;
    }
    .content {
        margin-left: 4rem;
        margin-right: 4rem;
        max-width: 100%;
        > .section {
            margin-top: 2rem;
            z-index: 1;
        }
    }
    .carousel {
        z-index: 1000 !important;
        position: relative;
    }
    .section {
        position: relative;
    }

    :global(.main) {
        min-height: 100vh !important;
    }
    
</style>

<div class="page">
    <!-- <div style="z-index: 10000000;">
        {#if data.visited !== "true"}
            <DevModal />
        {/if}
    </div> -->
    <div class="content">
        <div class="section carousel" in:fly|global={{ y: 50, duration: 800 }}>
            <BannerCarousel />
        </div>
        <div class="section" in:fly|global={{ y: 50, duration: 800, delay: 200 }}>
            <AboutChip />
        </div>
    </div>
</div>