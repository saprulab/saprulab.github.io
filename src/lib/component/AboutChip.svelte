<script>
    import { Button } from 'flowbite-svelte';
</script>

<style lang="scss">
    .about {
        display: grid;
        grid-template-columns: 4fr 1fr;
        gap: 2rem;

        .gradient {
            width: 1rem;
            border-radius: 2rem;
            height: 100%;
            @apply bg-gradient-to-t from-bluegold-100 to-bluegold-700;
        }
        .blurb {
            border-radius: 2rem;
            border: solid 6px black;
            border-top-width: 2px;
            border-left-width: 12px;
            border-bottom-width: 2px;
            border-right-width: 2px;
            @apply border-black;
            padding: 2rem;
            font-size: x-large;
            z-index: 1;
            background: white;
        }
        .profile {
            display: flex;
            flex-direction: row-reverse;
            align-items: flex-end;
            > img {
                border-radius: 2rem;
                overflow: hidden;
                border: solid 2px black;
            }
            z-index: 20;
        }
    }
</style>

<div class="about">
    <div class="blurb">
        <p class="pop">
            The <b>Sapru Lab</b> is lorem ipsum dolor sit amet
        </p>
    </div>
    <div class="profile">
        <img src="https://www.uclahealth.org/sites/default/files/styles/portrait_3x4_010000_300x400/public/images/sapru-anil-1477644219.jpg?h=ad8d341c&f=f188de4a&itok=cFl5vbUJ" />
    </div>
</div>