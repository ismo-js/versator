class Lxr {
    constructor(ways) {
        this.ways = ways.ways || ways
    }

    *eat(char) {
        if ("number" === typeof char) char = code2Str(char)
        if (char === this.str) yield this.go
    }
}
