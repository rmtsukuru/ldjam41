configureGraphics();
configureScene();
configureInput();

document.addEventListener('keydown', keyPressed);
document.addEventListener('keyup', keyReleased);
document.addEventListener('mousemove', mouseMoved);

var main = function() {
    requestAnimationFrame(main);
    updateScene();
    updateInput();
    renderer.render(scene, camera);
    drawHud();
};
window.onload = main;
