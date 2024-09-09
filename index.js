var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Teno_CONFIG;
import parcol from "parcol";
export class Teno {
    constructor(config) {
        _Teno_CONFIG.set(this, void 0);
        __classPrivateFieldSet(this, _Teno_CONFIG, config, "f");
    }
    log(...lines) {
        const v = `~d ${__classPrivateFieldGet(this, _Teno_CONFIG, "f").verticalLineIcon}~`;
        let maxLength = 0;
        let result = "";
        // Find the longest line length
        lines.forEach((line) => {
            parcol.pit(line);
            const length = line.length + 4; // 2 characters for leading and trailing space
            if (maxLength < length) {
                maxLength = length;
            }
        });
        // Calculate divider and space values
        const divider = `~d ${__classPrivateFieldGet(this, _Teno_CONFIG, "f").seperatorIcon}~`.repeat(maxLength);
        const space = ' '.repeat(maxLength - 2);
        // Create result text
        result += `\n${divider}\n${v}${space}${v}\n`;
        lines.forEach((line) => {
            const r = ' '.repeat((maxLength - (line.length + 2)) / 2);
            result += `${v}${r}${line}${r}${v}\n`;
        });
        result += `${v}${space}${v}\n${divider}\n`;
        console.log(parcol.pit(result));
    }
}
_Teno_CONFIG = new WeakMap();
export default new Teno({
    verticalLineIcon: "|",
    seperatorIcon: "-"
});
