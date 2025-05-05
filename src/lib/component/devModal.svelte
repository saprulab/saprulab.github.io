<script>
    import { Modal } from 'flowbite-svelte';
	import { onMount } from 'svelte';

    export let showDevModal = true;

</script>

<Modal title={""} bind:open={showDevModal} autoclose outsideclose class="max-w-[40vw]">
    <h3>Welcome to the Sapru Lab website!</h3>
    <p>This site is <strong>under construction</strong>, use at your own risk!</p>
</Modal>