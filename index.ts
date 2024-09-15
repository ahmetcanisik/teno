import parcol from "parcol";

interface TenoConfig {
    verticalLineIcon: string,
    seperatorIconTop: string,
    seperatorIconBottom: string
}

export class Teno {
    #CONFIG: TenoConfig;

    constructor(config: TenoConfig) {
        this.#CONFIG = config;
    }

    log(config?: TenoConfig | string, ...lines: any) {
        if (typeof config !== "string" && typeof config?.verticalLineIcon !== "undefined") {
            this.#CONFIG = config || this.#CONFIG;
        } else {
            lines.push(config);
        }

        if (
            lines.length >= 0 &&
            Array.isArray(lines) &&
            typeof lines[0] === "string"
        ) {
            const v = `~d ${this.#CONFIG.verticalLineIcon}~`;
            let maxLength = 0;
            let result = "";

            // Find the longest line length
            lines.forEach((line: any) => {
                parcol.pit(line);
                const length = line.length + 4; // 2 characters for leading and trailing space
                if (maxLength < length) {
                    maxLength = length;
                }
            });

            // Calculate divider and space values
            const dividerTop = `~d ${this.#CONFIG.seperatorIconTop}~`.repeat(maxLength);
            const dividerBottom = `~d ${this.#CONFIG.seperatorIconBottom}~`.repeat(maxLength);
            const space = ' '.repeat(maxLength - 2);

            // Create result text
            result += `\n${dividerTop}\n${v}${space}${v}\n`;
            lines.forEach((line: any) => {
                const r = ' '.repeat((maxLength - (line.length + 2)) / 2);
                result += `${v}${r}${line}${r}${v}\n`;
            });
            result += `${v}${space}${v}\n${dividerBottom}\n`;

            console.log(parcol.pit(result));
        }
    }
}

export default new Teno({
    verticalLineIcon: "⁞",
    seperatorIconTop: "_",
    seperatorIconBottom: "‾"
});