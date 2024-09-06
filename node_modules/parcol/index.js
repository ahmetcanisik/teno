/**
 * usages and examples
 * @usage                   = ~(code) (your_text)~;
 * @example                 = ~c This message will appear in cyan color.~
 * 
 * All ansi-colors color codes are available in the list below.
 * @color bc                = black
 * @color bl                = blue
 * @color c                 = cyan
 * @color gy                = gray
 * @color g                 = green
 * @color m                 = magenta
 * @color r                 = red
 * @color y                 = yellow
 * @color w                 = white
 *  
 * @bright_color bcb        = blackBrigt
 * @bright_color blb        = blueBright
 * @bright_color cb         = cyanBright
 * @bright_color gb         = greenBright
 * @bright_color mb         = magentaBright
 * @bright_color rb         = redBright
 * @bright_color yb         = yellowBright
 * @bright_color wb         = whiteBright
 * 
 * @bg_color bgbc           = bgBlack
 * @bg_color bgbl           = bgBlue
 * @bg_color bgc            = bgCyan
 * @bg_color bgg            = bgGreen
 * @bg_color bgm            = bgMagenta
 * @bg_color bgr            = bgRed
 * @bg_color bgy            = bgYellow
 * @bg_color bgw            = bgWhite
 * 
 * 
 * @bright_bg_color bbcb    = bgBlackBright
 * @bright_bg_color bblb    = bgBlueBright
 * @bright_bg_color bcb     = bgCyanBright
 * @bright_bg_color bgb     = bgGreenBright
 * @bright_bg_color bmb     = bgMagentaBright
 * @bright_bg_color brb     = bgRedBright
 * @bright_bg_color byb     = bgYellowBright
 * @bright_bg_color bwb     = bgWhiteBright
 * 
 * 
 * @mod b                   = bold
 * @mod d                   = dim
 * @mod h                   = hidden
 * @mod in                  = inverse
 * @mod it                  = italic
 * @mod rs                  = reset
 * @mod u                   = underline
 * 
 * @mod l                   = hyperlink
 */

// require https://npmjs.com/package/ansi-colors
const c = require("ansi-colors");

// require https://npmjs.com/package/hyperlinker
const hyperlinker = require("hyperlinker");

// Colors
const COLORS = [
    { id: "bc", method: (m) => c.black(m) },
    { id: "bl", method: (m) => c.blue(m) },
    { id: "c", method: (m) => c.cyan(m) },
    { id: "gy", method: (m) => c.gray(m) },
    { id: "g", method: (m) => c.green(m) },
    { id: "m", method: (m) => c.magenta(m) },
    { id: "r", method: (m) => c.red(m) },
    { id: "y", method: (m) => c.yellow(m) },
    { id: "w", method: (m) => c.white(m) },
]

// Bright Colors
const BRIGHT_COLORS = [
    { id: "bcb", method: (m) => c.blackBright(m) },
    { id: "blb", method: (m) => c.blueBright(m) },
    { id: "cb", method: (m) => c.cyanBright(m) },
    { id: "gb", method: (m) => c.greenBright(m) },
    { id: "mb", method: (m) => c.magentaBright(m) },
    { id: "rb", method: (m) => c.redBright(m) },
    { id: "yb", method: (m) => c.yellowBright(m) },
    { id: "wb", method: (m) => c.whiteBright(m) },
];


// Background colors
const BG_COLORS = [
    { id: "bgbc", method: (m) => c.bgBlack(m) },
    { id: "bgbl", method: (m) => c.bgBlue(m) },
    { id: "bgc", method: (m) => c.bgCyan(m) },
    { id: "bgg", method: (m) => c.bgGreen(m) },
    { id: "bgm", method: (m) => c.bgMagenta(m) },
    { id: "bgr", method: (m) => c.bgRed(m) },
    { id: "bgy", method: (m) => c.bgYellow(m) },
    { id: "bgw", method: (m) => c.bgWhite(m) },
];

// Bright background colors
const BG_BRIGHT_COLORS = [
    { id: "bbcb", method: (m) => c.bgBlackBright(m) },
    { id: "bblb", method: (m) => c.bgBlueBright(m) },
    { id: "bcb", method: (m) => c.bgCyanBright(m) },
    { id: "bgb", method: (m) => c.bgGreenBright(m) },
    { id: "bmb", method: (m) => c.bgMagentaBright(m) },
    { id: "brb", method: (m) => c.bgRedBright(m) },
    { id: "byb", method: (m) => c.bgYellowBright(m) },
    { id: "bwb", method: (m) => c.bgWhiteBright(m) },
];


// Modifiers
const MODS = [
    { id: "b", method: (m) => c.bold(m) },
    { id: "d", method: (m) => c.dim(m) },
    { id: "h", method: (m) => c.hidden(m) },
    { id: "in", method: (m) => c.inverse(m) },
    { id: "it", method: (m) => c.italic(m) },
    { id: "rs", method: (m) => c.reset(m) },
    { id: "u", method: (m) => c.underline(m) },
    { id: "l", method: (text) => {
        const [hyperlink, link] = text.split('->').map(part => part.trim());
        return hyperlinker(hyperlink, link);
    }}
];

class Parcol {
    /**
     * @param {string} message - The message to parse and apply formatting.
     * @returns {string} - The formatted message.
     */
    pit(...messages) {
        if (!messages) {
            return messages[0];
        }

        const message = messages.join(" ");

        // Regular expression to match the formatting pattern
        const pattern = /~([^~]+?)\s(.*?)~/g;
        let result = message;
        let match;

        // Find and process each format message
        while ((match = pattern.exec(message)) !== null) {
            const [fullMatch, mods, text] = match;

            // Separate modes with commas and find corresponding methods
            const modList = mods.split(',').map(mod => mod.trim());
            const modMethods = [
                ...COLORS,
                ...BRIGHT_COLORS,
                ...BG_COLORS,
                ...BG_BRIGHT_COLORS,
                ...MODS
            ].filter(item => modList.includes(item.id))
             .map(item => item.method);

            // Apply methods to text
            let processedText = text;
            for (const modMethod of modMethods) {
                processedText = modMethod(processedText);
            }

            // Replace the original match with the processed text
            result = result.replace(fullMatch, processedText);
        }

        return result;
    }
}

module.exports = {
    parcol: new Parcol(),
    Parcol
};