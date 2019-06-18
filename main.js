const mainCI = "https://ci.ender.zone/job/EssentialsX/";
const mirrorCI = "https://ci.akpmakes.tech/job/EssentialsX/";
const corsAnywhere = "https://cors-anywhere.herokuapp.com/";

axios.defaults.baseURL = corsAnywhere + mainCI;

//const landing = window.landing;
//const dlPage = window.dlPage;

new Docute({
    target: "#app",
    sourcePath: "https://raw.githubusercontent.com/wiki/EssentialsX/Essentials/",

    //home: "https://raw.githubusercontent.com/wiki/EssentialsX/Essentials/_DocuteHome.md",
    //landing,
    //tocVisibleDepth: 3,
    //disableSidebarToggle: true,
    // icons: [
    //     { icon: "edit", label: "Source Wiki", link: "https://github.com/EssentialsX/Essentials/wiki" },
    //     { icon: "github", label: "EssentialsX on GitHub", link: "https://github.com/EssentialsX/Essentials" }
    // ],
    layout: "narrow",
    nav: [
        { title: "Home", link: "/" },
        {
            title: "Wiki",
            children: [
                { title: "Wiki Home", link: "/Home" },
                { type: "label", title: "Features" },
                { title: "Improvements", link: "/Improvements", source: "Home.md" },
                { title: "BannerMeta", link: "/BannerMeta" },
                { title: "Command Cooldowns", link: "/Command-Cooldowns" }
            ],
        },
        { title: "Common Issues", link: "/Common-Issues" },
        { title: "Issue Tracker", link: "https://github.com/EssentialsX/Essentials/issues" },
        { title: "Discord", link: "/Discord-Rules" }
    ],
    plugins: [
        docuteWikilink,
    ],
    routes: {
        "/": {
            file: "https://raw.githubusercontent.com/wiki/EssentialsX/Essentials/_DocuteHome.md",
        }
    }
});
