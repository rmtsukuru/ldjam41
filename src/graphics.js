var renderer;

function configureGraphics() {
    renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth * 0.995, window.innerHeight * 0.995);
    document.body.appendChild(renderer.domElement);
}

function loadModel(filename, name, position) {
    var loader = new THREE.OBJLoader2();
    name = name || filename;
    loader.loadMtl('graphics/' + filename + '.mtl', null, function(materials) {
        loader.setModelName = name;
        loader.setMaterials(materials);
        loader.setLogging(true, true);
        loader.load('graphics/' + filename + '.obj', function(event) {
            var model = event.detail.loaderRootNode;
            scene.add(model);
            model.position.x = position.x || 0;
            model.position.y = position.y || 0;
            model.position.z = position.z || 0;
        }, null, null, null, false);
    });
}
