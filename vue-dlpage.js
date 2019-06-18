const DownloadPage = {
    template: `
    <section>
        <h2>Download EssentialsX</h2>
        <p class="tip">
            Not sure what the different jars do? See the <a href="http://wiki.mc-ess.net/wiki/Breakdown">breakdown page</a>.
        </p>
        <p v-if="buildNo">The latest version of EssentialsX is <b>{{build}}</b>.</p>
        <p v-if="failed" class="warning">
            Could not retrieve information about the latest version.
            Click <a href="https://ci.ender.zone/job/EssentialsX">here</a> to view builds on Jenkins.
        </p>
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
    `,
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
                    this.plugins = response.data.artifacts.map(artifact => {
                        return {
                            name: `EssentialsX ${artifact.displayPath.match(/EssentialsX([A-Za-z]*)/)[1]}`,
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
    },
    mounted: function () {
        this.updateInfo();
    }
};

window.DownloadPage = DownloadPage;
