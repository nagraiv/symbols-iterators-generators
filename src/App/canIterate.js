export default function canIterate(obj) {
    // try {
    //     const iter = obj[Symbol.iterator]();
    //     console.log(iter);
    //     return true;
    // } catch (e) {
    //     console.log(e);
    //     return false;
    // }
    return !!obj?.[Symbol.iterator];
}