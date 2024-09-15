interface TenoConfig {
    verticalLineIcon: string;
    seperatorIconTop: string;
    seperatorIconBottom: string;
}
export declare class Teno {
    #private;
    constructor(config: TenoConfig);
    log(config?: TenoConfig | string, ...lines: any): void;
}
declare const _default: Teno;
export default _default;
