var scene, camera, cube;

const PLAYER_SPEED = 2;
const PLAYER_TURN_SPEED = 0.05;

function configureScene() {
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

    var geometry = new THREE.BoxGeometry(1, 1, 1);
    var material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    var ambientLight = new THREE.AmbientLight(0x404040);
    var directionalLight1 = new THREE.DirectionalLight(0xC0C090);
    var directionalLight2 = new THREE.DirectionalLight(0xC0C090);
    directionalLight1.position.set(-100, -50, 100);
    directionalLight2.position.set(100, 50, -100);
    this.scene.add(directionalLight1);
    this.scene.add(directionalLight2);
    this.scene.add(ambientLight);

    loadModel('House', '', { x: -50, y: 5 });
    loadModel('Player', '', { x: 80, z: 250 });

    var helper = new THREE.GridHelper(1200, 60, 0xFF4444, 0x404040);
    this.scene.add(helper);

    camera.position.z = 500;
    camera.position.y = 100;
    cube.position.x = 2;
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
