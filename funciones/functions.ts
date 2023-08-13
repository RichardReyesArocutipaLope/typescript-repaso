(() => {
    const hero: string = 'Flash'
    function returnName(): string {
        return hero;
    }
    const getSum = (): number => {
        return 5 + 5;
    }
    const heroName = returnName();
})()