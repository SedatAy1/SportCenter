import React from 'react';

function Calculator() {
  return (
    <section id="Calculator">
      <div className="container">
        <div className="bmi-calculator">
          <h1>BMI Calculator</h1>
          <div className="text2">
            <p>Contrary to popular belief, Lorem Ipsum is not simply random text...</p>
          </div>
          <div className="inputs">
            <div className="input-group">
              <input type="number" id="height" placeholder="Your Height" onInput="calculateBMI()" />
              <span>cm</span>
            </div>
            <div className="input-group">
              <input type="number" id="weight" placeholder="Your Weight" onInput="calculateBMI()" />
              <span>kg</span>
            </div>
          </div>
          <p id="bmi-result"></p>
        </div>

        <div className="bmi-chart">
          <h2>Your BMI</h2>
          <div className="chart">
            <div id="underweight" className="range blue"></div>
            <div id="normal" className="range green"></div>
            <div id="overweight" className="range yellow"></div>
            <div id="obese" className="range orange"></div>
            <div id="extremely-obese" className="range red"></div>
            <div id="pointer" className="pointer"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Calculator;
