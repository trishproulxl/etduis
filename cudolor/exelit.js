const scene = new THREE.Scene();
const material = new THREE.MeshBasicMaterial({ color: 0x696969 });
const cube = new THREE.Mesh(new THREE.BoxGeometry(), material);
scene.add(cube);
