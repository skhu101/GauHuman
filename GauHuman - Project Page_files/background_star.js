import * as THREE from 'https://cdn.skypack.dev/three'

import Stats from 'https://cdnjs.cloudflare.com/ajax/libs/stats.js/r17/Stats.min.js';

import {GUI} from './libs/dat.gui.js';

let camera, scene, renderer, stats, material;
let mouseX = 0, mouseY = 0;

let windowHalfX = window.innerWidth / 2;
let windowHalfY = window.innerHeight / 2;

let isOn = false;

// init();
// animate();

function init() {

    camera = new THREE.PerspectiveCamera( 55, window.innerWidth / window.innerHeight, 2, 2000 );
    camera.position.z = 1000;

    scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2( 0x000000, 0.001 );

    const geometry = new THREE.BufferGeometry();
    const vertices = [];

    const sprite = new THREE.TextureLoader().load( 'assets/images/disc.png' );

    for ( let i = 0; i < 10000; i ++ ) {

        const x = 2000 * Math.random() - 1000;
        const y = 2000 * Math.random() - 1000;
        const z = 2000 * Math.random() - 1000;

        vertices.push( x, y, z );

    }

    geometry.setAttribute( 'position', new THREE.Float32BufferAttribute( vertices, 3 ) );

    material = new THREE.PointsMaterial( { size: 35, sizeAttenuation: true, map: sprite, alphaTest: 0.5, transparent: true } );
    material.color.setHSL( 1.0, 0.3, 0.7 );

    const particles = new THREE.Points( geometry, material );
    scene.add( particles );

    //

    // renderer = new THREE.WebGLRenderer();
    renderer = new THREE.WebGLRenderer({
        canvas: document.querySelector("#bg"),
    });
    // renderer.setClearColor( 0xffffff, 0.1);
    renderer.setPixelRatio( window.devicePixelRatio );
    renderer.setSize( window.innerWidth, window.innerHeight );
    // document.body.appendChild( renderer.domElement );

    //

    // stats = new Stats();
    // document.querySelector("#bg").appendChild( stats.dom );

    //

    // const gui = new GUI();

    // gui.add( material, 'sizeAttenuation' ).onChange( function () {

    //     material.needsUpdate = true;

    // } );

    // gui.open();

    //

    document.body.style.touchAction = 'none';
    document.body.addEventListener( 'pointermove', onPointerMove );

    //

    window.addEventListener( 'resize', onWindowResize );

}

function onWindowResize() {

    windowHalfX = window.innerWidth / 2;
    windowHalfY = window.innerHeight / 2;

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize( window.innerWidth, window.innerHeight );

}

function onPointerMove( event ) {

    if ( event.isPrimary === false ) return;

    mouseX = event.clientX - windowHalfX;
    mouseY = event.clientY - windowHalfY;

}

//

function animate() {

    requestAnimationFrame( animate );

    render();
    // stats.update();

}

function render() {

    const time = Date.now() * 0.00005;

    camera.position.x += ( mouseX - camera.position.x ) * 0.005;
    camera.position.y += ( - mouseY - camera.position.y ) * 0.005;

    camera.lookAt( scene.position );

    const h = ( 360 * ( 1.0 + time ) % 360 ) / 360;
    material.color.setHSL( h, 0.5, 0.5 );

    renderer.render( scene, camera );

}

const heart = document.querySelector('#icon');
heart.addEventListener('click', turnOn);

function turnOn() {
    if (! isOn) {
        var canvas = document.createElement("canvas");
        canvas.setAttribute("id", "bg");
        document.body.appendChild(canvas); 
        init();
        animate();
        isOn = true;
        var footer = document.getElementById("copyright");
        footer.setAttribute("style", "color: #ffffff;");
    } else {
        var canvas = document.getElementById("bg");
        canvas.parentNode.removeChild(canvas);
        isOn = false;
        var footer = document.getElementById("copyright");
        footer.setAttribute("style", "color: #494949;");
    }
}
