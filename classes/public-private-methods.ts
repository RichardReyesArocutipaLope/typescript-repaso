(() => {
    class Avenger {
        static avgAge: number = 35
        static getAvgAge() {
            return this.name;
        }

        constructor(
            private name: string,
            public team: string,
            public realName?: string
        ) { }

        public bio() {
            return `${this.name} (${this.team})`
        }
        private bio2() {
            return `${this.name} (${this.team})`
        }
    }

    const antman: Avenger = new Avenger('Richard', 'Capitan');
    console.log(antman)
    console.log(antman.bio())
    console.log(Avenger.getAvgAge())
})()