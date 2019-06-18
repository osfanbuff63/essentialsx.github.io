const landing = {
    html: `
    <div id="landing" class="main content markdown-body">
        <p><img src="https://camo.githubusercontent.com/9ad178e5cf76a372d6aaee8bbdf13485fbc1d51b/68747470733a2f2f692e696d6775722e636f6d2f435034535a70422e706e67"></img></p>
        <p><i>The official EssentialsX site.</i></p>
        <section>
            <a class="big wiki" href="#/_DocuteHome">Visit wiki</a>
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
