const landing = {
    html: `
    <div id="landing" class="main content markdown-body">
        <div style="text-align: center">
            <h3>We've moved! You can visit the new EssentialsX website at <a href="https://essentialsx.cf">essentialsx.cf</a>.</h3>
        </div>
        <hr />
        <p><img src="https://camo.githubusercontent.com/9ad178e5cf76a372d6aaee8bbdf13485fbc1d51b/68747470733a2f2f692e696d6775722e636f6d2f435034535a70422e706e67"></img></p>
        <p><i>The official EssentialsX site.</i></p>
        <section>
            <a class="big wiki" href="#/_DocuteHome">Wiki</a>
            <a class="big wiki" href="https://github.com/EssentialsX/Essentials">GitHub</a>
        </section>
        <DownloadPage></DownloadPage>
    </div>
    `,
    component: {
        components: {
            DownloadPage,
        }
    },
};

window.landing = landing;
