import {
	BoxGeometry,
	Mesh,
	MeshBasicMaterial, // don`t have shadow
	MeshStandardMaterial,
} from "three";
import { options, gui } from "../guiOptions/options";

const boxGeometry = new BoxGeometry();
const boxMaterial = new MeshStandardMaterial({ color: options.boxColor });
const box = new Mesh(boxGeometry, boxMaterial);
box.position.y = 2;
box.castShadow = true;

gui.addColor(options, "boxColor").onChange((e) => {
	box.material.color.set(e);
});
gui.add(options, "boxWireframe").onChange((e) => {
	box.material.wireframe = e;
});

export default box;
