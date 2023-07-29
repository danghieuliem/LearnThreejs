import {
	BoxGeometry,
	Mesh,
	MeshBasicMaterial, // don`t have shadow
	MeshStandardMaterial,
	TextureLoader,
} from "three";

// import Nebula from "../imgs/nebula.jpg";
// import Space from "../imgs/space.jpg";
import SmallSpace from "../imgs/smallSpace.jpg";

const textureLoader = new TextureLoader();
// scene.background = textureLoader.load(SmallSpace);
const box2Geometry = new BoxGeometry(4, 4, 4);
const box2Material = new MeshStandardMaterial({
	// color: 0x00ff00,
	// map: textureLoader.load(Nebula),
});
const box2MultiMaterial = [
	// new MeshBasicMaterial({ map: textureLoader.load(Space) }),
	// new MeshBasicMaterial({ map: textureLoader.load(Space) }),
	// new MeshBasicMaterial({ map: textureLoader.load(Nebula) }),
	// new MeshBasicMaterial({ map: textureLoader.load(Space) }),
	// new MeshBasicMaterial({ map: textureLoader.load(Nebula) }),
	// new MeshBasicMaterial({ map: textureLoader.load(Space) }),

	new MeshBasicMaterial({ map: textureLoader.load(SmallSpace) }),
	new MeshBasicMaterial({ map: textureLoader.load(SmallSpace) }),
	new MeshBasicMaterial({ map: textureLoader.load(SmallSpace) }),
	new MeshBasicMaterial({ map: textureLoader.load(SmallSpace) }),
	new MeshBasicMaterial({ map: textureLoader.load(SmallSpace) }),
	new MeshBasicMaterial({ map: textureLoader.load(SmallSpace) }),
];
const Box = new Mesh(box2Geometry, box2MultiMaterial);
Box.position.set(0, 15, 10);
// Box.material.map = textureLoader.load(Nebula);

Box.name = "boxTexture";

export default Box;
