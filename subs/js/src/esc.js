class Esc extends Lxr {
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
}
