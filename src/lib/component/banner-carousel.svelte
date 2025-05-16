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
            id: 3,
            title: "Sapru Lab at ATS 2025",
            subtitle: "Check out our conference abstracts online",
            button: {
                text: "Check it out",
                href: "https://www.atsjournals.org/atsabstracts2025?pageSize=20&startPage=&ContribAuthorRaw=Sapru%2C%20A"
            },
            src: "https://ats2025365.prod1.sherpaserv.com/public/var-size/w1920/2/7/f/c/27fccec395f69206f47ff1aa5e225ebc.jpeg"
        },
        {
            id: 2,
            title: "Biologic mechanisms of heterogeneity in intensive insulin",
            subtitle: "Read the new paper in AJRCCM",
            button: {
                text: "Check it out",
                href: "/"
            },
            src: "images/cafpinthte_fig4.png"
        },
        // {
        //     id: 0,
        //     title: "Accelerating critical care discovery",
        //     subtitle: "See how our clinical trials are leading pediatric critical care forward.",
        //     button: {
        //         text: "See our research",
        //         href: "research"
        //     },
        //     src: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.pathologyoutlines.com%2Fimgau%2FmyeloproliferativeCNL_LiShanmugam02.jpg&f=1&nofb=1&ipt=5daeb23e31da65dc7c5e8c5f431acb6b71d76ba5bed48bd3548a8908604072c7&ipo=images"
        // },
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
        border-radius: 10px;
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