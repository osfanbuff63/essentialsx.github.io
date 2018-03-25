const re = /\[\[([\w\s]+)\]\]/g; // [[SupaHam]]
const rePiped = /\[\[([\w\s]+)(?:\|)(\w+)\]\]/g; // [[Pineapple|MD678685]]

const replacement = `<a class="router-link" href="#/$uri">$text</a>`;

function docuteWikilink(context) {
    context.beforeParse(content => {
        const parsed = content.replace(re, (match, p1) =>
                replacement.replace("$text", p1).replace("$uri", p1.replace(" ", "-")))
            .replace(rePiped, (match, p1, p2) =>
                replacement.replace("$text", p1).replace("$uri", p2));
        
        return parsed;
    });
};
