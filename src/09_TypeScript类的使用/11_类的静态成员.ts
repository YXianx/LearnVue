class Person{
    public static age: number = 24;
    public static printInfo(){
        console.log(`{age:${this.age}}`);
    }
}

console.log(Person.age);
Person.printInfo()

export {}