class Animal{
    width: number = 255

    running(animal: string){
        console.log(`${animal} runnning`);
    }
}

class Dog extends Animal{
    run(){
        console.log("go run");
    }
}

class Fish extends Animal{
    swimming(){
        console.log("go swimming");
    }
}

const dog = new Dog()
dog.running("dog")
dog.width = 120
console.log(dog.width);


const cat = new Fish()
cat.width = 50
cat.running("fish")
console.log(cat.width);
