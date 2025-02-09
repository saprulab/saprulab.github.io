<script>
    
    import { Timeline, TimelineItem, Button } from 'flowbite-svelte';
	import { fly } from 'svelte/transition';

    let publications = [
        {
            date: "January 21, 2025",
            category: "New publication in Resuscitation",
            title: "Practice patterns for acquiring neuroimaging after pediatric in-hospital cardiac arrest",
            href: "https://www.sciencedirect.com/science/article/pii/S0300957225000188",
            authors: "Matthew P Kirschen, Natalie L Ullman, Ron W Reeder et. al.",
            img: "https://ars.els-cdn.com/content/image/1-s2.0-S0300957225000188-fx1.jpg"
        },
        {
            date: "November 29, 2024",
            category: "New publication in ASM mSystems",
            title: "Proteomic profiling of the local and systemic immune response to pediatric respiratory viral infections",
            href: "https://journals.asm.org/doi/full/10.1128/msystems.01335-24",
            authors: "E. Lydon, C. M. Osborne, B. D. Wagner et. al.",
            abstract: "This is a sample piece of text describing the nature of the publication in full, which will likely be truncated depending on the rendering scheme of the webpage upon which it will be presented.",
            img: "https://journals.asm.org/cms/10.1128/msystems.01335-24/asset/3d2bb8f7-501e-45b5-8b9a-05467a53fa5e/assets/images/large/msystems.01335-24.f002.jpg"
        },
    ]

</script>

<style lang="scss">
    :global(time) {
        @apply text-lg !important;
        background: white;
        outline: solid 0.25rem white;
        border-radius: 0.25rem;
        z-index: 5;
    }
    .article {
        position: relative;
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        z-index: 1000;
        @apply p-8 mt-2;
        border-radius: 1rem;
        border: solid 1px black;
        max-width: max(60%, 400px);
        background: white;
        > img {
            position: relative;
            z-index: 1000;
            max-height: 200px;
            object-fit: cover;
            margin-bottom: 1rem;
        }
    }
    :global(time + h3) {
        background: white !important;
        width: min-content;
        white-space: nowrap;
    }
</style>

<div class="page">
    <div class="content mt-8">
        <h1 class="text-4xl font-semibold bg-white py-4 z-[1000] pop w-min whitespace-nowrap">News</h1>
        <div class="mt-8 mb-8 relative z-10">
            <Timeline>
                {#each publications as pub, i}
                    <div in:fly|global={{ y: 50, duration: 800, delay: (80*i) }}>
                        <TimelineItem date={pub.date} title={pub.category ?? null}>
                            <a class={`article`} href={pub.href ?? ""}>
                                {#if pub.img}<img src={pub.img} alt={pub.title ?? "No description provided"}/>{/if}
                                <h2 class="text-2xl/7 font-semibold">{pub.title ?? "Title"}</h2>
                                <h4 class="text-lg/5 text-slate-600 font-medium">{pub.authors ?? "Authors"}</h4>
                                <!-- <span class="text-md">{pub.abstract ?? "Abstract Text"}</span> -->
                            </a>
                        </TimelineItem>
                    </div>
                {/each}
            </Timeline>
        </div>
    </div>
</div>