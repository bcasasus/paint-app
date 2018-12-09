'use strict'

describe('control-button', () => {
    const tagName = 'BUTTON'
    const className = 'control-button fas fa-arrow-circle-left fa-3x'
    const button = new ControlButton({ class: 'control-button fas fa-arrow-circle-left fa-3x' })

    it('control-button should be an instanceOf Component', () => {
        expect(button).to.be.instanceOf(Component)
    })

    it('control-button element should be an instanceOf HTMLElement',() => {
        expect(button.element).to.be.instanceOf(HTMLElement)
    })

    
    it('control-button tageName should be button',() => {
        expect(button.element.tagName).to.equal(tagName)
    })

    it('control-button element should have the correct className name',() => {
        expect(button.element.className).to.equal(className)
    })
})