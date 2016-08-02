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
        if (go.char === " " || go.char === "\t") yield this.Space1
    }

    *identifier() {
        const go = this.next()
        if (go.char === "a" || go.char === "b") {
            yield* go.identifier()
            //TODO how to save current char to yielded rest identifier?
        }
    }
}
