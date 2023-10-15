//The facade allows the subsystems to be used separately
class SubsystemA {
    operationA() {
      return "Subsystem A operation";
    }
  }

  class SubsystemB {
    operationB() {
      return "Subsystem B operation";
    }
  }

  class Facade {
    constructor() {
      this.subsystemA = new SubsystemA();
      this.subsystemB = new SubsystemB();
    }

    operationA() {
      return this.subsystemA.operationA();
    }

    operationB() {
      return this.subsystemB.operationB();
    }

    operationAB() {
      return this.operationA() + " | " + this.operationB();
    }
  }

  const facade = new Facade();
  console.log(facade.operationA());
  console.log(facade.operationB());
  console.log(facade.operationAB());