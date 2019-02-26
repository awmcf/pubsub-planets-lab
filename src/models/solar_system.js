const PubSub = require('../helpers/pub_sub.js')


const SolarSystem = function(planets) {
  this.planets = planets;
};

SolarSystem.prototype.bindEvents = function () {
  PubSub.subscribe('NavigationView:planet-clicked', (evt) => {
    const clickedPlanet = evt.detail;
    console.log("subscribe successful");
    const result = this.showPlanetInformation(clickedPlanet);
    console.log(result);
    PubSub.publish('SolarSystem:planet-information', result)

  });

};

SolarSystem.prototype.showPlanetInformation = function (clickedPlanet) {
  for (let i = 0; i < this.planets.length; i++) {
    if (this.planets[i]["name"] === clickedPlanet) {
      return this.planets[i];
    }
  }
};



module.exports = SolarSystem;
