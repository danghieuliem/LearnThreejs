import {
	CameraHelper,
	DirectionalLight,
	DirectionalLightHelper,
	SpotLight,
	SpotLightHelper,
} from "three";
import { options, gui } from "../guiOptions/options";

const directionalLight = new DirectionalLight(0xffffff, 2);
directionalLight.position.set(-30, 50, 0);
directionalLight.castShadow = true;
directionalLight.shadow.camera.bottom = -12;

const dLightHepper = new DirectionalLightHelper(directionalLight, 5);

const dLightShadowHelper = new CameraHelper(directionalLight.shadow.camera);

const spotLight = new SpotLight(0xffffff);
spotLight.position.set(-200, 200, 0);
spotLight.castShadow = true;
spotLight.angle = 0.2;

const sLightHelper = new SpotLightHelper(spotLight);
gui.add(options, "angle", 0, 1);
gui.add(options, "penumbra", 0, 1);
gui.add(options, "intensity", 0, 1);

export {
	spotLight,
	sLightHelper,
	directionalLight,
	dLightHepper,
	dLightShadowHelper,
};
