export function lx_(tgt, key, descr) {
    const func = descr.value

    descr.value = function (...args) {
        const waysDeep = this.ways.map(way=> [...way::func(...args)])
        const waysFlat = waysDeep.reduce((l, r)=> [...l, ...r])
        return new this.constructor(waysFlat)
    }
}
