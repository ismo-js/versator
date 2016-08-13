class Expr extends Lxr {
    *full() {
        yield* this.eatN("this")
        yield* this.ident()
        yield* this.lit()
    }
}
