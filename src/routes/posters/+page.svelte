<script>
    
    import { Timeline, TimelineItem, Button, Gallery } from 'flowbite-svelte';
	import { fly } from 'svelte/transition';

    let posters = [
        {
            alt: "Differential Correlation Network Analysis Illustrates Novel Biomarker Interactions Underlying Hyperinflammation in Pediatric ARDS",
            href: "posters/differential-correlation-pali.pdf",
            src: "images/differential-correlation-pali.png",
        },
        {
            alt: "Latent Profile Analyses of Circulatory Biomarkers Indicate Distinct Patterns of Inflammation in Response to Transfusion in Pediatric MODS",
            href: "posters/cardiopulmonary-bypass.pdf",
            src: "images/cardiopulmonary-bypass.png"
        },
        {
            alt: "Robust Classification of Inflammatory Subphenotypes Using Penalized Logistic Regression on Highly Available Clinical Variables",
            href: "posters/subphenonet.pdf",
            src: "images/subphenonet-poster.png"
        },
    ]

</script>

<style lang="scss">
    .gallery {
        display: flex;
        flex-direction: column;
        gap: 2rem;
        .poster {
            > img {
                border-radius: 5px;
                outline: solid 1px black;
            }
        }
    }
</style>

<div class="page">
    <div class="content mt-8">
        <h1 class="text-4xl font-semibold bg-white py-4 z-[1000] pop w-min whitespace-nowrap">Posters</h1>
        <div class="mt-8 mb-8 relative z-10 gallery">
            {#each posters as poster, i}
                <a href={poster.href} class="poster" in:fly|global={{ y: 50, duration: 800, delay: (80*i) }}>
                    <img src={poster.src} alt={poster.alt}/>
                </a>
            {/each}
        </div>
    </div>
</div>