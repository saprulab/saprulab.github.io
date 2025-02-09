<script>
	import AboutChip from '$lib/component/AboutChip.svelte';
	import BannerCarousel from '$lib/component/banner-carousel.svelte';

    
    import { Button } from 'flowbite-svelte';
	import { fly } from 'svelte/transition';

    

    //https://images.pexels.com/photos/11210350/pexels-photo-11210350.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1
</script>

<style lang="scss">
    .page {
        display: flex;
        flex-direction: column;
        align-items: center;
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
</style>

<div class="page">
    <div class="content">
        <div class="section carousel" in:fly|global={{ y: 50, duration: 800 }}>
            <BannerCarousel />
        </div>
        <div class="section" in:fly|global={{ y: 50, duration: 800, delay: 200 }}>
            <AboutChip />
        </div>
    </div>
</div>