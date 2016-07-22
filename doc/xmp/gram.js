import {Lxr, LX} from 'versator'

const lxr = new Lxr({
  main: ()=> LX`${lxr.shebang}`,
  shebang: ()=> LX`#!${lxr.any}`,
})

/*---*/

class WaLxr extends Lxr {
  async get(lng) {
    return file.readChars(this.file, this.pos, lng)
  }

  async *look(x) {
    const txt = async this.get(x.length)
    if (x === txt) yield new WaLxr(this.pos + x.length)
  }

  async *any() {
    const txt = async this.get(1)
    if (txt) yield new WaLxr(this.pos + 1)
    //TODO this doesn't allow chaining: yield vs. return; generator vs. iterator
  }

  async *bTxt() {
    yield* await this.look("a").look("b")
    yield* await this.any().look("b")
  }

  async *metas() {
    yield* await this.bTxt().spc().bTxt(),
  }
}
