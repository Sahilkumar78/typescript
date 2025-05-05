// miscellaneous topics of typescript
// import {addPayment, getDetails} from './payment'
// addPayment(24)
// import Payment from './payment'
// let p1 = new Payment(12);
// let p2 = new Payment(122);
// console.log(p1, p2);
// type assertion
//  let a: any = 12;
// //  (a as string);
// (<number>a)
// type casting
// let a = Number("12");
// console.log(a);
// console.log(typeof a)
// Non-null assertion operator
// let a: null | undefined | string;
// a = "hey"
// a! -> gives guarantee that it won't be null and undefined
// a -> it doesn't give guarantee
// type guards -> it is type narrowing
function abcd(arg) {
    if (typeof arg === "number") {
        return "number";
    }
    else if (typeof arg === "string") {
        return "string";
    }
    else {
        throw new Error("bhai kya kar raha hai");
    }
}
console.log(abcd(12));
console.log(abcd("hello"));
abcd(true);
// instanceof in type guards
var TvKaRemote = /** @class */ (function () {
    function TvKaRemote() {
    }
    TvKaRemote.prototype.switchTvOff = function () {
        console.log("switching off tv");
    };
    return TvKaRemote;
}());
var CarKaRemote = /** @class */ (function () {
    function CarKaRemote() {
    }
    CarKaRemote.prototype.switchCarOff = function () {
        console.log("switching off car");
    };
    return CarKaRemote;
}());
var tv = new TvKaRemote();
var car = new CarKaRemote();
function switchOffKaro(device) {
    if (device instanceof TvKaRemote) {
        device.switchTvOff();
    }
    else if (device instanceof CarKaRemote) {
        device.switchCarOff();
    }
}
switchOffKaro();
