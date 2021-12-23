class SolarSystem {
  generateSun() {
    const sun = document.createElement("a-sphere");

    sun.setAttribute("src", "#sun");
    sun.setAttribute("position", "-81 88 -108");
    sun.setAttribute("radius", "6");

    const aScene = document.querySelector("a-scene");
    aScene.appendChild(sun);
  }

  generatePlanets(planets) {
    for (let planet of planets) {
      const sphere = document.createElement("a-sphere");

      sphere.setAttribute("src", planet.src);
      sphere.setAttribute("position", planet.position);
      sphere.setAttribute("radius", planet.radius);
      sphere.setAttribute("animation", planet.animation);
      const aScene = document.querySelector("a-scene");

      aScene.appendChild(sphere);
    }
  }

  generateRings(planets) {
    const aScene = document.querySelector("a-scene");

    for (let planet of planets) {
      for (let ring of planet.rings) {
        const torus = document.createElement("a-torus");
        torus.setAttribute("position", planet.position);
        torus.setAttribute("color", ring.color);
        torus.setAttribute("segments-tubular", ring.segments_tubular);
        torus.setAttribute("radius", ring.radius);
        torus.setAttribute("radius-tubular", ring.radius_tubular);
        torus.setAttribute("rotation", ring.rotation);
        torus.setAttribute("scale", ring.scale);
        aScene.appendChild(torus);
      }
    }
  }

  generateAsteroids() {
    const aScene = document.querySelector("a-scene");

    for (let i = 0; i < 20; i++) {
      const asteroid = document.createElement("a-entity");
      asteroid.setAttribute("class", "asteroid_model");
      asteroid.setAttribute("gltf-model", "#asteroid");
      asteroid.setAttribute("scale", "0.2 0.2 0.2");
      asteroid.setAttribute("animation", "property: rotation; to: 0 360 0; loop: true; dur: 20000");
      aScene.appendChild(asteroid);
    }
  }

  generateOrnamentStrings(planets) {
    const aScene = document.querySelector("a-scene");

    for (let planet of planets) {
      const ornamentString  = document.createElement("a-entity");
      ornamentString.setAttribute("gltf-model", "#ornament-string");
      ornamentString.setAttribute("position", planet.ornamentString.position);
      ornamentString.setAttribute("scale", planet.ornamentString.scale);
      ornamentString.setAttribute("rotation", planet.ornamentString.rotation);
      aScene.appendChild(ornamentString);
    }
  }
}
