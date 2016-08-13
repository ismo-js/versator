const kwds = [
    "await",
    "break",
    "case",
    "catch",
    "class",
    "const",
    "continue",
    "debugger",
    "default",
    "delete",
    "do",
    "else",
    "enum",
    "export",
    "extends",
    "finally",
    "for",
    "function",
    "if",
    "import",
    "in",
    "instanceof",
    "new",
    "return",
    "super",
    "switch",
    "this",
    "throw",
    "try",
    "typeof",
    "var"
    "void",
    "while",
    "with",
    "yield",
]

const litwds = [
    "null",
    "true",
    "false",
]

const expr = [
    "this",
    ident,
    lit,
    arrLit,
    objLit,
    funcExpr,
    classExpr,
    genExpr,
    regexLit,
    tempLit,
    paramList,
]

const inRange = (low, mid, hi)=> low <= mid && mid <= hi
const exists = (sbj, e)=> -1 < sbj.indexOf(e)
const code2Str = String.fromCharCode

class Char {
    static codes = {
        dollar: 0x24,
        lowLine: 0x5F,
        zero: 0x30,
        nine: 0x39,
        capA: 0x41,
        capF: 0x46,
        capZ: 0x5A,
        smallA: 0x61,
        smallF: 0x66,
        smallZ: 0x7A,
        backslash: 0x5C,
        quote1: 0x27,
        quote2: 0x22,
    }

    constructor(prim) {
        Object.assign(this, {prim})
    }

    toString() {
        return this.prim
    }

    get str() {
        return this.prim
    }

    get code() {
        return this.prim.charCodeAt(0)
    }

    get swag() {
        return Char.codes.dollar === this.code || Char.codes.lowLine === this.code
    }

    get dig() {
        return inRange(Char.codes.zero, this.code, Char.codes.nine)
    }

    get hex() {
        return this.dig
            || inRange(Char.codes.capA, this.code, Char.codes.capF)
            || inRange(Char.codes.smallA, this.code, Char.codes.smallF)
    }

    get cap() {
        return inRange(Char.codes.capA, this.code, Char.codes.capZ)
    }

    get small() {
        return inRange(Char.codes.smallA, this.code, Char.codes.smallZ)
    }
}

const esc1Chars =  [
    code2Str(Char.codes.quote1),
    code2Str(Char.codes.quote2),
    code2Str(Char.codes.backslash),
    "b",
    "f",
    "n",
    "r",
    "t",
    "v",
]

class Ident extends Lxr {
    *full() {
        yield* this.start().cont.oN()
    }

    *start() {
        yield* this.esc()
        if (this.swag || this.cap || this.small) yield this.go
    }

    *cont() {
        yield* this.esc()
        if (this.swag || this.dig || this.cap || this.small) yield this.go
    }

    *esc() {
        yield* this.eat(Char.codes.backslash).escIn()
    }

    *escIn() {
        yield* this.escIn1()
        yield* this.escInX()
    }

    *escIn1() {
        if (exists(esc1Chars, this.str)) yield this.go
    }

    *escInX() {
        const go = this.eat("x")
        if (go.hex && go.go.hex) yield go.go.go
    }

    *eat(char) {
        if ("number" === typeof char) char = code2Str(char)
        if (char === this.str) yield this.go
    }
}
