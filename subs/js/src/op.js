static ops = [
    new Lvl(["unary"], [
        OP`delete${}`,
        OP`void${}`,
        OP`typeof${}`,
        OP`++${}`,
        OP`--${}`,
        OP`+${}`,
        OP`-${}`,
        OP`~${}`,
        OP`!${}`,
    ]),
    new Lvl(["mult"], [
        OP`${}*${}`,
        OP`${}/${}`,
        OP`${}%${}`,
    ]),
    new Lvl(["add"], [
        OP`${}+${}`,
        OP`${}-${}`,
    ]),
    new Lvl(["shift"], [
        OP`${}<<${}`,
        OP`${}>>${}`,
        OP`${}>>>${}`,
    ]),
    new Lvl(["rel"], [
        OP`${}<${}`,
        OP`${}>${}`,
        OP`${}<=${}`,
        OP`${}>=${}`,
        OP`${}instanceof${}`,
        OP`${}in${}`,
    ]),
    new Lvl(["eq"], [
        OP`${}==${}`,
        OP`${}!=${}`,
        OP`${}===${}`,
        OP`${}!==${}`,
    ]),
    new Lvl(["bit", "and"], [
        OP`${}&${}`,
    ]),
    new Lvl(["bit", "xor"], [
        OP`${}^${}`,
    ]),
    new Lvl(["bit", "or"], [
        OP`${}|${}`,
    ]),
    new Lvl(["log", "and"], [
        OP`${}&&${}`,
    ]),
    new Lvl(["log", "or"], [
        OP`${}||${}`,
    ]),
    new Lvl(["cond"], [
        OP`${}?${}:${}`,
    ]),
    new Lvl(["outer"], [
        
    ])
]

class Op extends Lxr {


    *full() {
        yield* this.op().full()
    }

    *op() {
        for (let op of Unary.ops) yield* this.eatN(op)
    }
}
