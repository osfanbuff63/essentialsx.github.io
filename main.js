const mainCI = "https://ci.ender.zone/job/EssentialsX/";
const mirrorCI = "https://ci.akpmakes.tech/job/EssentialsX/";

axios.defaults.baseURL = mainCI;

const landing = {
    html: `
    <transition name="fadein">
    <div id="landing" class="main content markdown-body">
        <img src="https://camo.githubusercontent.com/9ad178e5cf76a372d6aaee8bbdf13485fbc1d51b/68747470733a2f2f692e696d6775722e636f6d2f435034535a70422e706e67"></img>
        <h2>Download EssentialsX</h2>
        <section>
            <p v-if="buildNo">The latest version of EssentialsX is <b>{{build}}</b>.</p>
            <p v-if="failed" class="warning">Could not retrieve information about the latest version.</p>
            <table v-if="buildNo">
                <tr>
                    <th>Plugin</th>
                    <th>Main</th>
                    <th>Mirror</th>
                </tr>
                <tr v-for="plugin in plugins" :key="plugin.name">
                    <td>{{ plugin.name }}</td>
                    <td><a :href="plugin.main">Download</a></td>
                    <td><a :href="plugin.mirror">Download</a></td>
                </tr>
            </table>
            <button @click="updateInfo">Update</button>
        </section>
        <h2>Help for EssentialsX</h2>
        <section>
            <router-link to="/Home">Go to EssentialsX Wiki</router-link>
        </section>
    </div>
    </transition>
    `,
    component: {
        data() {
            return {
                buildNo: null,
                failed: null,
                plugins: [],
            };
        },
        computed: {
            build() {
                return this.buildNo ? `b${this.buildNo}` : "unknown";
            },
        },
        methods: {
            updateInfo() {
                axios.get("lastSuccessfulBuild/api/json")
                    .then(response => {
                        this.buildNo = response.data.id;
                        this.plugins = response.data.artifacts.filter(artifact => {
                            return {
                                name: `EssentialsX ${artifact.displayPath.match(/EssentialsX([A-Za-z]*)/)}`,
                                main: `${mainCI}lastSuccessfulBuild/artifact/${artifact.relativePath}`,
                                mirror: `${mirrorCI}lastSuccessfulBuild/artifact/${artifact.relativePath}`,
                            };
                        });
                        this.failed = null;
                    }, error => {
                        if (error.response) {
                            this.failed = error.response.data;
                        } else {
                            this.failed = error.message;
                        }
                    }
                );
            }
        }
    },
}

docute.init({
    url: "https://raw.githubusercontent.com/wiki/EssentialsX/Essentials/",
    home: "https://raw.githubusercontent.com/wiki/EssentialsX/Essentials/Home.md",
    landing,
    nav: [
        {
            title: "Home",
            path: "/",
        },
        {
            title: "Wiki",
            path: "/Home",
        },
        {
            title: "BannerMeta",
            path: "/BannerMeta",
        },
        {
            title: "Command Cooldowns",
            path: "/Command-Cooldowns",
        },
        {
            title: "Common Issues and FAQs",
            path: "/Common-Issues",
        },
        {
            title: "GitHub",
            path: "https://github.com/EssentialsX/Essentials",
        },
        {
            title: "Discord",
            path: "/Discord-Rules",
        }
    ],
    debug: true
});