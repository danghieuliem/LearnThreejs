import {
	Mesh,
	MeshBasicMaterial, // don`t have shadow
	MeshStandardMaterial,
	PlaneGeometry,
} from "three";

const sphereGeometry = new PlaneGeometry(10, 10, 10, 10);
const sphereMaterial = new MeshBasicMaterial({
	color: 0xffffff,
	wireframe: true,
});

const planeWall = new Mesh(sphereGeometry, sphereMaterial);

planeWall.position.set(10, 10, 15);
planeWall.geometry.attributes.position.array[0] -= 10 * Math.random();
planeWall.geometry.attributes.position.array[1] -= 10 * Math.random();
planeWall.geometry.attributes.position.array[2] -= 10 * Math.random();
const lastPositionZ = planeWall.geometry.attributes.position.array.length - 1;
planeWall.geometry.attributes.position.array[lastPositionZ] -=
	10 * Math.random();

export { planeWall, lastPositionZ };
