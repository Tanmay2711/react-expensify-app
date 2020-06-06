
export const square = (x) => x * x;
export const add = (a,b) => a + b;
const subtract = (a,b) => a-b;

//1 way
export default (a,b) => a-b;

//2 way
//export default subtract;

//3 way
//export {square,add, subtract as default}