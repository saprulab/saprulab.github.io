<script>
	import { Badge } from "flowbite-svelte";
	import { ExclamationCircleSolid } from "flowbite-svelte-icons";
    import { fly } from "svelte/transition";
</script>
<div class="content shadow gap-6 flex flex-col" in:fly|global={{ y: 50, duration: 800, delay: 0 }}>
	<h1>We'd love to hear from you!</h1>
    <div class="bg-blue-500 rounded-sm flex flex-row items-center gap-4 p-3 text-white justify-between">
        <ExclamationCircleSolid/>
        <p>
            The Sapru Lab is currently seeking postdocs interested in pediatric critical care and multiomics research. 
            If you are interested, please reach out to Anil Sapru at <a class="text-white">asapru [at] mednet.ucla.edu</a>.
        </p>
    </div>
    <p>

    </p>
</div>

<style>
	.content {
		margin-top: 3rem;
		padding: 4rem;
		background: white;
	}
	h1 {
		font-size: xx-large;
	}
</style>
