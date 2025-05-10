<style>
    .content {
        margin-top: 4rem;
        padding: 4rem;
        background: white;
        min-height: 800px;
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

<div class="content shadow">
    <h1>HYPER-SCREEN</h1>
    <div class="desc">
        <p>Welcome to HYPER-SCREEN! This page allows you to input data collected from PRISM-III and PELOD-2 scores to predict inflammatory subphenotypes.<br/>
        Input data below and click "Run" to classify a sample.</p>
    </div>
    <div class="embedded">
        <embed src="https://saprulab.shinyapps.io/webapp/" />
    </div>
</div>