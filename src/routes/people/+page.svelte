<script>
	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';
    import { base } from '$app/paths';
    import { Gallery } from 'flowbite-svelte';
	import Person from '$lib/component/person.svelte';

    let people = [
        {
            name: "Anil Sapru, M.D. M.A.S.",
            src: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.uclahealth.org%2Fsites%2Fdefault%2Ffiles%2Fstyles%2Fportrait_3x4_010000_300x400%2Fpublic%2Fimages%2Fsapru-anil-1477644219.jpg%3Fh%3Dad8d341c%26f%3Df188de4a%26itok%3DcFl5vbUJ&f=1&nofb=1&ipt=ba3628cf110f4b5054576a49bd78872538d580eb5e7cb9ef90f7291b46d2dd97&ipo=images",
            summary: "Anil Sapru is a pediatric critical care physician and researcher with decades of experience studying inflammatory biomarkers in critically ill children."
        },
		{
            name: "Colin J. Sallee, M.D., MS",
            src: null
        },
        {
            name: "Ana C. Costa Monteiro, M.D., Ph.D.",
            src: null
        },
        {
            name: "Alejandro Espinoza, Ph.D.",
            src: null
        },
		    {
            name: "Clove Taylor, B.Sc.",
            src: "images/profile/clove_taylor.png"
        },
        {
            name: "Caitlin Tang, B.Sc.",
            src: "images/profile/caitlin_tang.jpg"
        },
        {
            name: "Christine Zhang, B.Sc.",
            src: null
        },
        {
            name: "Riya Abiram",
            src: "images/profile/riya_abiram.jpg"
        },
        {
            name: "Shriya Reddy",
            src: null
        },
        {
            name: "Catherine Wang",
            src: "images/profile/catherine_wang.png"
        },
        {
            name: "Dylan Yu",
            src: null
        },
        {
            name: "Imogene Gaede",
            src: null
        },
                {
            name: "Satviki Chatuverdi",
            src: null
        },
        {
            name: "Anjali Mani",
            src: "images/profile/Anjali_Mani.jpg"
        },
        {
            name: "Elizabeth (Emma) Tu",
            src: null
        },
        {
            name: "Maya Viramontes",
            src: null
        }
    ]
    let alums = [
        {
            name: "Matt Zinter, MD",
            src: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.licdn.com%2Fdms%2Fimage%2FD5603AQEwjqFWGPqRfQ%2Fprofile-displayphoto-shrink_800_800%2F0%2F1671599203688%3Fe%3D2147483647%26v%3Dbeta%26t%3D7hoZcYwInUks7o0cmvAVvEEERTTyguwSPSzUQmM52rA&f=1&nofb=1&ipt=2616fc53673b760e7939bd43ca97950ecf4c59b833082250bbefa42849eb7251&ipo=images",
            alum: true
        },
        {
            name: "Nithya Reddy",
            src: null,
            alum: true
        },
    ]

    let flyIn = false;

    onMount(() => {
        flyIn = true;
    })

</script>

<style lang="scss">
    .people {
        display: flex;
        flex-flow: row wrap;
        gap: 2rem;
        z-index: 10000;
        .person-wrapper {
            z-index: inherit;
        }
    }
</style>

<div class="page">
    <div class="content mt-8">
        <h1 class="text-4xl font-semibold bg-white py-4 z-[1000] pop w-min whitespace-nowrap">People</h1>
        <div class="people mt-8 mb-8">
            {#if flyIn}
                {#each people as person, i} 
                    <div class="person-wrapper" in:fly|global={{ y: 50, duration: 800, delay: (80*i) }} >
                        <Person person={person}/>
                    </div>
                {/each}
            {/if}
        </div>
        <h1 class="text-4xl font-semibold bg-white py-4 z-[1000] pop w-min whitespace-nowrap">Past Members</h1>
        <div class="people mt-8 mb-8">
            {#if flyIn}
                {#each alums as person, i}
                    <Person person={person}/>
                    <!-- <div class={`person${person.alum ? " alum" : ""}`} in:fly|global={{ y: 50, duration: 800, delay: (80*i) }}>
                        
                        <img src={person.src ?? "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.vecteezy.com%2Fsystem%2Fresources%2Fpreviews%2F002%2F534%2F006%2Foriginal%2Fsocial-media-chatting-online-blank-profile-picture-head-and-body-icon-people-standing-icon-grey-background-free-vector.jpg&f=1&nofb=1&ipt=0541b37557b556d60ad384345c3c72310f5681fa608c069ee77fe5fa28040e6e&ipo=images"} alt={`Image of ${person.name ?? "Unknown"}`}/>
                        <div>
                            {person.name}
                        </div>
                    </div> -->
                {/each}
            {/if}
        </div>
    </div>
</div>
