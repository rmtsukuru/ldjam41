var renderer;

function configureGraphics() {
    renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth * 0.995, window.innerHeight * 0.995);
    document.body.appendChild(renderer.domElement);
}
