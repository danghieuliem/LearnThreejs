import { PerspectiveCamera } from "three";
const camera = new PerspectiveCamera(
	100,
	window.innerWidth / window.innerHeight,
	0.1,
	1000
);

export default camera;
