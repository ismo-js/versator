class Lxr {
    [Symbol.iterator] = ()=> this.ways

    constructor(ways) {
        this.ways = [...ways]
    }

    *eat(char) {
        if ("number" === typeof char) char = code2Str(char)
        if (char === this.str) yield this.go
    }
}
