'use strict'

describe('color-button', () => {
    const orangeColor = 'orange'
    const className = 'color-button'
    const classNameSelected = 'color-button-selected'
    const colorTool = new ControlTool({ class:'color-tool'})
    const orangeButton = new ColorButton(orangeColor)

    it('color-button should be an instanceOf Component', () => {
        expect(orangeButton).to.be.instanceOf(Component)
    })

    it('color-button should be an instanceOf ControlButton', () => {
        expect(orangeButton).to.be.instanceOf(ControlButton)
    })

    it('color-button element should be an instanceOf HTMLElement', () => {
        expect(orangeButton.element).to.be.instanceOf(HTMLElement)
    })

    it('color-button element should have the correct className ', () => {
        expect(orangeButton.element.className).to.equal(className)
    })

    it('color-button element should not have the selected className ', () => {
        expect(orangeButton.element.style.backgroundColor).not.to.equal(classNameSelected)
    })

    it('color-button element should have the correct id', () => {
        expect(orangeButton.element.id).to.equal(orangeColor)
    })

    it('color-button element should have the color as background-color ', () => {
        expect(orangeButton.element.style.backgroundColor).to.equal(orangeColor)
    })

    it('selectColor should be a function', () => {
        expect(orangeButton.selectColor).to.be.an.instanceof(Function)
    })

    it('selectColor should set color correctly', () => {
        colorTool.add(orangeButton)

        orangeButton.selectColor(orangeColor)

        expect(orangeButton.element.className).to.equal(classNameSelected)
        expect(orangeButton.element.className).not.to.equal(className)
    })
})