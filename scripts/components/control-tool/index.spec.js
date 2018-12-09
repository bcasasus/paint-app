'use strict'

describe('control-tool', () => {
    const tagName = 'SECTION'
    const className = 'control-tool'
    const tool = new ControlTool({ class: `${className}` })

    it('control-tool should be an instanceOf Component', () => {
        expect(tool).to.be.instanceOf(Component)
    })

    it('control-tool element should be an instanceOf HTMLElement', () => {
        expect(tool.element).to.be.instanceOf(HTMLElement)
    })

    it('control-tool tageName should be tool', () => {
        expect(tool.element.tagName).to.equal(tagName)
    })

    it('control-tool element should have the correct className name', () => {
        expect(tool.element.className).to.equal(className)
    })
})