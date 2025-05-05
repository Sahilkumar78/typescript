"use strict";
//  classes and objects
// class Device{
//   name = "lg";
//   price = 12000;
//   category = "digital";
// }
// let d1 = new Device();
// let d2 = new Device();
// class Bottle{
//     radius = 120;
//     price = 100;
//     color = "white";
// }
// let b1= new Bottle();
// constructor
// class BottleMaker{
//       constructor(public name: string, public price: number){
//       }
// }
// let bm1 = new BottleMaker("Milton", 1200)
// class HumanMaker{
//      age =0;
//      constructor(public name: string, public isHandsome: true){
//        this.name= name;
//        this.isHandsome = isHandsome
//      }
// }
// let hm1 = new HumanMaker("sahil", true);
// class Music{
//     constructor(public name: string, public artist: string, public thumbnail: string= "somethumbnail.jpg", public length: number, public free: boolean){
//     }
// }
// let m1 = new Music("let me flow", "sahil kumar", "", 1200, false);
// another cassical method for declaring condtructor like in js
// class Music{
//      public name;
//      public artist;
//      public thumbnail;
//      public length;
//      public free;
//      constructor(name: string, artist: string, thumbnail: string = "somethumbnail.jpg", length: number, free: boolean){
//             this.name = name;
//             this.artist = artist;
//             this.thumbnail = thumbnail;
//             this.length = length;
//             this.free = free;
//      }
// }
// let m2 = new Music("let me flow", "sahil kumar", "", 1200, false )
// Access modifiers -> public, private, protected
// class BottleMaker{
//      constructor(private name: string){
//         this.name= name;
//      }
//      onChange(){
//          this.name = "sahil";
//      }
// }
// let bm1 = new BottleMaker("Milton")
// bm1.onChange()
//extends class
// class BottleMaker{
//     private halua: string = "halua";
//     constructor(public name: string){
//     }
// }
// class MetalBottleMaker extends BottleMaker{
//      constructor(name: string){
//         super(name); // call bottlemaker's constructor
//      }
//      getValue(){
//         console.log(this.name);
//         console.log(this.halua)
//      }
// }
// let bm1= new MetalBottleMaker("bloomberg");
//  bm1.getValue();
// protected
// class BottleMaker{
//     protected name  = "sahil";
// }
// class MetalBottleMaker extends BottleMaker{
//     public material = "metal";
//     changeName(){
//          this.name= "some other name"
//     }
// }
// let bm1 = new MetalBottleMaker();
// // bm1.changeName()
//  bm1.name = "some more names of bottle"
// optional properties
// class User{
//     constructor(public readonly name: string){
//     }
//     changeName(){
//        this.name = "drishti ias"
//     }
// }
// let u1 = new User("Sahil");
// u1.changeName()
// parameters properties
// class Student{
//     public name;
//     public result;
//    constructor(name: string, result: boolean){
//       this.name = name;
//       this.result = result;
//    }
// }
// class Student1{
//      constructor(public name: string, public result: boolean, public age?: number){
//      }
// }
// Getters and Setters
// class User{
//   constructor(public name: string, public age: number){
//   }
//   getName(){
//      return this.name
//   }
//   setName(value: string){
//       this.name = value;
//   }
// }
// let u1 = new User("sahil", 24);
// u1.getName();
// another optimised of getter and setter using get and set
// class User{
//   constructor(public _name: string, public age: number){
//   }
//   get name(){
//      return this._name;
//   }
//   set setmyName(value: string){
//      this._name = value;
//   }
// }
// let u1 = new User("sahil", 24); // interface
// u1.name;
// u1.setmyName = "shail"
// static members
// class Computer{
//     static version= 1.0; 
//     static getRandomNumber(){
//        return Math.random();
//     }
// }
// Abstract classes and Methods
// Abstract class me ek class ki sirf important cheezen likhtey hai aur isko hum ek new class karke likhtey
// class cookingEssentials{
//      constructor(protected gas: number, public gasName: string){
//      }
// }
// class Sabji extends cookingEssentials{
// }
// class Cake extends cookingEssentials{
// }
