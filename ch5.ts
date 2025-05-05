// function logger(a: any){
//   a.    
// }

// logger("sahil");
// logger(22);
// logger(true);
// logger(() => {});

// hum ek function ko use kartey waqt bta saktey hai ki function argument ko kis type se treat kare

// function abcd<T>(a: T){
      
// }

// abcd<string>("sahil");
// abcd<number>(24)

// function abcd<H>(a: H, b: string, c: number){
     
// }

// abcd("halua", "pudi", 24);


// function log<T>(val: T){
//     console.log(val);
// }


// // log("sahil")
// log<number>(12)


// interface: ek object kaisa dikhta hai..uskey liye hum interface banaatey hai

interface Halua<T>{
    name: string;
    age: number;
    key: T;
}

function abcd(obj: Halua<string>){
      
}

abcd({name: "halua", age: 23, key: "placement ki tyaari"})

// Generic classes

class BottleMaker<T>{
     constructor(public key: T){
      
     }
}

let b1 = new BottleMaker("sahil");
let b2 = new BottleMaker(23);

console.log(b1, b2);

// brainstorming concepts
 
function abcd<T>(a: T, b: T): T{
    //    return "hey" as T;
           return <T> "hey";
}

abcd("sahil", "kumar");
