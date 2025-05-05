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

function abcd(arg: string | number | any ){
       if(typeof arg === "number"){
          return "number";
       }else if (typeof arg === "string"){
          return "string";
       }else{
          throw new Error("bhai kya kar raha hai");
       }
}

console.log(abcd(12));
console.log(abcd("hello"));

abcd(true);

// instanceof in type guards

class  TvKaRemote{
    switchTvOff(){
          console.log("switching off tv");
    }
}

class CarKaRemote{
     switchCarOff(){
         console.log("switching off car");
     }
}

const tv = new TvKaRemote();
const car = new CarKaRemote();

function switchOffKaro(device: TvKaRemote | CarKaRemote){
       if(device instanceof TvKaRemote){
          device.switchTvOff();
       }else if(device instanceof CarKaRemote){
         device.switchCarOff();
       }
}

switchOffKaro();


 