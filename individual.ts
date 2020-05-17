
export class Individual {
  greeting: string;
  constructor(message: string) {
    this.greeting = message;
  }

  greet() {
    return "Hello, " + this.greeting;
  }

  rotateMutate(indiv: Individual) {
    
  }
}