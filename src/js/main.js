import * as THREE from "three";
import { animate, scene } from "./scene";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import camera from "./modules/camera";
import { mousePosition, rayCaster } from "./modules/mousePosition";

const renderer = new THREE.WebGLRenderer();
renderer.shadowMap.enabled = true;
// renderer.setClearColor(0x4ea48d);

renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const orbit = new OrbitControls(camera, renderer.domElement);
camera.position.set(-10, 30, 30);
orbit.update();

renderer.setAnimationLoop((time) => {
	rayCaster.setFromCamera(mousePosition, camera);
	const intersects = rayCaster.intersectObjects(scene.children);
	// console.log(intersects);

	animate(time, intersects);

	renderer.render(scene, camera);
});

window.addEventListener("resize", () => {
	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();
	renderer.setSize(window.innerWidth, window.innerHeight);
});
