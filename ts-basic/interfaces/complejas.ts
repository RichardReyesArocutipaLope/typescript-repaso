(() => {
    interface Client {
        name: string,
        age?: number,
        address: Address
        getFullAddress: (id: string) => string
    }
    interface Address {
        id: number,
        zip: string,
        city: string,
    }

    const client: Client = {
        name: 'Richard',
        age: 23,
        address: {
            id: 125,
            zip: 'abc',
            city: 'Tacna'
        },
        getFullAddress(id) {
            return this.address.city
        }
    }
})()