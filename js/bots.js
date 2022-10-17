import {GLTFLoader} from 'three/addons/loaders/GLTFLoader.js'

const loader = new GLTFLoader();


export  function loadModel(scene){

// robo1
loader.load('../models/scene.gltf', function(robo1){
    robo1.scene.position.set(0,1,-1)
    // robo1.scene.scale.set(0.1,0.1,0.1)
    scene.add(robo1.scene);
  },undefined, function(err){ console.log(err); });
  loader.load('../models/scene.gltf', function(robo1){
    robo1.scene.position.set(0,1,-1)
    // robo1.scene.scale.set(0.1,0.1,0.1)
    scene.add(robo1.scene);
  },undefined, function(err){ console.log(err); });

}


