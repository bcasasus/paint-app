'use strict'

describe('app', () => {
    const app = new App
    
    it('should be an instanceOf Component', () => {
        expect(app).to.be.instanceOf(Component)
    })

    it('app element should be an instanceOf HTMLElement',() => {
        expect(app.element).to.be.instanceOf(HTMLElement)
    })
})