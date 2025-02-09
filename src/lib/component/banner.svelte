<script>
	import { ArrowKeyRight, Button } from 'flowbite-svelte';
    import { send, receive } from './transition.js';

    export let title = "";
    export let src = "";
    export let subtitle = "";
    export let id;
    export let button;

    /**
     * &::before {    
            //     --blur-strength: 200px;
            //     --blur-size: 300px;
            //     content: '&nbsp;';
            //     position: absolute;
                
            //     z-index:-1;
                
            //     inset: calc(var(--blur-size, 100px) * -1.1);
                
            //     -webkit-backdrop-filter: blur(var(--blur-strength, 10px));
            //     backdrop-filter: blur(var(--blur-strength, 10px)) brightness(125%) contrast(1.2);
                
            //     mask: 
            //     linear-gradient(to top, transparent 0%, red var(--blur-size) calc(100% - var(--blur-size)), transparent 100%), 
            //     linear-gradient(to left, transparent 0%, red var(--blur-size) calc(100% - var(--blur-size)), transparent 100%);
            //     -webkit-mask: 
            //     linear-gradient(to top, transparent 0%, red var(--blur-size) calc(100% - var(--blur-size)), transparent 100%), 
            //     linear-gradient(to left, transparent 0%, red var(--blur-size) calc(100% - var(--blur-size)), transparent 100%);
                
            //     mask-composite: intersect;
            //     -webkit-mask-composite: source-in;
            // }
    */

</script>

<style lang="scss">
    .banner {
        grid-area: "banners";
        width: calc(100% - 8rem);
        max-width: 1500px;
        border-radius: 2rem;
        border: solid 2px black;
        height: min(600px, 40vw);
        max-height: 600px;
        display: flex;
        border-top: solid 12px;
        overflow: hidden;
        display: grid;
        grid-template: "container";
        grid-template-columns: 1fr;
        place-items: end;
        place-content: end;
        user-select: none;
        > * {
            grid-area: container;
            user-select: none;
            width: 100%;
        }
        > .content {
            z-index: 1;
            display: flex;
            position: relative;
            place-self: end center;
            align-items: center;
            justify-content: space-between;
            flex-direction: row;
            height: 30%;
            width: 99%;
            margin-bottom: 0.5%;
            background: #ffffffdd;
            backdrop-filter: blur(40px) contrast(1.5) brightness(1.3);
            border-radius: 2rem;
            .textboxes {
                display: flex;
                flex-direction: column;
                .title {
                    font-size: min(2.4rem, 2.4vw);
                    line-height: min(2.4rem, 2.4vw);
                    font-weight: 700;
                    margin-block-end: 0.5rem;
                }
                .subtitle {
                    font-size: min(1.2rem, 1.5vw);
                }
            }
            .btn {
                align-self: flex-end;
            }
            padding: 2rem;
        }
        > img {
            position: relative;
            object-fit: cover;
            max-height: 600px;
        }
    }
</style>

<div class="banner" in:receive={{ key: id }} out:send={{ key: id }}>
    <div class="content">
        <div class="textboxes">
            <h1 class="title">{title}</h1>
            <h3 class="subtitle">{subtitle}</h3>
        </div>
        <div class="btn">
            <Button size="lg">{button?.text ?? ""}&nbsp;&nbsp;
                <ArrowKeyRight/>
            </Button>
        </div>
    </div>
    <img src={src} class="banner-img"/>
</div>