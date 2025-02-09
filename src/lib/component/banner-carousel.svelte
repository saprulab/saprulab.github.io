<script>
    import Banner from '$lib/component/banner.svelte';
    import Carousel from 'svelte-carousel';
    import { browser } from '$app/environment';

    import { AngleLeftOutline, AngleRightOutline } from 'flowbite-svelte-icons';
	import { fly } from 'svelte/transition';
  
    let carousel; // for calling methods of the carousel instance
    
    const handleNextClick = () => {
      carousel.goToNext()
    }
    const handleLastClick = () => {
        carousel.goToPrev()
    }

    const banners = $state([
        {
            id: 0,
            title: "Accelerating critical care discovery",
            subtitle: "See how our clinical trials are leading pediatric critical care forward.",
            button: {
                text: "See our research",
                href: "/research"
            },
            src: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.pathologyoutlines.com%2Fimgau%2FmyeloproliferativeCNL_LiShanmugam02.jpg&f=1&nofb=1&ipt=5daeb23e31da65dc7c5e8c5f431acb6b71d76ba5bed48bd3548a8908604072c7&ipo=images"
        },
        {
            id: 1,
            title: "TRAP-MODS: unpacking transfusion pathophysiology",
            subtitle: "What happens to inflammatory pathways?",
            button: {
                text: "Check it out",
                href: "/trap-mods"
            },
            src: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.thoughtco.com%2Fthmb%2FRIWieAd8xKjbo9yOHkrrovfKkhQ%3D%2F1500x0%2Ffilters%3Ano_upscale()%3Amax_bytes(150000)%3Astrip_icc()%2Fred_blood_cells_1-57b20c583df78cd39c2f8e15.jpg&f=1&nofb=1&ipt=2609b63e35f158a5490d9d503b445a40d0c7bd9e27f2b229f2b010445e3349a9&ipo=images"
        },
        {
            id: 2,
            title: "1/4-PINT study",
            subtitle: "Honing in on heterogeneity of treatment effect in insulin titration",
            button: {
                text: "Check it out",
                href: "/trap-mods"
            },
            src: "https://media.gettyimages.com/id/1980373038/photo/brown-fat-cell.jpg?s=612x612&w=0&k=20&c=gcdAAw9sKfIvrDDO3KYkxQlr3Bz8iXiDc5JVmhDbBLI="
        }
    ])
</script>

<style lang="scss">
    .arrow {
        position: absolute;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background: white;
        top: calc(50% - 1.25rem);
        height: 2.5rem;
        z-index: 10;
        border-radius: 1rem;
        &.right {
            left: calc(100% - 1.5rem - 0.5rem);
        }
        &.left {
            left: 0.5rem;
        }
    }
    .banner-container {
        position: relative;
        z-index: 10;
    }
</style>

{#if browser}
    <div class="banner-container">
        <Carousel
        bind:this={carousel}
        autoplay={true}
        autoplayDuration={6500}
        >
            <button slot="prev" class="arrow left" on:click={() => handleLastClick()}>
                <AngleLeftOutline class="w-6 h-6"/>
            </button>
            <button slot="next" class="arrow right" on:click={() => handleNextClick()}>
                <AngleRightOutline class="w-6 h-6"/>
            </button>
            {#each banners as ban}
                <Banner title={ban.title}
                        subtitle={ban.subtitle}
                        src={ban.src}
                        id={ban.id}
                        button={ban.button}
                />
            {/each}
        </Carousel>
    </div>
{/if}