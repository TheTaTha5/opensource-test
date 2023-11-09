export class fetchingError extends Error {
    constructor(message = "fetcing error status code 500") {
        super(message)
        this.name = 'fetcing error status code 500';
    }
}