import * as dat from "dat.gui";
const gui = new dat.GUI();

const options = {
	boxColor: 0x00ff00,
	boxWireframe: false,
	planeColor: 0xffffff,
	planeWireframe: false,
	sphereColor: 0x0000ff,
	sphereWireframe: false,
	sphereSpeed: 0.01,
	angle: 0.2,
	penumbra: 0,
	intensity: 1,
};
export { gui, options };
