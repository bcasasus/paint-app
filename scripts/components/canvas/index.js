'use strict'

/**
 * Abstraction of canvas
 * 
 * @class Canvas
 * @classdesc Crates a main element to wrap the application.
 * @extends {Component}
 */
class Canvas extends Component {

    /**
     *Creates an instance of Canvas.
     * @param {String} classes
     * @param {Number} width
     * @param {Number} height
     * @memberof Canvas
     */
    constructor(classes, width, height) {
        super('canvas', { class: classes, width, height })

        this.context = this.element.getContext('2d')
        this.context.lineJoin = 'round';
        this.context.lineCap = 'round';

        // setup mouse down behavior (capture pointer position)
        this.element.onmousedown = event => {
            const { offsetX: x, offsetY: y } = event

            logic.setCurrentlyDrawing(true)
            logic.setPreviousPosition({ x, y })
        }

        // setup mouse move behavior (capture pointer position, update coordinates)
        this.element.onmousemove = event => {
            if (logic.isCurrentlyDrawing()) {
                const { offsetX: x, offsetY: y } = event

                const previousPosition = logic.getPreviousPosition()
                const currentPosition = { x, y }
                const selectedColor = logic.getLineColor()
                const selectedWidth = logic.getLineWidth()

                logic.addCoordinatesToCurrentLine({
                    moveTo: { ...previousPosition },
                    lineTo: { ...currentPosition },
                    color: selectedColor,
                    width: selectedWidth
                })

                this.draw({
                    previousPosition,
                    currentPosition,
                    selectedColor,
                    selectedWidth
                })
            }
        }

        // setup mouse up behavior (save line painted, stop drawing)
        this.element.onmouseup = event => {
            if (logic.isCurrentlyDrawing()) {
                logic.setCurrentlyDrawing(false)
                this.saveLine()
            }
        }

        // setup mouse out behavior (save line painted, stop drawing)
        this.element.onmouseout = () => {
            if (logic.isCurrentlyDrawing()) {
                logic.setCurrentlyDrawing(false)
                this.saveLine()
            }
        }

        // setup draw behavior (paint exact coordinates, set previous position)
        this.draw = ({ previousPosition, currentPosition, selectedColor, selectedWidth }) => {
            const { x: prevX, y: prevY } = previousPosition
            const { x: currX, y: currY } = currentPosition

            this.context.beginPath()
            this.context.strokeStyle = selectedColor
            this.context.lineWidth = selectedWidth

            this.context.moveTo(prevX, prevY)
            this.context.lineTo(currX, currY)
            this.context.stroke()

            logic.setPreviousPosition({ x: currX, y: currY })
        }

        // setup save line behavior (save line, add line to linesDrawn)
        this.saveLine = () => {
            logic.clearLinesErased()
            logic.addLineToLinesDrawn()
            logic.clearCoordinatesFromCurrentLine()
        }

        // setup draw current lines behavior (re print array of lines)
        this.drawCurrentLines = () => {
            logic.getLinesDrawn().forEach((line) => {
                line.forEach(line => {
                    this.draw({
                        previousPosition: line.moveTo,
                        currentPosition: line.lineTo,
                        selectedColor: line.color,
                        selectedWidth: line.width
                    })
                })
            })
        }
    }

    /**
     * ReDo the last line erased from the screen.
     *
     * @memberof Canvas
     */
    reDo() {
        this.clearScreen()
        logic.addDeletedLineFromLinesErasedToLinesDrawn()
        this.drawCurrentLines()
    }

    /**
     * UnDo the last line drawn.
     *
     * @memberof Canvas
     */
    unDo() {
        this.clearScreen()
        logic.addDeletedLineFromLinesDrawnToLinesErased()
        this.drawCurrentLines()
    }

    /**
     * Clear the lines drawns on the screen.
     *
     * @memberof Canvas
     */
    clearScreen() {
        this.context.clearRect(0, 0, this.element.width, this.element.height)
    }

}