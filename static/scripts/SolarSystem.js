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
}
