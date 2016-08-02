class WaLxr extends Lxr {
    async *returnKwd() {
        let x = this
        if (x.char === "r") {
            x = await x.go()
            if (x.char === "e")
                yield RETURN(x)
        }
    }

    async *returnStmn() {
        const kwd = (await this.returnKwd()).next()

        if (isReturn(kwd)) {
            let x = await kwd.x.go()
            while (x.char !== ";") {
                x = await x.go()
            }
        }
    }
}

/*---*/

class WaLxr extends Lxr {
    *ret() {
        yield* this.look("return").space1N().identifier()
    }

    *space1N() {
        this.space1().spaceN()
    }

    *spaceN() {
        const space1 = this.space1()
        yield* space1
        yield* space1.spaceN()
    }

    *space1() {
        const go = this.next()
        if (go.char === " " || go.char === "\t") yield go.Space1
    }

    *identifier() {
        const go = this.next()
        if (go.char === "a" || go.char === "b") {
            const ident = go.Identifier(go.char)
            yield ident
            yield* ident.identifier()
            //TODO how to save current char to yielded rest identifier?
        }
    }
}

/*---*/

class Ret extends Lxr {
    *main() {
        for (let x in this.combo()) yield this.RET(x)
    }

    *combo() {
        yield* this.kwd().space().ident()
    }

    *kwd() {
        yield* this.look("return")
    }
}

class Ident extends Lxr {
    *main() {
        for (let x of this.iN()) yield this.IDENT(x)
    }

    *iN() {
        yield* this.i().n()
    }

    *n() {
        const go = this.i()
        yield* go
        yield* go.n()
    }

    *i() {
        const go = this.next()
        if (go.char === "a" || go.char === "b") {
            yield* go
        }
    }
}

/*---*/

class Ret extends Lxr {
    ident = Ident.mix

    *full() {
        yield* this.kwd().space().ident()
    }
}

class Ident extends Lxr {
    *i() {
        const go = this.next()
        if (go.char === "a" || go.char == "b") yield* go
    }
}
