// functions

// function abcd(): void{
//      console.log("sahil");
// }

// abcd();

// function abcd(name: string, cb: (value: string) => void){
      
// }

// abcd("sahil", (value: string) => {
//     console.log(value)
// })

// function abcdef(name: string, age: number, cb: (arg: string)=> void){
//     cb("hey");
// }


// abcdef("sahil", 24, (arg: string)=>{
//     console.log("abcd");
// })

// optional parameters

//  function abcdef(name: string, age: number, gender?: string){
     
//  }

//  abcdef("sahil", 24, "male");
//  abcdef("halua", 27);

 // default parameters

//  function abcdef(name: string, age: number, gender: string = "not to be disclosed"){
//      console.log(name, age, gender)
//  }

//  abcdef("sahil", 23, "male");
//  abcdef("halua", 27);


//  Rest parameter

function abcdef(...args: number[]){
  console.log(args);
}

abcdef(1,2,3,4,5,6,7,8,9,10);


function freinds(...args: string[]){
     console.log(args);
}


freinds("sahil", "anu", "salman")

// spread operator

let arr1 = [1,2,3,4,5];

let arr2 = [...arr1]; // spreading -> copy of arr from old variable to new variable

console.log(arr2)


// function overload

function abcd(a: string): void;
function abcd(a: string, b: number): number;


function abcd(a: any, b?: any){
       if(typeof a === "string" && b === "undefined"){
        console.log("hey");
       }
       
       if(typeof a === "string" && b === "number"){
           return 123;
       }

       else throw new Error("Something is wrong");
}

abcd("hey");
abcd("abcd", 12);





