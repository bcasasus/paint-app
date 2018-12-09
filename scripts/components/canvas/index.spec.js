'use strict'

describe('canvas', () => {
    const className = 'canvas'
    const width = 800
    const height = 600

    const canvas = new Canvas(className, width, height)
    
    it('canvas should be an instanceOf Component', () => {
        expect(canvas).to.be.instanceOf(Component)
    })

    it('canvas element should be an instanceOf HTMLElement',() => {
        expect(canvas.element).to.be.instanceOf(HTMLElement)
    })

    it('canvas element should have the correct className name',() => {
        expect(canvas.element.className).to.equal(className)
    })

    it('canvas element should have the correct width',() => {
        expect(canvas.element.width).to.equal(width)
    })

    it('canvas element should have the correct height',() => {
        expect(canvas.element.height).to.equal(height)
    })

    it('draw should be a function',() => {
        expect(canvas.draw).to.be.an.instanceof(Function)
    })

    it('saveLine should be a function',() => {
        expect(canvas.saveLine).to.be.an.instanceof(Function)
    })

    it('drawCurrentLines should be a function',() => {
        expect(canvas.drawCurrentLines).to.be.an.instanceof(Function)
    })

    it('reDo should be a function',() => {
        expect(canvas.reDo).to.be.an.instanceof(Function)
    })

    it('unDo should be a function',() => {
        expect(canvas.unDo).to.be.an.instanceof(Function)
    })

    it('clearScreen should be a function',() => {
        expect(canvas.clearScreen).to.be.an.instanceof(Function)
    })
})