configureGraphics();
configureScene();
configureInput();

document.addEventListener('keydown', keyPressed);
document.addEventListener('keyup', keyReleased);

var main = function() {
    requestAnimationFrame(main);
    updateScene();
    updateInput();
    renderer.render(scene, camera);
};
main();
