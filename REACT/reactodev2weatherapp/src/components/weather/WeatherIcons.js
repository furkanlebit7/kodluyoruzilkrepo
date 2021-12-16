import React from "react";
import "./weatherIcons.css";

function WeatherIcons({ icon }) {
  if (icon === "12d") {
    return (
      <div class="icon sun-shower">
        <div class="cloud"></div>
        <div class="sun">
          <div class="rays"></div>
        </div>
        <div class="rain"></div>
      </div>
    );
  }
  if (icon === "a") {
    return (
      <div class="icon thunder-storm">
        <div class="cloud"></div>
        <div class="lightning">
          <div class="bolt"></div>
          <div class="bolt"></div>
        </div>
      </div>
    );
  }
  if (icon === "03d" || icon === "02d" || icon === "04d") {
    return (
      <div class="icon cloudy">
        <div class="cloud"></div>
        <div class="cloud"></div>
      </div>
    );
  }
  if (icon === "13d") {
    return (
      <div class="icon flurries">
        <div class="cloud"></div>
        <div class="snow">
          <div class="flake"></div>
          <div class="flake"></div>
        </div>
      </div>
    );
  }
  if (icon === "01d") {
    return (
      <div class="icon sunny">
        <div class="sun">
          <div class="rays"></div>
        </div>
      </div>
    );
  }
  if (icon === "10d") {
    return (
      <div class="icon rainy">
        <div class="cloud"></div>
        <div class="rain"></div>
      </div>
    );
  }
}

export default WeatherIcons;
