class SolarSystem {
  generateSun() {
    const sun = document.createElement("a-sphere");

    sun.setAttribute("src", "#sun");
    sun.setAttribute("position", "-30 2 -10");
    sun.setAttribute("radius", "4");

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

  generateLabels(planets) {
    const sunLabel = document.createElement("a-text");
    const aScene = document.querySelector("a-scene");
    sunLabel.setAttribute("value", "Sun");
    sunLabel.setAttribute("color", "#FFEE00");
    sunLabel.setAttribute("position", "-30 7 -10");
    sunLabel.setAttribute("scale", "3 3 3");
    aScene.appendChild(sunLabel);

    for (let planet of planets) {
      const label = document.createElement("a-text");
      label.setAttribute("value", planet.name);
      label.setAttribute("color", "#FFEE00");
      let positionValues = planet.position.split(" ");
      let newHeight = parseInt(positionValues[1]) + 1.5;
      positionValues[1] = newHeight.toString();
      let newPositionValues = positionValues.toString();
      newPositionValues = newPositionValues.replaceAll(",", " ");
      label.setAttribute("position", newPositionValues);
      label.setAttribute("scale", "3 3 3");
      aScene.appendChild(label);
    }
  }
}
