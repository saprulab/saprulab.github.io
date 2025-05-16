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
        }
        .profile {
            display: flex;
            flex-direction: row-reverse;
            align-items: flex-start;
            z-index: 20;
        }
        img {
            overflow: hidden;
            border-top: solid 20px black;
        }
        .text {
            background: white;
            padding: 1.5rem 1.5rem;
            > p {
                margin-top: 1rem;
                font-size: large;
            }
        }
        h1 {
            font-size: xx-large;
            font-weight: 500;
            line-height: 2.5rem;
        }
    }
</style>

<div class="about">
    <div class="text shadow">
        <h1><b>Discovering what matters most</b> in pediatric critical care.</h1>
        <p class="pop">
            The <b>Sapru Lab</b> investigates biomarkers of severe illness and mortality in challenging and complex conditions such as ARDS, MODS, and sepsis.
            <br/><br/>
            Anil Sapru has decades of experience discovering and developing biomarkers in critical care, pushing forward high-impact research for the children who need it most.
        </p>
    </div>
    <img class="shadow" src="https://www.uclahealth.org/sites/default/files/styles/portrait_3x4_010000_300x400/public/images/sapru-anil-1477644219.jpg?h=ad8d341c&f=f188de4a&itok=cFl5vbUJ" />
</div>