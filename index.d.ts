interface TenoConfig {
    verticalLineIcon?: string;
    seperatorIconTop?: string;
    seperatorIconBottom?: string;
    colors?: boolean;
    console?: boolean;
}
export declare class Teno {
    #private;
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
    constructor(config?: TenoConfig);
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
    draw(config?: TenoConfig | string, ...lines: any): string | undefined;
    get get_config(): TenoConfig;
}
declare const _default: Teno;
export default _default;
