import * as THREE from "three";
import Sphere from "./modules/sphere";
import Box from "./modules/box";
import BoxTexture from "./modules/boxTexture";
import Plane from "./modules/plane";
import GridHelper from "./modules/gridHelper";
import AmbientLight from "./modules/ambientLight";
import { options } from "./guiOptions/options";
import { gui } from "./guiOptions/options";

import SmallSpace from "./imgs/smallSpace.jpg";
import {
	dLightHepper,
	dLightShadowHelper,
	directionalLight,
	sLightHelper,
	spotLight,
} from "./modules/light";
import { planeWall, lastPositionZ } from "./modules/planeWall";
import sphereShader from "./modules/sphereShader";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const scene = new THREE.Scene();
const axesHelper = new THREE.AxesHelper(5);

const cubeTextureLoader = new THREE.CubeTextureLoader();
scene.background = cubeTextureLoader.load([
	SmallSpace,
	SmallSpace,
	SmallSpace,
	SmallSpace,
	SmallSpace,
	SmallSpace,
]);

// scene.fog = new THREE.Fog(0xffffff, 0, 150);
// scene.fog = new THREE.FogExp2(0xffffff, 0.01);

const phoenix_bird = new URL("../assets/phoenix_bird.glb", import.meta.url);
const assetsLoader = new GLTFLoader();

assetsLoader.load(
	phoenix_bird.href,
	(gltf) => {
		scene.add(gltf.scene);
		gltf.scene.position.set(-12, -200, 10);
	},
	undefined,
	(error) => {
		console.log(error);
	}
);

scene.add(
	axesHelper,
	Box,
	Plane,
	GridHelper,
	Sphere,
	AmbientLight,
	// directionalLight,
	// dLightHepper,
	// dLightShadowHelper,
	spotLight,
	sLightHelper,
	BoxTexture,
	planeWall,
	sphereShader
	// phoenixModel
);

let step = 0;
let speed = 0.01;

gui.add(options, "sphereSpeed", 0, 0.1).onChange((e) => {
	speed = e;
});

const animate = (time, intersects = []) => {
	Box.rotation.x = time / 1000;
	Box.rotation.y = time / 1000;
	Sphere.rotation.x = time / 1000;
	Sphere.rotation.y = time / 1000;

	step += speed;

	spotLight.angle = options.angle;
	spotLight.penumbra = options.penumbra;
	spotLight.intensity = options.intensity;

	sLightHelper.update();

	Sphere.position.y = 5 * Math.abs(Math.sin(step)) + 4;
	intersects
		.find((e) => e.object.id === Sphere.id)
		?.object.material.color.set(0xaaaaaa);

	const fundedBox = intersects.find((e) => e.object.name === "boxTexture");
	if (fundedBox) {
		fundedBox.object.rotation.x = time / 1000;
		fundedBox.object.rotation.y = time / 1000;
	}

	planeWall.position.set(10, 10, 15);
	planeWall.geometry.attributes.position.array[0] = 10 * Math.random();
	planeWall.geometry.attributes.position.array[1] = 10 * Math.random();
	planeWall.geometry.attributes.position.array[2] = 10 * Math.random();
	planeWall.geometry.attributes.position.array[lastPositionZ] =
		10 * Math.random();
	planeWall.geometry.attributes.position.needsUpdate = true;
};

export { animate, scene };
