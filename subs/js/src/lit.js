class FixLit extends Lxr {
    lits = [
        "null",
        "true",
        "false",
    ]

    *full() {
        for (let lit of FixLit.lits) yield* this.eatN(lit)
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
