Title : Differences between type aliases and interface in typescript.

Introduction : 
Type aliases and interface are uses to define data structure. they are likely similar but the functionality, the working process are not same.

Body paragraph:
We actually use interface generally but in some case typescript suggest to use type alias. To create a interface use the keyword interface, on the other hand to create a type alias we use type keyword. we can also use the combine, interface doesn't allow assign to or "=" assignment operator. but type alias allow assignment operator to assign the value.

for example 
*type alias
--------------
type userProperty = {
  name: string;
  age: number;
  badges: number[];
  action: () => void;
};

const user3: userProperty = {
  name: "Abdullah gazi",
  age: 26,
  badges: [1, 3, 5],
  action: () => console.log("typescript", "python"),  
};

*interface
----------
interface Student {
  name: string;
  age: number;
}

const student1: Student = {
  name: "Abdullah Gazi",
  age: 26
};

Conclusion:
Interface is beeter when defining objects or working with classes because it is eays to use and extend, type is good when we work for unions, tuples.They both are useful in depends on the requirement