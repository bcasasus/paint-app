'use strict'

const app = new App()

const canvas = new Canvas('canvas', 800, 600)

const undoButton = new ControlButton({ class: 'control-button fas fa-arrow-circle-left fa-3x' })
undoButton.on('click', () => canvas.unDo())

const redoButton = new ControlButton({ class: 'control-button fas fa-arrow-circle-right fa-3x' })
redoButton.on('click', () => canvas.reDo())

const timeLineTool = new ControlTool({ class:'time-line-tool'})
timeLineTool.add(undoButton)
timeLineTool.add(redoButton)

const tealButton = new ColorButton('teal')
tealButton.on('click', () => {
    logic.setLineColor('teal')
    tealButton.selectColor('teal')
})

const crimsonButton = new ColorButton('crimson')
crimsonButton.on('click', () => {
    logic.setLineColor('crimson')
    crimsonButton.selectColor('crimson')
})

const yellowButton = new ColorButton('yellow')
yellowButton.on('click', () => {
    logic.setLineColor('yellow')
    yellowButton.selectColor('yellow')
})

const yellowGreenButton = new ColorButton('yellowgreen')
yellowGreenButton.on('click', () => {
    logic.setLineColor('yellowgreen')
    yellowGreenButton.selectColor('yellowgreen')
})

const salmonButton = new ColorButton('salmon')
salmonButton.on('click', () => {
    logic.setLineColor('salmon')
    salmonButton.selectColor('salmon')
})

const greenButton = new ColorButton('green')
greenButton.on('click', () => {
    logic.setLineColor('green')
    greenButton.selectColor('green')
})

const mediumSpringGreenButton = new ColorButton('mediumspringgreen')
mediumSpringGreenButton.on('click', () => {
    logic.setLineColor('mediumspringgreen')
    mediumSpringGreenButton.selectColor('mediumspringgreen')
})

const lightGreenButton = new ColorButton('lightgreen')
lightGreenButton.on('click', () => {
    logic.setLineColor('lightgreen')
    lightGreenButton.selectColor('lightgreen')
})

const seaGreenButton = new ColorButton('seagreen')
seaGreenButton.on('click', () => {
    logic.setLineColor('seagreen')
    seaGreenButton.selectColor('seagreen')
})

const orangeButton = new ColorButton('orange')
orangeButton.on('click', () => {
    logic.setLineColor('orange')
    orangeButton.selectColor('orange')
})

const redButton = new ColorButton('red')
redButton.on('click', () => {
    logic.setLineColor('red')
    redButton.selectColor('red')
})

const tomatoButton = new ColorButton('tomato')
tomatoButton.on('click', () => {
    logic.setLineColor('tomato')
    tomatoButton.selectColor('tomato')
})

const pinkButton = new ColorButton('pink')
pinkButton.on('click', () => {
    logic.setLineColor('pink')
    pinkButton.selectColor('pink')
})

const blueButton = new ColorButton('blue')
blueButton.on('click', () => {
    logic.setLineColor('blue')
    blueButton.selectColor('blue')
})

const whiteButton = new ColorButton('white')
whiteButton.on('click', () => {
    logic.setLineColor('white')
    whiteButton.selectColor('white')
})

const slateBlueButton = new ColorButton('slateblue')
slateBlueButton.on('click', () => {
    logic.setLineColor('slateblue')
    slateBlueButton.selectColor('slateblue')
})

const mediumSlateBlueButton = new ColorButton('mediumslateblue')
mediumSlateBlueButton.on('click', () => {
    logic.setLineColor('mediumslateblue')
    mediumSlateBlueButton.selectColor('mediumslateblue')
})

const purpleButton = new ColorButton('purple')
purpleButton.on('click', () => {
    logic.setLineColor('purple')
    purpleButton.selectColor('purple')
})

const aquaButton = new ColorButton('aqua')
aquaButton.on('click', () => {
    logic.setLineColor('aqua')
    aquaButton.selectColor('aqua')
})

const blackButton = new ColorButton('black', true)
blackButton.on('click', () => {
    logic.setLineColor('black')
    blackButton.selectColor('black')
})

const colorTool = new ControlTool({ class:'color-tool'})
colorTool.add(tealButton)
colorTool.add(crimsonButton)
colorTool.add(yellowButton)
colorTool.add(yellowGreenButton)
colorTool.add(salmonButton)
colorTool.add(greenButton)
colorTool.add(mediumSpringGreenButton)
colorTool.add(lightGreenButton)
colorTool.add(seaGreenButton)
colorTool.add(orangeButton)
colorTool.add(redButton)
colorTool.add(tomatoButton)
colorTool.add(pinkButton)
colorTool.add(blueButton)
colorTool.add(whiteButton)
colorTool.add(slateBlueButton)
colorTool.add(mediumSlateBlueButton)
colorTool.add(purpleButton)
colorTool.add(aquaButton)
colorTool.add(blackButton)

const controlSizeSmall = new ControlSize({ class:'control-size', size:'3'}, 3)
controlSizeSmall.on('click', e => {
    logic.setLineWidth(parseInt(e.target.size))
    controlSizeSmall.selectSize('3')
})

const controlSizeMedium = new ControlSize({ class:'control-size', size:'6'}, 6)
controlSizeMedium.on('click', e => {
    logic.setLineWidth(parseInt(e.target.size))
    controlSizeSmall.selectSize('6')
})

const controlSizeLarge = new ControlSize({ class:'control-size', size:'9'}, 9)
controlSizeLarge.on('click', e => {
    logic.setLineWidth(parseInt(e.target.size))
    controlSizeSmall.selectSize('9')
})

const controlSizeExtraLarge = new ControlSize({ class:'control-size-selected', size:'12'}, 12)
controlSizeExtraLarge.on('click', e => {
    logic.setLineWidth(parseInt(e.target.size))
    controlSizeSmall.selectSize('12')
})

const sizeTool = new ControlTool({ class:'size-tool'})
sizeTool.add(controlSizeSmall)
sizeTool.add(controlSizeMedium)
sizeTool.add(controlSizeLarge)
sizeTool.add(controlSizeExtraLarge)

const controlPanel = new ControlPanel
controlPanel.add(timeLineTool)
controlPanel.add(colorTool)
controlPanel.add(sizeTool)

app.add(canvas)
app.add(controlPanel)

Component.mount(document.getElementById('root'), app)