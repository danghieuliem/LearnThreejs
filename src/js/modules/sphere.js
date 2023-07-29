import {
	Mesh,
	MeshBasicMaterial, // don`t have shadow
	MeshStandardMaterial,
	SphereGeometry,
	TextureLoader,
} from "three";
import { options, gui } from "../guiOptions/options";
import Nebula from "../imgs/nebula.jpg";

const sphereGeometry = new SphereGeometry(4, 20, 20);
const textureLoader = new TextureLoader();
const sphereMaterial = new MeshStandardMaterial({
	color: options.sphereColor,
	wireframe: options.sphereWireframe,
	map: textureLoader.load(Nebula),
});

const sphere = new Mesh(sphereGeometry, sphereMaterial);

sphere.position.set(-10, 10, 0);
sphere.castShadow = true;

gui.addColor(options, "sphereColor").onChange((e) => {
	sphere.material.color.set(e);
});

gui.add(options, "sphereWireframe").onChange((e) => {
	sphere.material.wireframe = e;
});

export default sphere;
