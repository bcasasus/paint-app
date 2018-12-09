'use strict'

/**
 * Parent class for components
 *
 * @class Component
 */
class Component {

    /**
     * Creates an instance of Component.
     * 
     * @param {String} tag
     * @param {Object} attrs
     * @memberof Component
     */
    constructor(tag, attrs) {
        this.element = document.createElement(tag)

        if (attrs) {
            const keys = Object.keys(attrs)

            for (const key of keys) {
                this.element.setAttribute(key, attrs[key])
            }
        }

    }

    /**
     * Add child to element
     *
     * @param {Object} component
     * @memberof Component
     */
    add(component) {
        if (!(component instanceof Component)) throw Error('component is not an instance Component')

        this.element.appendChild(component.element)
    }

    /**
     * Handle events
     *
     * @param {String} event
     * @param {Function} listener
     * @memberof Component
     */
    on(event, listener) {
        this.element.addEventListener(event, listener)
    }

    /**
     * Mount the application inside the root element.
     *
     * @static
     * @param {HTMLelement} root
     * @param {Component} component
     * @memberof Component
     */
    static mount(root, component) {
        if (!(component instanceof Component)) throw Error('component is not an instance Component')

        root.appendChild(component.element)
    }

}