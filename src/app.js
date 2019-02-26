const planetsData = require('./data/planets.js');
const SolarSystem = require('./models/solar_system.js');
const NavigationView = require('./views/navigation_view.js');
const PlanetView = require('./views/planet_view.js');

document.addEventListener('DOMContentLoaded', () => {
  const planetsDataModel = new SolarSystem(planetsData);
  planetsDataModel.bindEvents();

  console.log(planetsDataModel.planets);

  const navigationView = new NavigationView();
  navigationView.bindEvents();

  const planetView = new PlanetView();
  planetView.bindEvents();

});
