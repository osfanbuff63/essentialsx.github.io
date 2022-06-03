const mainCI = "https://ci.ender.zone/job/EssentialsX/";
const mirrorCI = null; // "https://ci.akpmakes.tech/job/EssentialsX/";
const corsAnywhere = "https://cors-anywhere.herokuapp.com/";

axios.defaults.baseURL = corsAnywhere + mainCI;

//const landing = window.landing;
//const dlPage = window.dlPage;

docute.init({
    url: "https://raw.githubusercontent.com/EssentialsX/wiki/master/",
    home: "https://raw.githubusercontent.com/EssentialsX/wiki/master/_DocuteHome.md",
    landing,
    tocVisibleDepth: 3,
    disableSidebarToggle: true,
    icons: [
        { icon: "edit", label: "Source Wiki", link: "https://github.com/EssentialsX/Essentials/wiki" },
        { icon: "github", label: "EssentialsX on GitHub", link: "https://github.com/EssentialsX/Essentials" }
    ],
    nav: [
        { title: "Home", path: "/" },
        {
            title: "Wiki",
            type: "dropdown",
            items: [
                { title: "Wiki Home", path: "/Home" },
                { type: "sep" },
                { type: "label", title: "Features" },
                { title: "Improvements", path: "/Improvements", source: "Home.md" },
                { title: "BannerMeta", path: "/BannerMeta" },
                { title: "Command Cooldowns", path: "/Command-Cooldowns" }
            ],
        },
        { title: "Common Issues", path: "/Common-Issues" },
        { title: "Issue Tracker", path: "https://github.com/EssentialsX/Essentials/issues" },
        { title: "Discord", path: "/Discord-Rules" },
        { title: "New Website", path: "https://essentialsx.net" }
    ],
    plugins: [
        docuteWikilink,
    ],
    debug: true
});
