import React, { useState } from 'react';
import { useRef } from 'react';
/* ------------------------------ Import Styles ----------------------------- */

import './Draw.css';

function Draw() {
  let canvasRef = useRef('');
  const [end, setEnd] = useState(false);
  let polygon = []


  const drawPolygon = (e) => {
    let canvas = canvasRef.current.getContext('2d');
    if (end) {
      return;
    }
    let x = e.clientX - canvasRef.current.offsetLeft;
    let y = e.clientY - canvasRef.current.offsetTop;
    polygon.push({ x, y });
    canvas.beginPath();
    canvas.moveTo(polygon[0].x, polygon[0].y);
    for (let i = 1; i < polygon.length; i++) {
      canvas.lineTo(polygon[i].x, polygon[i].y);
    }
    canvas.stroke();
  }

  

  const endDraw = () => {
    if (!end) {
      let canvas = canvasRef.current.getContext('2d');
      let newPolygon = [ ...polygon, polygon[0]];
      console.log('polygon', polygon);
      canvas.beginPath();
      canvas.moveTo(newPolygon[0].x, newPolygon[0].y);
      for (let i = 1; i < newPolygon.length; i++) {
        canvas.lineTo(newPolygon[i].x, newPolygon[i].y);
      }
      canvas.stroke();
      setEnd(true);
    }
  }

  const clearCanvas = () => {
    let canvas = canvasRef.current.getContext('2d');
    canvas.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
    polygon = [];
    setEnd(false);
  }
  return (
    <React.Fragment>
      <div className="Draw_Container">
        <h1 className="Draw_H1">Drawing polygons</h1>
        <canvas id="canvas" width="600" height="600" className="Draw_Canvas" ref={canvasRef} onClick={(e) => drawPolygon(e)}></canvas>
        <div className="Draw_Buttos_Content">
          <button type="button" className="Draw_Buttos" onClick={() => endDraw()}> Complete</button>
          <button type="button" className="Draw_Buttos" onClick={() => clearCanvas()}> Reset</button>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Draw;
