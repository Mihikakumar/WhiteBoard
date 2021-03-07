const painCanvas = document.querySelector(".js-paint");
const context = painCanvas.getContext("2d");
context.lineCap = "";
const colorPicker = document.querySelector(".js-color-picker");
colorPicker.addEventListener("change",event=>{
    context.strokeStyle = event.target.value;
})
const lineWidthRange = document.querySelector(".js-line-range");
const lineWidthLabel = document.querySelector(".js-range-value");
lineWidthRange.addEventListener("input",event=>{
  const width = event.target.value;
  lineWidthLabel.innerHTML = width;
  context.lineWidth = width;
})
let x=0 , y=0;
let isMouseDown=false;
const stopDrawing=()=>{
  isMouseDown=false;
}
const startDrawing=(event)=>{
  isMouseDown = true;
  [x,y]=[event.offsetX,event.offsetY];
}
const drawLine = (event)=>{
  if(isMouseDown){
    const newX=event.offsetX;
    const newY=event.offsetY;
    context.beginPath();
    context.moveTo(x,y)
    context.lineTo(newX,newY);
    context.stroke();
    x=newX;
    y=newY;
  }
} 
painCanvas.addEventListener("mousedown",startDrawing);
painCanvas.addEventListener("mousemove",drawLine);
painCanvas.addEventListener("mouseup",stopDrawing);
painCanvas.addEventListener("mouseout",stopDrawing);