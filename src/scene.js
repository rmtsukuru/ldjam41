var scene, camera, cube;

const PLAYER_SPEED = 0.1;
const PLAYER_TURN_SPEED = 0.05;

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
        camera.position.z -= Math.cos(camera.rotation.y) * PLAYER_SPEED;
        camera.position.x -= Math.sin(camera.rotation.y) * PLAYER_SPEED;
    }
    if (keyState.down) {
        camera.position.z += Math.cos(camera.rotation.y) * PLAYER_SPEED;
        camera.position.x += Math.sin(camera.rotation.y) * PLAYER_SPEED;
    }
    if (keyState.left) {
        camera.position.x -= Math.cos(-1 * camera.rotation.y) * PLAYER_SPEED;
        camera.position.z -= Math.sin(-1 * camera.rotation.y) * PLAYER_SPEED;
    }
    if (keyState.right) {
        camera.position.x += Math.cos(-1 * camera.rotation.y) * PLAYER_SPEED;
        camera.position.z += Math.sin(-1 * camera.rotation.y) * PLAYER_SPEED;
    }
    if (keyState.a) {
        camera.rotation.y += PLAYER_TURN_SPEED;
    }
    if (keyState.d) {
        camera.rotation.y -= PLAYER_TURN_SPEED;
    }
}
