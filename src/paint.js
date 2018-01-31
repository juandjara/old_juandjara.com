let clickHold = false;

function getPoint(ev) {
  if('ontouchstart' in window && ev.touches[0]) {
    ev = ev.touches[0]
  }
  return {
    x: ev.clientX,
    y: ev.clientY
  }
}

window.addEventListener('DOMContentLoaded', () => {
  const canvas = document.querySelector('canvas');
  const clearButton = document.querySelector('button.clear');
  const closeButton = document.querySelector('button.close');
  const openButton = document.querySelector('button.open');
  const context = canvas.getContext('2d');
  canvas.height = window.innerHeight;
  canvas.width = window.innerWidth;

  canvas.addEventListener('mousedown touchstart', (ev) => {
    clickHold = true;
    const {x,y} = getPoint(ev);
    context.beginPath();
    context.moveTo(x, y);
  }, false);
  canvas.addEventListener('mousemove touchmove', (ev) => {
    if(!clickHold) {
      return;
    }
    const {x,y} = getPoint(ev);          
    context.lineTo(x, y);
    context.stroke();
  }, false);
  canvas.addEventListener('mouseup touchend', () => {
    clickHold = false;
    context.closePath();
  }, false);

  window.toggleCanvas = () => {
    canvas.hidden = !canvas.hidden;
    clearButton.hidden = !clearButton.hidden;
    closeButton.hidden = !closeButton.hidden;
    openButton.hidden = !openButton.hidden;
  }
  window.clearCanvas = () => {
    context.clearRect(0, 0, window.innerWidth, window.innerHeight);        
  }
});
