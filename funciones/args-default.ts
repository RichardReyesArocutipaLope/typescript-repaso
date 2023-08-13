(() => {
    const fullName = (firstName: string, lastName: string = 'efe', upper: boolean = false): string => {
        if (upper) {
            return `${firstName} ${lastName}`.toUpperCase();
        } else {
            return `${firstName} ${lastName}`
        }
    }
    const name = fullName('tony')
    console.log({ name })
})()