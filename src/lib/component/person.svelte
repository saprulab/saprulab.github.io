<script>
	import { slide } from "svelte/transition";

    export let person;

    let showSummary = false;

</script>

<style lang="scss">
    .person {
        //border: solid 2px black;
        border-radius: 5px;
        width: 275px;
        aspect-ratio: 3/4;
        display: flex;
        flex-direction: column;
        overflow: hidden;
        z-index: inherit;
        &:hover {
            > img {
                scale: 1.1;
                filter: saturate(1.4);
            }
        }
        > img {
            transition: filter 0.5s ease, scale 0.5s ease;
            object-fit: cover;
            filter: saturate(1);
            height: 90%;
        }
        > div {
            background: black;
            color: white;
            @apply p-2;
            z-index: 10;
        }
        &.alum > div {
            
        }
    }
</style>

<div class={`person${person.alum ? " alum" : ""} shadow`} on:click={() => showSummary = !showSummary}>
    <img src={person.src ?? "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.vecteezy.com%2Fsystem%2Fresources%2Fpreviews%2F002%2F534%2F006%2Foriginal%2Fsocial-media-chatting-online-blank-profile-picture-head-and-body-icon-people-standing-icon-grey-background-free-vector.jpg&f=1&nofb=1&ipt=0541b37557b556d60ad384345c3c72310f5681fa608c069ee77fe5fa28040e6e&ipo=images"} alt={`Image of ${person.name ?? "Unknown"}`}/>
    {#if !showSummary || !person.summary}
        <div transition:slide={{ duration: 200 }}>
            {person.name}
        </div>
    {:else}
        <div class="summary" transition:slide={{  duration: 200 }}>
            {person.summary}
        </div>
    {/if}
</div>