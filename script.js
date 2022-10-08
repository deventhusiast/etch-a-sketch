let canvas = document.querySelector('#canvas')
let canvasSize = '';
let convertedSize = 0
let count = 0
const createSquares = ()=>{
  let i =0
  let maxNumSq=0
  if(convertedSize === 0) maxNumSq = 16 *16
  if(convertedSize >0) maxNumSq = convertedSize * convertedSize
    for(;i<maxNumSq;i++){
      let square = document.createElement('div')
      square.style.border='1px solid lightgrey'
      square.style.backgroundColor = 'rgb(255,255,255)'
      square.classList.add('square')
      canvas.appendChild(square)
    }
}
createSquares()
const generateColour = (e)=>{
  let element = e.target
  let getColour = window.getComputedStyle(element).getPropertyValue('background-color');
  let initialColourRGB =  [getColour.replace(/[^0-9]/g, ' ').trim().split(' ').filter(el=>/\S/.test(el))];
  let getColourValues = initialColourRGB[0][0]
  let colour = Math.ceil(getColourValues/10)
   if(Math.floor(getColourValues/10) >0 && getColourValues !== NaN){
     getColourValues-=colour
     element.style.backgroundColor=`rgb(${getColourValues.toString()},${getColourValues.toString()},${getColourValues.toString()})`
   }

}
const changeColour = () =>{
  let squares = [...canvas.children]
  squares.forEach((sq) => {
    sq.addEventListener('mouseover',generateColour)
  });
}
const reset = () =>{
  while(canvas.firstChild){
    canvas.removeChild(canvas.firstChild)
  }
}
changeColour()
const generateNewCanvas= (e)=>{
  for(;;){
    canvasSize = prompt('Please enter the size of the new canvas')
    if(Number(canvasSize)<100 && canvasSize !== null && canvasSize >0){
      break
    }
  }
    convertedSize = Number(canvasSize)
    canvas.style.gridTemplateRows = `repeat(${convertedSize},1fr)`
    canvas.style.gridTemplateColumns=`repeat(${convertedSize},1fr)`
    reset()
    createSquares()
    changeColour()
  }
const newCanvas = ()=>{
  let newGridBtn = document.querySelector('#grid')
  newGridBtn.addEventListener('click',generateNewCanvas)
}
newCanvas()
//window.onload=createSqures()
