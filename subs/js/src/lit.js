class FixLit extends Lxr {
    *full() {
        yield* this.eatN("null")
        yield* this.eatN("true")
        yield* this.eatN("false")
    }
}

class ArrLit extends Lxr {
    *full() {
        yield* this.eat("[").list.oI().eat("]")
    }

    *list() {
        yield* this.item.oI().eat(",").list.oI()
    }

    *item() {
        yield* this.eatN("...").expr()
        yield* this.expr()
    }
}

class ObjLit extends Lxr {
    *full() {
        yield* this.eat("{").list.oI().eat("}")
    }

    *list() {
        yield* this.item()
    }
}
