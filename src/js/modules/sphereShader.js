import {
	Mesh,
	MeshBasicMaterial, // don`t have shadow
	MeshStandardMaterial,
	ShaderMaterial,
	SphereGeometry,
} from "three";

const sphereGeometry = new SphereGeometry(4);

// const vShader = `
//   void main() {
//     gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
//   }
// `;

// const fShader = `
//   void main() {
//     gl_FragColor = vec4(0.5, 0.5, 1.0, 1.0);
//   }
// `;

const sphereMaterial = new ShaderMaterial({
	vertexShader: document.getElementById("vertexShader").textContent,
	fragmentShader: document.getElementById("fragmentShader").textContent,
});

const sphereShader = new Mesh(sphereGeometry, sphereMaterial);

sphereShader.position.set(-5, 10, 10);
sphereShader.castShadow = true;

export default sphereShader;
