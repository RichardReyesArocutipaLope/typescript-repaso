const prinToConsole = (print: boolean = false): Function => {
    if (print) {
        return () => console.log('Hola mundo')
    } else {
        return () => { }
    }
}

const bloquearPrototipo = function (constructor: Function) {
    // Object.seal(constructor)
    // Object.seal(constructor.prototype)
}

function CheckValidPokemonId() {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        const originalMethod = descriptor.value;
        descriptor.value = (id: number) => {
            if (id < 1 || id > 800) {
                return console.error('El id del pokemon debe de estar entre 1 y 800')
            } else {
                return originalMethod(id)
            }
        }
    }
}


function readonly(isWritable: boolean = true): Function {
    return function (target: any, propertyKey: string) {
        const descriptor: PropertyDescriptor = {
            get() {
                console.log(this)
                return 'Richard'
            },
            set(this, val) {
                Object.defineProperty(this, propertyKey, {
                    value: val,
                    writable: !isWritable,
                    enumerable: false
                })
            }
        }

        return descriptor
    }
}


@bloquearPrototipo
@prinToConsole(true)
export class Pokemon {
    @readonly(true)
    public publicApi: string = `https://pokeapi.co/api/v2/pokemon/${2}`

    constructor(
        public name: string,
    ) { }

    @CheckValidPokemonId()
    public savePokemonToDB(id: number) {
        console.log(`Pokemon guardado en BD ${id}`)
    }
}