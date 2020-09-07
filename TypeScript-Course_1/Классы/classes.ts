class Typescript {
    version: string

    constructor(version: string) {
        this.version = version
    }

    info(name: string) {
        return `[${name}]: TypeScript version is ${this.version}`
    }
}

class Car {
    readonly model: string
    readonly numberOfWheels: number = 4
    readonly using: boolean = true

    constructor(theModel: string, theNumberOfWheels: number, theUsing: boolean) {
        this.model = theModel
        this.numberOfWheels = theNumberOfWheels
        this.using = theUsing
    }
}

class Car2 {
    readonly numberOfWheels: number = 4

    constructor(readonly model: string) { }
}