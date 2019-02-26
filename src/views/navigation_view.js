const PubSub = require('../helpers/pub_sub.js')

const NavigationView = function () {

};

NavigationView.prototype.bindEvents = function () {
  const navigationBar = document.querySelector('.planets-menu');
    navigationBar.addEventListener('click', (evt) => {
    const clickedPlanet = evt.target.id;
    PubSub.publish('NavigationView:planet-clicked', clickedPlanet)
    console.log(clickedPlanet);
  });
};

module.exports = NavigationView;
