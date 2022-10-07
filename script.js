let canvas = document.querySelector('#canvas')
let canvasSize = '';
let convertedSize = 0
const createSquares = ()=>{
  let i =0
  let maxNumSq=0
  if(convertedSize === 0) maxNumSq = 16 *16
  if(convertedSize >0) maxNumSq = convertedSize * convertedSize
    for(;i<maxNumSq;i++){
      let square = document.createElement('div')
      square.style.border='1px solid lightgrey'
      square.classList.add('square')
      canvas.appendChild(square)
    }
}
createSquares()
const generateColour = (e)=>{
  let element = e.target
  let r = Math.floor(Math.random()*256)
  let g = Math.floor(Math.random()*256)
  let b = Math.floor(Math.random()*256)
  let rten = r-(r*0.1)
  let gten = g-(g*0.1)
  let bten =b-(b*0.1)
  let i =0;
  for(;i<10;i++){
    element.style.backgroundColor=`rgb(${rten-10},${bten-10},${gten-10})`
  }
  // do{
  //   rten = rten-(rten*0.1)
  //   gten = gten-(gten*0.1)
  //   bten =bten-(bten*0.1)
  //   element.style.backgroundColor = `rgb(${rten},${gten},${bten})`
  // }while(rten ===0 && bten===0 && gten=== 0)
  // while(r!== 0 && g !== 0 && b!==0){
  //   r = Math.floor(Math.random()*256)
  //   g = Math.floor(Math.random()*256)
  //   b = Math.floor(Math.random()*256)
  //   `
  // }
}
const changeColour = () =>{
  // let r = Math.floor(Math.random()*256)
  // let g = Math.floor(Math.random()*256)
  // let b = Math.floor(Math.random()*256)
  let squares = [...canvas.children]
  squares.forEach((sq) => {
    sq.addEventListener('mouseover',generateColour)
      // let r = Math.floor(Math.random()*256)
      // let g = Math.floor(Math.random()*256)
      // let b = Math.floor(Math.random()*256)
      // sq.style.background=`rgb(${r-(r*0.1)},${g-(g*0.1)},${b-(b*0.1)})`
    //})
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
