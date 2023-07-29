import {
	DoubleSide,
	Mesh,
	MeshBasicMaterial, // don`t have shadow
	MeshStandardMaterial,
	PlaneGeometry,
} from "three";
import { options, gui } from "../guiOptions/options";

const planeGeometry = new PlaneGeometry(30, 30);
const planeMaterial = new MeshStandardMaterial({
	color: options.planeColor,
	side: DoubleSide,
});
const plane = new Mesh(planeGeometry, planeMaterial);
plane.rotation.x = -0.5 * Math.PI;
plane.receiveShadow = true;

gui.addColor(options, "planeColor").onChange((e) => {
	plane.material.color.set(e);
});

gui.add(options, "planeWireframe").onChange((e) => {
	plane.material.wireframe = e;
});

export default plane;
