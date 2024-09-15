import teno, { Teno } from './index.js';
const test = teno.draw("test on the log");
console.log(test);
teno.draw({ console: true }, "test");
teno.draw({ console: true, colors: true }, "~b bold text~");
teno.draw({ console: true, colors: false, verticalLineIcon: "|", seperatorIconBottom: "" }, "test");
console.log(teno.get_config);
const tenog = new Teno({
    console: true
});
tenog.draw("test tenologhy");
tenog.draw("this is a not reset config!");
const save_teno = tenog.draw({ console: false, colors: true }, "~gb,b asdf~");
console.log(save_teno);
console.log(save_teno);
