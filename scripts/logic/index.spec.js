'use strict'

describe('logic', () => {

    const coordinates = { x: 20, y: 30 }
    const lineCoordinate = { moveTo: { x: 0, y: 12 }, lineTo: { x: 30, y: 22 }, color: 'blue', width: 12 }
    const lineCoordinatesOne = [
        { moveTo: { x: 0, y: 12 }, lineTo: { x: 20, y: 52 }, color: 'blue', width: 12 },
        { moveTo: { x: 12, y: 32 }, lineTo: { x: 60, y: 52 }, color: 'blue', width: 12 },
        { moveTo: { x: 32, y: 52 }, lineTo: { x: 130, y: 92 }, color: 'blue', width: 12 }
    ]
    const lineCoordinatesTwo = [
        { moveTo: { x: 40, y: 122 }, lineTo: { x: 220, y: 2 }, color: 'red', width: 8 },
        { moveTo: { x: 38, y: 432 }, lineTo: { x: 610, y: 352 }, color: 'red', width: 8 },
        { moveTo: { x: 232, y: 252 }, lineTo: { x: 30, y: 9 }, color: 'red', width: 8 }
    ]
    const color = 'blue'
    const width = 12
    const reset = () => {
        logic._linesDrawn = []
        logic._linesErased = []
        logic._currentLineCoordinates = []
        logic._selectedLineColor = 'black'
        logic._selectedLineWidth = 12
        logic._currentlyDrawing = false
        logic._previousPosition = { x: 0, y: 0 }
    }

    true && describe('Lines Drawn', () => {

        true && describe('add line to linesDrawn array', () => {
            beforeEach(() => reset())
            it('should add line correctly to linesDrawn', () => {

                logic.addLineToLinesDrawn(lineCoordinatesOne)

                expect(logic._linesDrawn.constructor).toBe(Array)
                expect(logic._linesDrawn.length).toEqual(1)

            })

            it('should fail on trying to add undefined to linesDrawn', () => {
                logic._currentLineCoordinates = undefined

                expect(() => logic.addLineToLinesDrawn()).toThrowError('Line coordinates must be an array')
            })

            it('should fail on trying to add null to linesDrawn', () => {
                logic._currentLineCoordinates = null

                expect(() => logic.addLineToLinesDrawn()).toThrowError('Line coordinates must be an array')
            })

            it('should fail on trying to add string to linesDrawn', () => {
                logic._currentLineCoordinates = 'string'

                expect(() => logic.addLineToLinesDrawn()).toThrowError('Line coordinates must be an array')
            })

            it('should fail on trying to add number to linesDrawn', () => {
                logic._currentLineCoordinates = 12

                expect(() => logic.addLineToLinesDrawn()).toThrowError('Line coordinates must be an array')
            })

            it('should fail on trying to add NaN to linesDrawn', () => {
                logic._currentLineCoordinates = NaN

                expect(() => logic.addLineToLinesDrawn()).toThrowError('Line coordinates must be an array')
            })
        })

        true && describe('retrive linesDrawn array', () => {
            beforeEach(() => reset())

            it('should retrive linesDrawn correctly', () => {
                logic._linesDrawn = [lineCoordinatesOne, lineCoordinatesTwo]


                expect(logic.getLinesDrawn().constructor).toBe(Array)
                expect(logic.getLinesDrawn().length).toBe(2)

                expect(logic.getLinesDrawn()).toContain(lineCoordinatesOne)
                expect(logic.getLinesDrawn()[0]).toContain(lineCoordinatesOne[0])

                expect(logic.getLinesDrawn()).toContain(lineCoordinatesTwo)
                expect(logic.getLinesDrawn()[1]).toContain(lineCoordinatesTwo[0])
            })

            it('should fail on trying to retrive undefined from linesDrawn', () => {
                logic._linesDrawn = undefined

                expect(() => logic.getLinesDrawn()).toThrowError('Lines drawn must be an array')
            })

            it('should fail on trying to retrive null from linesDrawn', () => {
                logic._linesDrawn = null

                expect(() => logic.getLinesDrawn()).toThrowError('Lines drawn must be an array')
            })

            it('should fail on trying to retrive string from linesDrawn', () => {
                logic._linesDrawn = 'string'

                expect(() => logic.getLinesDrawn()).toThrowError('Lines drawn must be an array')
            })

            it('should fail on trying to retrive number from linesDrawn', () => {
                logic._linesDrawn = 12

                expect(() => logic.getLinesDrawn()).toThrowError('Lines drawn must be an array')
            })

            it('should fail on trying to retrive NaN from linesDrawn', () => {
                logic._linesDrawn = NaN

                expect(() => logic.getLinesDrawn()).toThrowError('Lines drawn must be an array')
            })
        })

        true && describe('add deleted line from linesErased to linesDrawn', () => {
            beforeEach(() => reset())

            it('should add deleted line from linesErased to linesDrawn correclty', () => {
                logic._linesErased = [lineCoordinatesOne, lineCoordinatesTwo]

                expect(logic._linesErased.constructor).toBe(Array)
                expect(logic._linesErased.length).toEqual(2)

                logic.addDeletedLineFromLinesErasedToLinesDrawn()

                expect(logic._linesDrawn.constructor).toBe(Array)
                expect(logic._linesDrawn.length).toEqual(1)

                expect(logic._linesDrawn).toContain(lineCoordinatesTwo)
                expect(logic._linesDrawn[0]).toContain(lineCoordinatesTwo[0])

                expect(logic._linesErased.length).toEqual(1)
            })

            it('should not execute if lines erased have no length', () => {
                logic._linesErased = []
                logic._linesDrawn = [lineCoordinatesOne]

                logic.addDeletedLineFromLinesErasedToLinesDrawn()

                expect(logic._linesErased.length).toEqual(0)
                expect(logic._linesDrawn.length).toEqual(1)
            })

            it('should fail on trying to add undefined to linesDrawn', () => {
                logic._linesErased[0] = undefined
                expect(() => logic.addDeletedLineFromLinesErasedToLinesDrawn()).toThrowError('Line coordinates must be an array')
            })

            it('should fail on trying to add null to linesDrawn', () => {
                logic._linesErased[0] = null
                expect(() => logic.addDeletedLineFromLinesErasedToLinesDrawn()).toThrowError('Line coordinates must be an array')
            })

            it('should fail on trying to add string to linesDrawn', () => {
                logic._linesErased[0] = 'string'
                expect(() => logic.addDeletedLineFromLinesErasedToLinesDrawn()).toThrowError('Line coordinates must be an array')
            })

            it('should fail on trying to add number to linesDrawn', () => {
                logic._linesErased[0] = 12
                expect(() => logic.addDeletedLineFromLinesErasedToLinesDrawn()).toThrowError('Line coordinates must be an array')
            })

            it('should fail on trying to add NaN to linesDrawn', () => {
                logic._linesErased[0] = NaN
                expect(() => logic.addDeletedLineFromLinesErasedToLinesDrawn()).toThrowError('Line coordinates must be an array')
            })

        })

        true && describe(' delete last line of linesDrawn', () => {
            beforeEach(() => reset())

            it('should delete the last line of linesDrawn correctly', () => {
                logic._linesDrawn = [lineCoordinatesOne, lineCoordinatesTwo]

                expect(logic._linesDrawn.constructor).toBe(Array)
                expect(logic._linesDrawn.length).toEqual(2)

                expect(logic._deleteLastLineOfLinesDrawn()).toEqual(lineCoordinatesTwo)
                expect(logic._linesDrawn.length).toEqual(1)

                expect(logic._linesDrawn).toContain(lineCoordinatesOne)
                expect(logic._linesDrawn[0]).toContain(lineCoordinatesOne[0])

                expect(logic._linesDrawn).not.toContain(lineCoordinatesTwo)
                expect(logic._linesDrawn[0]).not.toContain(lineCoordinatesTwo[0])
            })
        })

    })

    true && describe('Current Line Coordinates', () => {
        true && describe('add coordinates to current line', () => {
            beforeEach(() => reset())
            it('should add coordinates to current line', () => {
                logic.addCoordinatesToCurrentLine(lineCoordinate)

                expect(logic._currentLineCoordinates.constructor).toBe(Array)
                expect(logic._currentLineCoordinates.length).toEqual(1)
                expect(logic._currentLineCoordinates).toContain(lineCoordinate)
                expect(logic._currentLineCoordinates[0]).toEqual(jasmine.objectContaining({ moveTo: { x: 0, y: 12 } }))
            })

            it('should fail on trying to add undefined to current line', () => {
                const coordinates = undefined

                expect(() => logic.addCoordinatesToCurrentLine(coordinates)).toThrowError('Coordinates must be an object')
            })

            it('should fail on trying to add null to current line', () => {
                const coordinates = null

                expect(() => logic.addCoordinatesToCurrentLine(coordinates)).toThrowError('Coordinates must be an object')
            })

            it('should fail on trying to add a string to current line', () => {
                const coordinates = 'string'

                expect(() => logic.addCoordinatesToCurrentLine(coordinates)).toThrowError('Coordinates must be an object')
            })

            it('should fail on trying to add a number to current line', () => {
                const coordinates = 12

                expect(() => logic.addCoordinatesToCurrentLine(coordinates)).toThrowError('Coordinates must be an object')
            })

            it('should fail on trying to add NaN to current line', () => {
                const coordinates = NaN

                expect(() => logic.addCoordinatesToCurrentLine(coordinates)).toThrowError('Coordinates must be an object')
            })

            it('should fail on trying to add an array to current line', () => {
                const coordinates = [1, 2, 3]

                expect(() => logic.addCoordinatesToCurrentLine(coordinates)).toThrowError('Coordinates must be an object')
            })

            it('should fail on trying to add an empty object to current line', () => {
                const coordinates = {}

                expect(() => logic.addCoordinatesToCurrentLine(coordinates)).toThrowError('Coordinates can not be empty')
            })
        })

        true && describe('clear coordinates from current line', () => {
            beforeEach(() => reset())
            it('should clear coordinates from current line', () => {
                logic._currentLineCoordinates = [...lineCoordinatesOne]

                expect(logic._currentLineCoordinates.constructor).toBe(Array)
                expect(logic._currentLineCoordinates.length).toEqual(3)
                expect(logic._currentLineCoordinates).toContain(lineCoordinatesOne[0])

                logic.clearCoordinatesFromCurrentLine()

                expect(logic._currentLineCoordinates.constructor).toBe(Array)
                expect(logic._currentLineCoordinates.length).toEqual(0)
            })
        })
    })

    true && describe('Lines Erased', () => {
        true && describe('add deleted line from linesDrawn to linesErased', () => {
            beforeEach(() => reset())
            it('should add deleted lines from linesDrawn to linesErased', () => {
                logic._linesDrawn = [lineCoordinatesOne, lineCoordinatesTwo]

                expect(logic._linesDrawn.constructor).toBe(Array)
                expect(logic._linesDrawn.length).toEqual(2)

                expect(logic._linesErased.constructor).toBe(Array)
                expect(logic._linesErased.length).toEqual(0)

                logic.addDeletedLineFromLinesDrawnToLinesErased()

                expect(logic._linesErased.constructor).toBe(Array)
                expect(logic._linesErased.length).toEqual(1)
                expect(logic._linesErased).toContain(lineCoordinatesTwo)

                expect(logic._linesDrawn.length).toEqual(1)
                expect(logic._linesDrawn).toContain(lineCoordinatesOne)
                expect(logic._linesDrawn[0]).toContain(lineCoordinatesOne[0])

                expect(logic._linesDrawn).not.toContain(lineCoordinatesTwo)
                expect(logic._linesDrawn[0]).not.toContain(lineCoordinatesTwo[0])

            })

            it('should not execute if lines drawn have no length', () => {
                logic._linesDrawn = []
                logic._linesErased = [lineCoordinatesOne]

                logic.addDeletedLineFromLinesDrawnToLinesErased()

                expect(logic._linesErased.length).toEqual(1)
                expect(logic._linesDrawn.length).toEqual(0)
            })

            it('should fail on trying to add undefined to linesErased', () => {
                logic._linesDrawn[0] = undefined
                expect(() => logic.addDeletedLineFromLinesDrawnToLinesErased()).toThrowError('Line coordinates must be an array')
            })

            it('should fail on trying to add null to linesErased', () => {
                logic._linesDrawn[0] = null
                expect(() => logic.addDeletedLineFromLinesDrawnToLinesErased()).toThrowError('Line coordinates must be an array')
            })

            it('should fail on trying to add string to linesErased', () => {
                logic._linesDrawn[0] = 'string'
                expect(() => logic.addDeletedLineFromLinesDrawnToLinesErased()).toThrowError('Line coordinates must be an array')
            })

            it('should fail on trying to add number to linesErased', () => {
                logic._linesDrawn[0] = 12
                expect(() => logic.addDeletedLineFromLinesDrawnToLinesErased()).toThrowError('Line coordinates must be an array')
            })

            it('should fail on trying to add NaN to linesErased', () => {
                logic._linesDrawn[0] = NaN
                expect(() => logic.addDeletedLineFromLinesDrawnToLinesErased()).toThrowError('Line coordinates must be an array')
            })
        })

        true && describe('retrive lines erased', () => {
            beforeEach(() => reset())
            it('should retrive linesErased correctly when have lines', () => {
                logic._linesErased = [lineCoordinatesOne, lineCoordinatesTwo]

                expect(logic.getLinesErased().constructor).toBe(Array)
                expect(logic.getLinesErased().length).toBe(2)
                expect(logic.getLinesErased()).toContain(lineCoordinatesOne)
                expect(logic.getLinesErased()[0]).toContain(lineCoordinatesOne[0])

                expect(logic.getLinesErased()).toContain(lineCoordinatesTwo)
                expect(logic.getLinesErased()[1]).toContain(lineCoordinatesTwo[0])
            })

            it('should fail on trying to retrive undefined from linesErased', () => {
                logic._linesErased = undefined

                expect(() => logic.getLinesErased()).toThrowError('Lines erased must be an array')
            })

            it('should fail on trying to retrive null from linesErased', () => {
                logic._linesErased = null

                expect(() => logic.getLinesErased()).toThrowError('Lines erased must be an array')
            })

            it('should fail on trying to retrive string from linesErased', () => {
                logic._linesErased = 'string'

                expect(() => logic.getLinesErased()).toThrowError('Lines erased must be an array')
            })

            it('should fail on trying to retrive number from linesErased', () => {
                logic._linesErased = 12

                expect(() => logic.getLinesErased()).toThrowError('Lines erased must be an array')
            })

            it('should fail on trying to retrive NaN from linesErased', () => {
                logic._linesErased = NaN

                expect(() => logic.getLinesErased()).toThrowError('Lines erased must be an array')
            })
        })

        true && describe('delete last line from lines erased', () => {
            beforeEach(() => reset())
            it('should delete the last line (position) from linesErased correctly', () => {
                logic._linesErased = [lineCoordinatesOne, lineCoordinatesTwo]

                expect(logic._linesErased.constructor).toBe(Array)
                expect(logic._linesErased.length).toEqual(2)

                expect(logic._deleteLastLineFromLinesErased()).toEqual(lineCoordinatesTwo)
                expect(logic._linesErased.length).toEqual(1)

                expect(logic._linesErased).toContain(lineCoordinatesOne)
                expect(logic._linesErased[0]).toContain(lineCoordinatesOne[0])

                expect(logic._linesErased).not.toContain(lineCoordinatesTwo)
                expect(logic._linesErased[0]).not.toContain(lineCoordinatesTwo[0])
            })
        })

        true && describe('clear lines erased', () => {
            beforeEach(() => reset())
            it('should clear linesErased correctly', () => {
                logic._linesErased = [lineCoordinatesOne, lineCoordinatesTwo]

                expect(logic._linesErased.constructor).toBe(Array)
                expect(logic._linesErased.length).toEqual(2)
                expect(logic._linesErased).toContain(lineCoordinatesOne)
                expect(logic._linesErased).toContain(lineCoordinatesTwo)

                logic.clearLinesErased()

                expect(logic._linesErased.constructor).toBe(Array)
                expect(logic._linesErased.length).toEqual(0)
                expect(logic._linesErased).not.toContain(lineCoordinatesOne)
                expect(logic._linesErased).not.toContain(lineCoordinatesTwo)
            })
        })
    })

    true && describe('Line Color', () => {
        true && describe('set line color', () => {
            beforeEach(() => reset())
            it('should set line color correctly', () => {
                logic.setLineColor(color)

                expect(logic._selectedLineColor.constructor).toBe(String)
                expect(logic._selectedLineColor.length).toBeGreaterThan(0)
                expect(logic._selectedLineColor).toContain(color)
            })

            it('should fail on trying to set undefined to lineColor', () => {
                expect(() => logic.setLineColor(undefined)).toThrowError('Color must be a string')
            })

            it('should fail on trying to set null to lineColor', () => {
                expect(() => logic.setLineColor(null)).toThrowError('Color must be a string')
            })

            it('should fail on trying to set empty string to lineColor', () => {
                expect(() => logic.setLineColor('   ')).toThrowError('Color can not be empty')
            })

            it('should fail on trying to set number to lineColor', () => {
                expect(() => logic.setLineColor(12)).toThrowError('Color must be a string')
            })

            it('should fail on trying to set NaN to lineColor', () => {
                expect(() => logic.setLineColor(NaN)).toThrowError('Color must be a string')
            })
        })

        true && describe('get line color', () => {
            beforeEach(() => reset())
            it('should retrive line color correclty', () => {
                logic._selectedLineColor = color

                expect(logic.getLineColor().constructor).toBe(String)
                expect(logic.getLineColor().length).toBeGreaterThan(0)
                expect(logic.getLineColor()).toContain(color)
            })


            it('should fail on trying to retrive undefined to lineColor', () => {
                logic._selectedLineColor = undefined
                expect(() => logic.getLineColor()).toThrowError('Color must be a string')
            })

            it('should fail on trying to retrive null to lineColor', () => {
                logic._selectedLineColor = null
                expect(() => logic.getLineColor()).toThrowError('Color must be a string')
            })

            it('should fail on trying to retrive empty string to lineColor', () => {
                logic._selectedLineColor = '    '
                expect(() => logic.getLineColor()).toThrowError('Color can not be empty')
            })

            it('should fail on trying to retrive number to lineColor', () => {
                logic._selectedLineColor = 122
                expect(() => logic.getLineColor()).toThrowError('Color must be a string')
            })

            it('should fail on trying to retrive NaN to lineColor', () => {
                logic._selectedLineColor = NaN
                expect(() => logic.getLineColor()).toThrowError('Color must be a string')
            })
        })
    })

    true && describe('Line Width', () => {
        true && describe('set line width', () => {
            beforeEach(() => reset())
            it('should set selectedLineWidth correctly', () => {
                logic.setLineWidth(width)

                expect(logic._selectedLineWidth.constructor).toBe(Number)
                expect(logic._selectedLineWidth).toEqual(width)
            })

            it('should fail on trying to set undefined to lineWidth', () => {
                expect(() => logic.setLineWidth(undefined)).toThrowError('Width must be a number')
            })

            it('should fail on trying to set null to lineWidth', () => {
                expect(() => logic.setLineWidth(null)).toThrowError('Width must be a number')
            })

            it('should fail on trying to set a string to lineWidth', () => {
                expect(() => logic.setLineWidth('string')).toThrowError('Width must be a number')
            })

            it('should fail on trying to set NaN to lineWidth', () => {
                expect(() => logic.setLineWidth(NaN)).toThrowError('Width must be a number')
            })
        })

        true && describe('get line width', () => {
            beforeEach(() => reset())
            it('should retrive selectedLineWidth correctly', () => {
                logic._selectedLineWidth = width

                expect(logic.getLineWidth().constructor).toBe(Number)
                expect(logic.getLineWidth()).toEqual(width)
            })

            it('should fail on trying to get undefined to lineWidth', () => {
                logic._selectedLineWidth = undefined
                expect(() => logic.getLineWidth()).toThrowError('Width must be a number')
            })

            it('should fail on trying to get null to lineWidth', () => {
                logic._selectedLineWidth = null
                expect(() => logic.getLineWidth()).toThrowError('Width must be a number')
            })

            it('should fail on trying to get a string to lineWidth', () => {
                logic._selectedLineWidth = 'string'
                expect(() => logic.getLineWidth()).toThrowError('Width must be a number')
            })

            it('should fail on trying to get NaN to lineWidth', () => {
                logic._selectedLineWidth = NaN
                expect(() => logic.getLineWidth()).toThrowError('Width must be a number')
            })
        })
    })

    true && describe('Currently Drawing', () => {
        true && describe('set currently drawing', () => {
            beforeEach(() => reset())
            it('should set currently drawing state correctly', () => {
                logic.setCurrentlyDrawing(true)

                expect(logic._currentlyDrawing.constructor).toBe(Boolean)
                expect(logic._currentlyDrawing).toBeTruthy()

                logic.setCurrentlyDrawing(false)

                expect(logic._currentlyDrawing.constructor).toBe(Boolean)
                expect(logic._currentlyDrawing).toBeFalsy()
            })

            it('should fail on trying to set undefined to currentlyDrawing', () => {
                expect(() => logic.setCurrentlyDrawing(undefined)).toThrowError('Drawing state must be a boolean')
            })

            it('should fail on trying to set null to currentlyDrawing', () => {
                expect(() => logic.setCurrentlyDrawing(null)).toThrowError('Drawing state must be a boolean')
            })

            it('should fail on trying to set a string to currentlyDrawing', () => {
                expect(() => logic.setCurrentlyDrawing('string')).toThrowError('Drawing state must be a boolean')
            })

            it('should fail on trying to set NaN to currentlyDrawing', () => {
                expect(() => logic.setCurrentlyDrawing(NaN)).toThrowError('Drawing state must be a boolean')
            })
        })

        true && describe('should retrieve whether the user is drawing or not, correctly', () => {
            beforeEach(() => reset())
            it('should retrive true or false if the user is drawing or not, correctly', () => {
                logic._currentlyDrawing = true

                expect(logic.isCurrentlyDrawing().constructor).toBe(Boolean)
                expect(logic.isCurrentlyDrawing()).toBeTruthy()

                logic._currentlyDrawing = false

                expect(logic.isCurrentlyDrawing().constructor).toBe(Boolean)
                expect(logic.isCurrentlyDrawing()).toBeFalsy()
            })

            it('should fail on trying to get undefined to currentlyDrawing', () => {
                logic._currentlyDrawing = undefined
                expect(() => logic.isCurrentlyDrawing()).toThrowError('Drawing state must be a boolean')
            })

            it('should fail on trying to get null to currentlyDrawing', () => {
                logic._currentlyDrawing = null
                expect(() => logic.isCurrentlyDrawing()).toThrowError('Drawing state must be a boolean')
            })

            it('should fail on trying to get a string to currentlyDrawing', () => {
                logic._currentlyDrawing = 'string'
                expect(() => logic.isCurrentlyDrawing()).toThrowError('Drawing state must be a boolean')
            })

            it('should fail on trying to get NaN to currentlyDrawing', () => {
                logic._currentlyDrawing = NaN
                expect(() => logic.isCurrentlyDrawing()).toThrowError('Drawing state must be a boolean')
            })
        })
    })

    true && describe('Previous Position', () => {
        true && describe('set provious position', () => {
            beforeEach(() => reset())
            it('should set previous position (coordinates to draw a line)', () => {
                logic.setPreviousPosition(coordinates)

                expect(logic._previousPosition.constructor).toBe(Object)
                expect(logic._previousPosition).toEqual(jasmine.objectContaining({ x: 20}))
                expect(logic._previousPosition).toEqual(jasmine.objectContaining({ y: 30}))
            })

            it('should fail on trying to set undefined to previous position', () => {
                const coordinates = undefined

                expect(() => logic.setPreviousPosition(coordinates)).toThrowError('Coordinates must be an object')
            })

            it('should fail on trying to set null to previous position', () => {
                const coordinates = null

                expect(() => logic.setPreviousPosition(coordinates)).toThrowError('Coordinates must be an object')
            })

            it('should fail on trying to set a string to previous position', () => {
                const coordinates = 'string'

                expect(() => logic.setPreviousPosition(coordinates)).toThrowError('Coordinates must be an object')
            })

            it('should fail on trying to set a number to previous position', () => {
                const coordinates = 12

                expect(() => logic.setPreviousPosition(coordinates)).toThrowError('Coordinates must be an object')
            })

            it('should fail on trying to set NaN to previous position', () => {
                const coordinates = NaN

                expect(() => logic.setPreviousPosition(coordinates)).toThrowError('Coordinates must be an object')
            })

            it('should fail on trying to set an array to previous position', () => {
                const coordinates = [1, 2, 3]

                expect(() => logic.setPreviousPosition(coordinates)).toThrowError('Coordinates must be an object')
            })

            it('should fail on trying to set an empty object to previous position', () => {
                const coordinates = {}

                expect(() => logic.setPreviousPosition(coordinates)).toThrowError('Coordinates can not be empty')
            })
        })

        true && describe('get previous position', () => {
            beforeEach(() => reset())
            it('should retrive the previous position (coordinates to draw a line)', () => {
                logic._previousPosition = coordinates

                expect(logic.getPreviousPosition().constructor).toBe(Object)
                expect(logic.getPreviousPosition()).toEqual(jasmine.objectContaining({ x: 20}))
                expect(logic.getPreviousPosition()).toEqual(jasmine.objectContaining({ y: 30}))
            })

            it('should fail on trying to set undefined to previous position', () => {
                logic._previousPosition = undefined

                expect(() => logic.getPreviousPosition()).toThrowError('Coordinates must be an object')
            })

            it('should fail on trying to set null to previous position', () => {
                logic._previousPosition = null

                expect(() => logic.getPreviousPosition()).toThrowError('Coordinates must be an object')
            })

            it('should fail on trying to set a string to previous position', () => {
                logic._previousPosition = 'string'

                expect(() => logic.getPreviousPosition()).toThrowError('Coordinates must be an object')
            })

            it('should fail on trying to set a number to previous position', () => {
                logic._previousPosition = 12

                expect(() => logic.getPreviousPosition()).toThrowError('Coordinates must be an object')
            })

            it('should fail on trying to set NaN to previous position', () => {
                logic._previousPosition = NaN

                expect(() => logic.getPreviousPosition()).toThrowError('Coordinates must be an object')
            })

            it('should fail on trying to set an array to previous position', () => {
                logic._previousPosition = [1, 2, 3]

                expect(() => logic.getPreviousPosition()).toThrowError('Coordinates must be an object')
            })

            it('should fail on trying to set an empty object to previous position', () => {
                logic._previousPosition = {}

                expect(() => logic.getPreviousPosition()).toThrowError('Coordinates can not be empty')
            })
        })
    })
})