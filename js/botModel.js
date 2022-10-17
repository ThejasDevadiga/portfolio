import '../css/style.css'
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls'
import * as THREE from 'three' ;
import {loadModel} from './bots'

const loader = new THREE.TextureLoader();
const earthTexture = loader.load('./images/earth.jpg')
const galaxyTexture = loader.load('./images/milky-way.jpg')
const AITexture = loader.load('./images/ai.jpg')
 
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(70, 0.5, .1, 1000)
var fullScreen = false
var stream ='/audio.m4a'
var audioLoader = new THREE.AudioLoader();
var listener = new THREE.AudioListener();
var audio = new THREE.Audio(listener);

const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#canvas'),
  alpha:true
})

scene.background =galaxyTexture

const canvas = renderer.domElement;





camera.position.set(0,0,2)



// var domEvents	= new THREEx.DomEvents(camera, renderer.domElement)

function resizeCanvasToDisplaySize() {
 
  const width = canvas.clientWidth;
  const height = canvas.clientHeight;

  if (canvas.width !== width || canvas.height !== height) {
    renderer.setSize(width, height, false);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    renderer.setPixelRatio(window.devicePixelRatio)
    renderer.setSize(window.innerWidth/1.7, window.innerHeight/1.1)
  }
}
function fullScreenMode(){
  fullScreen = true
  const width = canvas.clientWidth;
  const height = canvas.clientHeight;

  if (canvas.width !== width || canvas.height !== height) {
    renderer.setSize(width, height, false);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    renderer.setPixelRatio(window.devicePixelRatio)
  renderer.setSize(window.innerWidth, window.innerHeight)

  }
}

var redLight = false
var whiteLight = true
var greenLight = false
var blueLight = false
var blackLight = false
var yellowLight = false
var rotateRobo = false

const red = new THREE.SpotLight('red',2)
const white = new THREE.SpotLight('white',2)
const green = new THREE.SpotLight('green',2)
const blue = new THREE.SpotLight('blue',2)
const yellow = new THREE.SpotLight('yellow',2)
const earthLight = new THREE.PointLight('white',2)




 
const backwallGeometry = new THREE.BoxGeometry( 25, 25, 1 );
const Bwallmaterial = new THREE.MeshBasicMaterial( {map: AITexture} );
const backWall = new THREE.Mesh( backwallGeometry, Bwallmaterial );
const LsidewallGeometry = new THREE.BoxGeometry( 2,30 ,30 );
const Lwallmaterial = new THREE.MeshBasicMaterial( {map: AITexture} );
const LsideWall = new THREE.Mesh( LsidewallGeometry, Lwallmaterial );
const RsidewallGeometry = new THREE.BoxGeometry( 2, 30,30 );
const Rwallmaterial = new THREE.MeshBasicMaterial( {map: AITexture} );
const RsideWall = new THREE.Mesh( RsidewallGeometry, Rwallmaterial );
const floorGeometry = new THREE.BoxGeometry( 3, 0.5,3 );
const floormaterial = new THREE.MeshBasicMaterial( {color: '#456c82'} );
const floor = new THREE.Mesh( floorGeometry, floormaterial );
const eartchGeo = new THREE.SphereGeometry( 1.8, 64, 16 );
const globematerial = new THREE.MeshStandardMaterial( { map: earthTexture } );
const earth = new THREE.Mesh( eartchGeo, globematerial );


RsideWall.rotateY(10)
LsideWall.rotateY(-10)
LsideWall.position.set(-30,3,-10)
RsideWall.position.set(30,3,-10)

red.position.set(0,1.5,1.9)
yellow.position.set(0,1.5,1.9)
blue.position.set(0,1.5,1.9)
green.position.set(0,1.5,1.9)
white.position.set(0,1.5,1.9)
backWall.position.set(0,0,-20)
floor.position.set(0,-3,0)
earth.position.set(0,0,3 ) 
earthLight.position.set(0,1.5,-1)

const gridhelper = new THREE.GridHelper(200,50)
const controls = new  OrbitControls(camera, renderer.domElement);
controls.enablePan = false;
controls.enableZoom = false;
controls.minPolarAngle = (90 - 10) * Math.PI / 180;
controls.maxPolarAngle = (90 + 10) * Math.PI / 180;

// controls.maxAzimuthAngle = 100 * Math.PI / 180;
controls.minAzimuthAngle = 260 * Math.PI / 180;


 
loadModel(scene)
  
 

scene.add(LsideWall)
scene.add(RsideWall)
scene.add(floor)
scene.add(backWall)
scene.add(white) 
scene.add( earth )
scene.add(earthLight)











function animate(){
  earth.rotateY(0.005)
  earth.rotateX(0.001)
  if(redLight){ scene.add(red)}
  else{scene.remove(red)}
  if(greenLight){scene.add(green)}
  else{scene.remove(green)}
  if(blueLight){scene.add(blue)}
  else{scene.remove(blue)}
  if(whiteLight){scene.add(white)} 
  else{scene.remove(white)}
  if(yellowLight){scene.add(yellow)}
  else{scene.remove(yellow)}
  if(rotateRobo){camera.position.X +=1}
  if (!(fullScreen)){resizeCanvasToDisplaySize();}
  requestAnimationFrame(animate);
  renderer.render(scene,camera);
}


var redElement = document.getElementById("red");
var blueElement = document.getElementById("blue");
var yellowElement = document.getElementById("yellow");
var greenElement = document.getElementById("green");
var whiteElement = document.getElementById("white");
var talkElement = document.getElementById("talk");


redElement.addEventListener("click", redclicked);
blueElement.addEventListener("click", blueclicked);
yellowElement.addEventListener("click", yellowclicked);
greenElement.addEventListener("click",greenclicked );
whiteElement.addEventListener("click", whiteclicked);
talkElement.addEventListener("click", talkclicked);




function redclicked(){
  console.log(controls.getAzimuthalAngle());
  if(!(redLight)){redLight = true  ,whiteLight = false}else{redLight = false, whiteLight = true}
  

 greenLight = false
 blueLight = false
 blackLight = false
 yellowLight = false
}

function blueclicked(){
  if(!(blueLight)){blueLight = true  ,whiteLight = false}else{blueLight = false, whiteLight = true}

    redLight = false

 greenLight = false
 blackLight = false
 yellowLight = false
//  if(!(fullScreen)){
//  fullScreenMode()}
//  else{fullScreen=false}

}

function yellowclicked(){
  if(!(yellowLight)){yellowLight = true  ,whiteLight = false}else{yellowLight = false, whiteLight = true}
   redLight = false
 greenLight = false
 blueLight = false
 blackLight = false
}

function greenclicked(){
  if(!(greenLight)){greenLight = true  ,whiteLight = false}else{greenLight = false, whiteLight = true}
   redLight = false
   blueLight = false
   blackLight = false
   yellowLight = false
}

function whiteclicked(){

  whiteLight = true
   redLight = false
 greenLight = false
 blueLight = false
 blackLight = false
 yellowLight = false
}

function talkclicked(){
  
    audioLoader.load(stream, function(buffer) {
        audio.setBuffer(buffer);
        audio.setLoop(false);
        audio.play();
    });


} 

animate();
 


