//Here, we use closures to create only one instance
const Singleton = (() => {
    let instance;

    function createInstance() {
      return { data: "This is the singleton instance" };
    }

    return {
      getInstance: () => {
        if (!instance) {
          instance = createInstance();
        }
        return instance;
      },
    };
  })();

  const instance1 = Singleton.getInstance();
  const instance2 = Singleton.getInstance();

  console.log(instance1 === instance2); // Prints true, the same instance
