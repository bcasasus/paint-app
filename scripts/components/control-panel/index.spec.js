'use strict'

describe('control-panel', () => {
    const tagName = 'SECTION'
    const className = 'control-panel'
    const panel = new ControlPanel({ class: `${className}` })

    it('control-panel should be an instanceOf Component', () => {
        expect(panel).to.be.instanceOf(Component)
    })

    it('control-panel element should be an instanceOf HTMLElement',() => {
        expect(panel.element).to.be.instanceOf(HTMLElement)
    })

    
    it('control-panel tageName should be panel',() => {
        expect(panel.element.tagName).to.equal(tagName)
    })

    it('control-panel element should have the correct className name',() => {
        expect(panel.element.className).to.equal(className)
    })
})