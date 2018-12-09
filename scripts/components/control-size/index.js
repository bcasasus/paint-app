'use strict'

/**
 * Control size of lines to draw
 *
 * @class ControlSize
 * @classdesc Allows to create a new component size.
 * @extends {Component}
 */
class ControlSize extends Component {
    /**
     *Creates an instance of ControlSize.
     * @param {Object} attrs
     * @param {Number} size
     * @memberof ControlSize
     */
    constructor(attrs, size) {
        super('hr', attrs)

        this.element.style.height = `${size}px`
    }

    /**
     * Select a size
     *
     * @param {Number} size
     * @memberof ControlSize
     */
    selectSize(size) {
        
        if (typeof size !== 'string') throw Error('Size must be a string')
        if (!size.trim().length) throw Error('Size can not be empty')

        const parentElement = this.element.parentElement
        const children = parentElement.children

        for (let child of children) {
            (child.size !== size) ?
                child.setAttribute('class', 'control-size')
                :
                child.setAttribute('class', 'control-size-selected')
        }
    }
}