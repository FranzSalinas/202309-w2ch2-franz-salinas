import { strictEquals } from "../scripts/tools.js";
/* StrictEquals(1, 1);
strictEquals(false, false);
strictEquals(0, -0);
strictEquals(NaN, NaN);
strictEquals(-0, 0); */

console.log(strictEquals(-0, 0));
console.log(strictEquals(undefined, 2));
console.log(strictEquals({}, {}));
