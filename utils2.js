function hellow() {
    return 'hellow';
}
function work() {
    return '今天休息';
}
let count = 1;
setInterval(() => {
    count++
},1000)
import {framework} from "./commonJS.js";

function commonJS() {
    framework()
}
export {hellow, work, count,commonJS}