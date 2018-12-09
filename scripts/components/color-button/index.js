'use strict'

/**
 * Color Button Component
 * 
 * @class ColorButton
 * @classdesc Crates a colorButton element.
 * @extends {ControlButton}
 */
class ColorButton extends ControlButton {
    /**
     *Creates an instance of ColorButton.
     * @param {String} color - The color to set.
     * @param {Boolean} selected - To check if the button is active.
     * @memberof ColorButton
     */
    constructor(color, selected) {
        super({ class: `${selected ? 'color-button-selected' : 'color-button'}`, id: `${color}` })

        this.element.style.backgroundColor = color
    }

    /**
     * Select a color
     *
     * @param {String} id
     * @memberof ColorButton
     */
    selectColor(id) {
        const parentElement = this.element.parentElement
        const children = parentElement.children

        for (let child of children) {
            (child.id !== id) ?
                child.setAttribute('class', 'color-button')
                :
                child.setAttribute('class', 'color-button-selected')
        }
    }
}