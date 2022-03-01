import React from 'react';
import './Draw.css';

function App() {
  return (
    <React.Fragment>
      <div className="Draw_Container">
        <h1 className="Draw_H1">Drawing polygons</h1>
        <canvas id="canvas" width="600" height="600" className="Draw_Canvas"></canvas>
        <div className="Draw_Buttos_Content">
          <button type="button" className="Draw_Buttos" onClick={()=>console.log("Complete")}> Complete</button>
          <button type="button" className="Draw_Buttos" onClick={()=>console.log("Complete")}> Reset</button>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
