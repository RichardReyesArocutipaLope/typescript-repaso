(() => {
    const fullName = (firstName?: string, lastName?: string): string => {
        return `${firstName} ${lastName || 'no lastname'}`
    }
    const name = fullName('tony')
    console.log({ name })
})()