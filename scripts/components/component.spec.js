'use strict'

describe('component', () => {
    const tagName = 'component'
    const className = 'main-comp'
    const id = 'compo'
    const attrs = { class: `${className}`, id: `${id}` }
    const root = document.createElement('div');
    root.setAttribute('id', id)
    
    const notComponent = class {
        constructor() {
        }
        info() {
            return 'I am not an instanceOf Component'
        }
    }

    const component = new Component(tagName, attrs)

    it('component should be an instanceOf Component', () => {
        expect(component).to.be.instanceOf(Component)
    })

    it('component element should be an instanceOf HTMLElement', () => {
        expect(component.element).to.be.instanceOf(HTMLElement)
    })

    it('component element should have the correct className name', () => {
        expect(component.element.className).to.equal(className)
    })

    it('add should be a function', () => {
        expect(component.add).to.be.an.instanceof(Function)
    })

    it('add should add child to component correctly', () => {
        const parent = new ControlTool({ class: `${className}` })
        const child = new ControlButton({ class: 'control-button fas fa-arrow-circle-left fa-3x' })

        expect(() => parent.add(child)).to.not.throw()

        const parentElement = child.element.parentElement
        expect(parentElement).to.equal(parent.element)

        const children = parent.element.children[0]
        expect(children).to.equal(child.element)
    })

    it('add should fail on trying to add child to component if is not an instanceOf Component', () => {
        const parent = new ControlTool({ class: `${className}` })
        const child = new notComponent

        expect(() => parent.add(child)).to.throw('component is not an instance Component')
    })

    it('on should be a function', () => {
        expect(component.on).to.be.an.instanceof(Function)
    })

    it('mount should be a function', () => {
        expect(Component.mount).to.be.an.instanceof(Function)
    })

    it('mount should mount correctly', () => {
        Component.mount(root, component)

        const parentElement = component.element.parentElement
        expect(parentElement).to.equal(root)

        const children = parentElement.children[0]
        expect(children).to.equal(component.element)
    })

    it('mount should fail on trying to mount a component that is not an instanceOf Component', () => {
        const component = new notComponent

        expect(() => Component.mount(root, component)).to.throw('component is not an instance Component')

    })
})