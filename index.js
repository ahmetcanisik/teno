const { parcol } = require("parcol");

class Teno {
    #CONFIG = {
        verticalLineIcon: "|",
        seperatorIcon: "-"
    }

    configure(config = this.#CONFIG) {
        this.#CONFIG = {
            ...this.#CONFIG,
            ...config
        }
    }

    log(...lines) {
        const v = `~d ${this.#CONFIG.verticalLineIcon}~`;
        let maxLength = 0;
        let result = "";
        
        // En uzun satır uzunluğunu bul
        lines.forEach(line => {
            parcol.pit(line);
            const length = line.length + 4; // 2 karakter ön ve arka boşluk için
            if (maxLength < length) {
                maxLength = length;
            }
        });

        // Divider ve space değerlerini hesapla
        const divider = `~d ${this.#CONFIG.seperatorIcon}~`.repeat(maxLength);
        const space = ' '.repeat(maxLength - 2);

        // Sonuç metnini oluştur
        result += `\n${divider}\n${v}${space}${v}\n`;
        lines.forEach(line => {
            const r = ' '.repeat((maxLength - (line.length + 2)) / 2);
            result += `${v}${r}${line}${r}${v}\n`;
        });
        result += `${v}${space}${v}\n${divider}\n`;

        console.log(parcol.pit(result));
    }
}

module.exports = {
    teno: new Teno(),
    Teno
};