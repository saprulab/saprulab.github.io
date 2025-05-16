<script>
    
    import { Timeline, TimelineItem, Button, Gallery } from 'flowbite-svelte';
	import { fly } from 'svelte/transition';

    let publications = [
        {
            date: "May 03, 2025",
            category: "New publication in AJRCCM",
            title: "Biologic mechanisms underlying the heterogeneous response to tight glycemic control among differentially inflamed patients in the HALF-PINT trial",
            href: "",
            authors: "M. Zinter, C. Taylor et. al.",
            abstract: "This is a sample piece of text describing the nature of the publication in full, which will likely be truncated depending on the rendering scheme of the webpage upon which it will be presented.",
            img: "images/cafpinthte_fig4.png"
        },
        {
            date: "May 01, 2025",
            category: "New abstract in ATS Online",
            title: "Differential Correlation Network Analysis Illustrates Novel Biomarker Interactions Underlying Hyperinflammation in Pediatric ARDS",
            href: "https://www.atsjournals.org/doi/abs/10.1164/ajrccm.2025.211.Abstracts.A5675",
            authors: "C. Taylor, M. Zinter et. al.",
            abstract: "This is a sample piece of text describing the nature of the publication in full, which will likely be truncated depending on the rendering scheme of the webpage upon which it will be presented.",
            img: "images/pali-network.png"
        },
        {
            date: "May 01, 2025",
            category: "New abstract in ATS Online",
            title: "Latent Profile Analyses of Circulatory Biomarkers Indicate Distinct Patterns of Inflammation in Response to Transfusion in Pediatric MODS",
            href: "https://www.atsjournals.org/doi/abs/10.1164/ajrccm.2025.211.Abstracts.A2959",
            authors: "C. Taylor, D. Markovic et. al.",
            abstract: "This is a sample piece of text describing the nature of the publication in full, which will likely be truncated depending on the rendering scheme of the webpage upon which it will be presented.",
            img: "images/cardio-fig.png"
        },
        {
            date: "May 01, 2025",
            category: "New abstract in ATS Online",
            title: "Robust Classification of Inflammatory Subphenotypes Using Penalized Logistic Regression on Highly Available Clinical Variables",
            href: "https://www.atsjournals.org/doi/abs/10.1164/ajrccm.2025.211.Abstracts.A7083",
            authors: "C. Taylor, L.N. Sanchez-Pinto et. al.",
            abstract: "This is a sample piece of text describing the nature of the publication in full, which will likely be truncated depending on the rendering scheme of the webpage upon which it will be presented.",
            img: "images/subphenonet.png"
        },
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
        max-width: min(max(60%, 400px), 800px);
        background: white;
        > img {
            position: relative;
            z-index: 1000;
            max-height: 200px;
            object-fit: cover;
            margin-bottom: 1rem;
            border-bottom: solid 1px black;
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
        <h1 class="text-4xl font-semibold bg-white py-4 z-[1000] pop w-min whitespace-nowrap">Publications</h1>
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