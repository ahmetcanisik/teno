import parcol from "parcol";

interface TenoConfig {
    verticalLineIcon: string,
    seperatorIcon: string
}

export class Teno {
    #CONFIG: TenoConfig;

    constructor(config: TenoConfig) {
        this.#CONFIG = config;
    }

    log(...lines: any) {
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
        const divider = `~d ${this.#CONFIG.seperatorIcon}~`.repeat(maxLength);
        const space = ' '.repeat(maxLength - 2);

        // Create result text
        result += `\n${divider}\n${v}${space}${v}\n`;
        lines.forEach((line: any) => {
            const r = ' '.repeat((maxLength - (line.length + 2)) / 2);
            result += `${v}${r}${line}${r}${v}\n`;
        });
        result += `${v}${space}${v}\n${divider}\n`;

        console.log(parcol.pit(result));
    }
}

export default new Teno({
    verticalLineIcon: "|",
    seperatorIcon: "-"
});