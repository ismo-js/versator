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
}
