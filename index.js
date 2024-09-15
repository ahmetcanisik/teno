import parcol from "parcol";
const DEFAULT_CONFIG = {
    verticalLineIcon: "⁞",
    seperatorIconTop: "_",
    seperatorIconBottom: "‾",
    colors: false,
    console: false,
};
export class Teno {
    #CONFIG = DEFAULT_CONFIG;
    /**
     * @description You can change the configuration definitions according to your needs during installation.
     * @param config
     * @example İşte tam bir Kullanım örneği;
     ```
     import { Teno } from 'teno';

     const teno = new Teno({
        verticalLineIcon: "⁞",
        seperatorIconTop: "_",
        seperatorIconBottom: "‾",
        colors: true,
        console: true
     });

     teno.log("This is my first tenology");
     ```
     */
    constructor(config = this.#CONFIG) {
        this.#CONFIG = {
            ...this.#CONFIG,
            ...config
        };
    }
    /**
     * @description
     * @param config optional
     * @param lines
     * @returns string
     * @example
     ```
     import teno from 'teno';
     teno.log("Update Available 0.0.1 -> 0.0.2");
     ```
     */
    draw(config, ...lines) {
        let CONFIG = this.#CONFIG;
        // If the user has specified his own configuration, we update the baseconfig value.
        // But if the user has not specified his own configuration, but has specified a string, then we include it in the lines.
        if (config && typeof config === "object") {
            CONFIG = {
                ...CONFIG,
                ...config
            };
        }
        if (typeof config !== "object" && typeof config === "string") {
            lines.push(config);
        }
        // we check the existence of user-supplied texts
        // If the user has provided text input, we prepare it in a format suitable for technology.
        if (lines.length >= 0 &&
            Array.isArray(lines) &&
            typeof lines[0] === "string") {
            const v = CONFIG.colors ? `~d ${CONFIG.verticalLineIcon}~` : `${CONFIG.verticalLineIcon}`;
            let maxLength = 0;
            let result = "";
            // Find the longest line length
            lines.forEach((line) => {
                const length = line.length + 4; // 2 characters for leading and trailing space
                if (maxLength < length) {
                    maxLength = length;
                }
            });
            // Calculate divider and space values
            let dividerTop = CONFIG.colors ? parcol.pit(`~d ${CONFIG.seperatorIconTop}~`) : `${CONFIG.seperatorIconTop}`, dividerBottom = CONFIG.colors ? parcol.pit(`~d ${CONFIG.seperatorIconBottom}~`) : `${CONFIG.seperatorIconBottom}`;
            dividerTop = dividerTop.repeat(maxLength);
            dividerBottom = dividerBottom.repeat(maxLength);
            const space = ' '.repeat(maxLength - 2);
            // Create result text
            result += `\n${dividerTop}\n${v}${space}${v}\n`;
            lines.forEach((line) => {
                const r = ' '.repeat((maxLength - (line.length + 2)) / 2);
                result += `${v}${r}${line}${r}${v}\n`;
            });
            result += `${v}${space}${v}\n${dividerBottom}\n`;
            result = CONFIG.colors ? parcol.pit(result) : result;
            if (CONFIG.console) {
                console.log(result);
            }
            return result;
        }
    }
    get get_config() {
        return this.#CONFIG;
    }
}
// We export ready-made teno.
export default new Teno();
