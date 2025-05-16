<script>
    import { Card } from "flowbite-svelte";
	import { IconSolid } from "flowbite-svelte-icons";
    import { fly } from "svelte/transition";

    let tools = [
        { name: "HYPERSCREEN", desc: "Inflammatory subphenotype screening tool using gradient-boosted trees", href: "hyperscreen/", disabled: false },
        { name: "SubphenoNet", desc: "Inflammatory subphenotype prediction from clinical data", href: "subphenonet/", disabled: true },
    ]

</script>

<div class="content shadow">
    <h1>Web tools</h1>
    <div class="gallery flex flex-wrap gap-6 mt-6">
        {#each tools as tool, i}
            {#if !tool.disabled}
                <div in:fly|global={{ y: 50, duration: 800, delay: 80*i }}>
                    <Card style="text-decoration: none" href={tool.href ?? null}>
                        <h1 class="font-bold text-blue-800 flex-row flex items-center gap-2">
                            <svg class="w-10 h-10 text-blue-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M5.05 3C3.291 3 2.352 5.024 3.51 6.317l5.422 6.059v4.874c0 .472.227.917.613 1.2l3.069 2.25c1.01.742 2.454.036 2.454-1.2v-7.124l5.422-6.059C21.647 5.024 20.708 3 18.95 3H5.05Z"/>
                            </svg>
                            {tool.name}
                        </h1>
                        <h3 class="text-slate-500">
                            {tool.desc}
                        </h3>
                    </Card>
                </div>
            {:else}
                <div in:fly|global={{ y: 50, duration: 800, delay: 120*i }}>
                    <Card style="text-decoration: none" class="bg-slate-100">
                        <h1 class="font-bold text-slate-500 flex-row flex items-center gap-2">
                            <svg class="w-10 h-10 text-slate-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.5045 14.4954 21 12m0 0-2.4955-2.49542M21 12h-5.9481m-9.49798 2.5539L3 12m0 0 2.55392-2.55392M3 12h5.83192m.16807 7V5H15v14H8.99999Z"/>
                            </svg>
                            {tool.name}
                        </h1>
                        <h3 class="text-slate-400">
                            {tool.desc}
                        </h3>
                    </Card>
                </div>
            {/if}
        {/each}
        
        
    </div>
    
</div>

<style lang="scss">
    .content {
        margin-top: 4rem;
        padding: 4rem;
        background: white;
        z-index: 100;
    }
    h1 {
        font-size: xx-large;
    }
    .desc {
        margin-top: 2rem;
        
        background: rgb(232, 240, 248);
        padding: 1rem;
    }
    .embedded {
        margin-top: 2rem;
        width: 100%;
        height: 600px;
        > embed {
            width: 100%;
            height: 100%;
        }
    }
</style>
