'use strict'

describe('control-size', () => {
    const size = 6
    const lineSize = '6'
    const className = 'control-size'
    const classNameSelected = 'control-size-selected'
    const sizeTool = new ControlTool({ class: 'size-tool' })

    const control = new ControlSize({ class: `${className}`, size: `${size}` }, size)

    it('control-size should be an instanceOf Component', () => {
        expect(control).to.be.instanceOf(Component)
    })

    it('control-size element should be an instanceOf HTMLElement', () => {
        expect(control.element).to.be.instanceOf(HTMLElement)
    })

    it('control-size element should have the correct className ', () => {
        expect(control.element.className).to.equal(className)
    })

    it('selectSize should be a function', () => {
        expect(control.selectSize).to.be.an.instanceof(Function)
    })

    it('selectSize should set size correctly', () => {
        sizeTool.add(control)
        expect(control.element.className).to.equal(className)

        control.selectSize(lineSize)

        expect(control.element.className).to.equal(classNameSelected)
        expect(control.element.className).not.to.equal(className)
    })
})