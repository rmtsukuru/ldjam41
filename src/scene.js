var scene, camera, cube;

const PLAYER_SPEED = 0.1;

function configureScene() {
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

    var geometry = new THREE.BoxGeometry(1, 1, 1);
    var material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    camera.position.z = 5;
}

function updateScene() {
    cube.rotation.x += 0.05;
    cube.rotation.y += 0.05;

    if (keyState.up) {
        camera.position.z -= PLAYER_SPEED;
    }
    if (keyState.down) {
        camera.position.z += PLAYER_SPEED;
    }
    if (keyState.left) {
        camera.position.x -= PLAYER_SPEED;
    }
    if (keyState.right) {
        camera.position.x += PLAYER_SPEED;
    }
}
