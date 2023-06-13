import * as THREE from "https://unpkg.com/three@0.153.0/build/three.module.js";

let aspect = window.innerWidth / window.innerHeight;

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, aspect, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );


let resized = false

// resize event listener
window.addEventListener('resize', function() {
    resized = true
})

function animate(time) {
    time *= 0.001

    if (resized) resize()

    // rotate the cube
	cube.position.x = Math.sin(time) * 2
	cube.position.y = Math.cos(time) * 2
	cube.position.z = -5

    // render the view
    renderer.render(scene, camera)

    // animate
    requestAnimationFrame(animate)
}

function resize() {
    resized = false

    // update the size
    renderer.setSize(window.innerWidth, window.innerHeight)

    // update the camera
    const canvas = renderer.domElement
    camera.aspect = canvas.clientWidth/canvas.clientHeight
    camera.updateProjectionMatrix()
}

import WebGL from 'three/addons/capabilities/WebGL.js';

if ( WebGL.isWebGLAvailable() ) {

	// Initiate function or other initializations here
	animate();

} else {

	const warning = WebGL.getWebGLErrorMessage();
	document.getElementById( 'container' ).appendChild( warning );

}

//window.onresize = function(){ location.reload(); }

// ok so the user is like really done with their progress so far
// and they want to sum it up
// so they click the message text box and a best guess is made
// for the best way to sum up their progress so far