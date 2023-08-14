(() => {
    const addNumber = (a: number, b: number): number => a + b;
    const greet = (name: string): string => `Hola ${name}`;
    const saveTheWorld = (): string => `El mundo está salvado`;

    let myFunction: Function;
    myFunction = addNumber
    console.log(myFunction(1, 2))

    let myFunction2: (name: string) => string;
    myFunction2 = greet
    console.log(myFunction2('Richard'))
})()