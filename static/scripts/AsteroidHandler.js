class AsteroidHandler {
    generateNewPosition() {
        const xPosition = Math.random() * (1000 - -1000) + -1000;
        const yPosition = Math.random() * (1000 - -1000) + -1000;
        const zPosition = Math.random() * (1000 - -1000) + -1000;

        return [xPosition, yPosition, zPosition]
    }

    collateAsteroids() {
        return document.querySelectorAll(".asteroid_model");
    }

    setInitialPosition(positions, asteroid) {
        asteroid.setAttribute("position", `${positions[0]} ${positions[1]} ${positions[2]}`);
    }

    travelToNewPosition(positions, asteroid) {
        asteroid.setAttribute("animation__2", `property: position; to: ${positions[0]} ${positions[1]} ${positions[2]}; dur: 100000`);
    }
}