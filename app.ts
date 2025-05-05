// let a = 3;

// let arr =[1,2,3,4, {name: "sahil"}];
// let arr:number[] = [1,2,3,4]  

//tuples
let arr:[string,number] =  ["sahil", 22];

//enums

enum UserRoles{
    ADMIN= "admin",
    GUEST= "guest",
    SUPER_ADMIN = "super_admin"
}

// UserRoles.ADMIN;

enum StatusCodes{
    ABANDONED = "abandoned status code 500",
    NOTFOUND = "not found status code 404"
}

StatusCodes.NOTFOUND

// any

// let a:number ;

// interface

// interface User{
//     name: string,
//     email: string,
//     password: string
// }

// function getDataOfUser(obj: User){
    
// }

// getDataOfUser({name: "sahil", email: "sahilabcd", password: ""})


const obj = {
    name: "sahil",
    email: "sahilabcd@gmail.com",
    password: "1234",

}

// interface of this above object -> obj

// interface User{
//     name: string,
//     email: string,
//     password:string,
//     gender?: string
// }

// function abcd(obj: User){
//      obj.gender = 'male'
// }

// abcd({name: "sahil", email: "sahilancls", password: "kjvnskclk"})



// extending interface

// interface User{
//     name: string;
//     email: string;
//     password:string;
// }

// interface Admin extends User{ // interface is shakal
//     admin: boolean;
// }


// function abcd(obj: Admin){
//      obj.admin
// }


// 2 same interface apas me merge ho jaatey hai

// interface Abcd{
//     name: string
// }

// interface Abcd{
//     email: string
// }


// function abcd(obj: Abcd){
//      obj.name
// }


// type aliases -> khudka tyoe bnaao
//  type shankya = number;

//  let a: shankya

//  type value = string | number | null;

//  let b: value;

// //  eg:
//  type arg = number | string | null;
//   function ans(obj: arg){
     
//   }

//   ans("sahil")
 

// union and intersection types

// type User = {
//     name: string,
//     email: string,
// }

// type Admin  = User & {
//      getdetails(user: string) :void
// }

// function abcd(a: Admin){
//     a.getdetails
// }

//  difference between the type and interference

//  type a = string; // type once defined wont change for next time for same variable-> re declaration
//  type a = number;
