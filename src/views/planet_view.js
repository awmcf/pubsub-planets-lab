const PubSub = require('../helpers/pub_sub.js');

const PlanetView = function () {
};

PlanetView.prototype.bindEvents = function () {
  PubSub.subscribe('SolarSystem:planet-information', (evt) => {
    const result = evt.detail;
    this.displayResult(result);
  });
};

PlanetView.prototype.displayResult = function (result) {
  const resultElement = document.querySelector('.planet-details');
    resultElement.textContent = `${result}`;
};

module.exports = PlanetView;
//
// AnimalInfoView.prototype.render = function(animal){
//   const infoParagraph = document.createElement('p');
//   infoParagraph.textContent = `The ${animal.species}, of class '${animal.class}', has a maximum speed of ${animal.maxSpeed} km/h.`;
//   this.container.innerHTML = '';
//   this.container.appendChild(infoParagraph);
