'use strict'

const logic = {
    _linesDrawn: [],
    _linesErased: [],
    _currentLineCoordinates: [],
    _selectedLineColor: 'black',
    _selectedLineWidth: 12,
    _currentlyDrawing: false,
    _previousPosition: { x: 0, y: 0 },

    // LINES DRAWN 
    /**
     * Add Line To Lines Drawn
     * 
     * @description Add the current line to the array linesDrawn where all the lines drawn are saved.
     */
    addLineToLinesDrawn() {
        if (!Array.isArray(this._currentLineCoordinates)) throw Error('Line coordinates must be an array')
        this._linesDrawn.push(this._currentLineCoordinates)
    },

    /**
     * Get Lines Drawn
     * 
     * @description Retrive the _linesDrawn array, where all the lines drawn by the user are stored.
     * 
     * @returns {Array} The lines stored in _linesDrawn
     */
    getLinesDrawn() {
        if (!Array.isArray(this._linesDrawn)) throw Error('Lines drawn must be an array')
        return this._linesDrawn
    },

    /**
     * Add Deleted Lines From Lines Erased To Lines Drawn
     * 
     * @description Deletes the coordinates of the last line pushed into _linesErased and add it back to _linesDrawn, this function participates in the circuit of "reDo" functionality.
     */
    addDeletedLineFromLinesErasedToLinesDrawn() {
        if (this.getLinesErased().length) {

            const lineCoordinates = this._deleteLastLineFromLinesErased()

            if (!Array.isArray(lineCoordinates)) throw Error('Line coordinates must be an array')

            this._linesDrawn.push(lineCoordinates)
        }
    },

    /**
     * Delete Last Line Of Lines Drawn
     * 
     * @description Removes the coordinates of the last line added to _linesDran array, this function participates in the circuit of the "unDo" functionality. 
     * 
     * @returns {Array} The last line coordinates stored in _linesDrawn
     */
    _deleteLastLineOfLinesDrawn() {
        return this._linesDrawn.pop()
    },

    // CURRENT LINE COORDINATES
    /**
     * Add Coordinates To Current Line
     * 
     * @description Add the coordinates and basic configuration (star position, end position, color and width) of the line that user is currently drawing to _currentLineCoordinates array.
     * 
     * @param {Object} coordinates 
     * @property {Object} moveTo With the properties X and Y coordiantes (Where the line starts).
     * @property {Object} lineTo With the properties X and Y coordiantes (When the line ends).
     * @property {string} color Indicates the color of the line.
     * @property {number} width Indicates the width (size) of the line.
     */
    addCoordinatesToCurrentLine(coordinates) {
        if (typeof coordinates !== 'object' || coordinates === null || coordinates instanceof Array) throw Error('Coordinates must be an object')
        if (!Object.keys(coordinates).length) throw Error('Coordinates can not be empty')

        this._currentLineCoordinates = [...this._currentLineCoordinates, coordinates]
    },

    /**
     * Clean Coordinates From Current Line
     * 
     * @description Set the _currentLineCoordiantes array to it's initial state (empty).
     *
     */
    clearCoordinatesFromCurrentLine() {
        this._currentLineCoordinates = []
    },

    // LINES ERASED
    /**
     * Add Deleted Line From Lines Drawn To Lines Erased
     * 
     * @description Deletes the coordinates of the last line pushed into _linesDrawn and push it to _linesErased, this function participates in the circuit of "unDo" functionality.
     *
     */
    addDeletedLineFromLinesDrawnToLinesErased() {
        if (this.getLinesDrawn().length) {

            const lineCoordinates = this._deleteLastLineOfLinesDrawn()

            if (!Array.isArray(lineCoordinates)) throw Error('Line coordinates must be an array')

            this._linesErased.push(lineCoordinates)
        }
    },

    /**
     * Get Lines Erased
     * 
     * @description Returns the _linesErased array, that contains the lines "unDone" by the user.
     *
     * @returns {Array} Lines arrays with their coordinates stored in _linesErased.
     */
    getLinesErased() {
        if (!Array.isArray(this._linesErased)) throw Error('Lines erased must be an array')
        return this._linesErased
    },

    /**
     * Delete Last Line From Lines Erased
     * 
     * @description Removes the coordinates of the last line added to _linesErased array, this function participates in the circuit of the "reDo" functionality. 
     *
     * @returns {Array} Array of objects with all the coordinates that compose the last line in _linesErased.
     */
    _deleteLastLineFromLinesErased() {
        return this._linesErased.pop()
    },

    /**
     * Clean Lines Erased
     * 
     * @description Set the _linesErased array to it's initial state (empty).
     *
     */
    clearLinesErased() {
        this._linesErased = []
    },

    // LINE COLOR
    /**
     * Set Line Color
     * 
     * @description Change the line color.
     *
     * @param {string} color - Name of the color that will replace the current one.
     */
    setLineColor(color) {
        if (typeof color !== 'string') throw Error('Color must be a string')
        if (!color.trim().length) throw Error('Color can not be empty')

        this._selectedLineColor = color
    },

    /**
     * Get Line Color
     * 
     * @description Retrive the current line color.
     *
     * @returns {string} Returns the selected line color.
     */
    getLineColor() {
        if (typeof this._selectedLineColor !== 'string') throw Error('Color must be a string')
        if (!this._selectedLineColor.trim().length) throw Error('Color can not be empty')
        return this._selectedLineColor
    },

    // LINE WIDTH
    /**
     * Set Line Width
     * 
     * @description Change the line width.
     *
     * @param {number} width - A number representing the size of the line that will replace the current one.
     */
    setLineWidth(width) {
        if (typeof width !== 'number' || isNaN(width)) throw Error('Width must be a number')
        this._selectedLineWidth = width
    },

    /**
     * Get Line Width
     * 
     * @description Retrives the current line width.
     *
     * @returns {number} Returns the selected line width number.
     */
    getLineWidth() {
        if (typeof this._selectedLineWidth !== 'number' || isNaN(this._selectedLineWidth)) throw Error('Width must be a number')
        return this._selectedLineWidth
    },

    // CURRENTLY DRAWING
    /**
     * Set Currently Drawing
     * 
     * @description A flag to determinat whether the user is drawing or not.
     *
     * @param {boolean} state - A boolean if its true means that the user is drawing, if false means the user is not drawing.
     */
    setCurrentlyDrawing(state) {
        if (typeof state !== 'boolean') throw Error('Drawing state must be a boolean')
        this._currentlyDrawing = state
    },

    /**
     * Is Currently Drawing
     * 
     * @description Allows to check if the user is drawing.
     *
     * @returns {boolean} Returns true if the user is drawing or false if the user is not drawing.
     */
    isCurrentlyDrawing() {
        if (typeof this._currentlyDrawing !== 'boolean') throw Error('Drawing state must be a boolean')
        return this._currentlyDrawing
    },

    // PREVIOUS POSITION
    /**
     * Set Previous Position
     * 
     * @description Saves the previous mouse coordinates, it is used to determinate where a trace starts (moveTo property).
     *
     * @param {Object} [coordinates={ x: 0, y: 0 }] - X position and Y position where a trace starts.
     * @property {number} x coordinate
     * @property {number} y coordinate
     */
    setPreviousPosition(coordinates) {
        if (typeof coordinates !== 'object' || coordinates === null || coordinates instanceof Array) throw Error('Coordinates must be an object')
        if (!Object.keys(coordinates).length) throw Error('Coordinates can not be empty')

        this._previousPosition = coordinates
    },

    /**
     * Get Previous Position
     * 
     * @description Retrives the previous postion coordinates (the coordinates where a trace starts).
     * 
     * @returns {Object} Returns an object with the coordinates X positon and Y position of the previous mouse posisiton.
     */
    getPreviousPosition() {
        if (typeof this._previousPosition !== 'object' || this._previousPosition === null || this._previousPosition instanceof Array) throw Error('Coordinates must be an object')
        if (!Object.keys(this._previousPosition).length) throw Error('Coordinates can not be empty')

        return this._previousPosition
    }
}