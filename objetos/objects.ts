(() => {
    type Hero = {
        name: string,
        age?: number,
        powers: string[],
        getName?: () => string
    }

    let flash: Hero = {
        name: 'Barry allen',
        age: 23,
        powers: ['Super velocidad', 'Viajar en el tiempo'],
        getName() {
            return this.name
        }
    }
})()