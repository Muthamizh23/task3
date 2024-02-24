// How to compare two JSON have the same properties without order
 let obj1={
    name:"person1",
    age:5
};
 let obj2={
    age:5,
    name:"person1"
 };

 console.log(_.isEqual(obj1, obj2));
