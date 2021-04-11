import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.118/build/three.module.js';

import {FBXLoader} from 'https://cdn.jsdelivr.net/npm/three@0.118.1/examples/jsm/loaders/FBXLoader.js';
import {GLTFLoader} from 'https://cdn.jsdelivr.net/npm/three@0.118.1/examples/jsm/loaders/GLTFLoader.js';
import {OrbitControls} from 'https://cdn.jsdelivr.net/npm/three@0.118/examples/jsm/controls/OrbitControls.js';


class BasicWorldDemo {
  constructor() {
    this._Initialize();
  }

  _Initialize() {
    this._threejs = new THREE.WebGLRenderer({
      antialias: true,
    });
    this._threejs.shadowMap.enabled = true;
    this._threejs.shadowMap.type = THREE.PCFSoftShadowMap;
    this._threejs.setPixelRatio(window.devicePixelRatio);
    this._threejs.setSize(window.innerWidth, window.innerHeight);

    document.body.appendChild(this._threejs.domElement);

    window.addEventListener('resize', () => {
      this._OnWindowResize();
    }, false);

    const fov = 60;
    const aspect = 1920 / 1080;
    const near = 1.0;
    const far = 1000.0;
    this._camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
    this._camera.position.set(75, 20, 0);

    this._scene = new THREE.Scene();

   // const interaction = new Interaction(this._threejs, this._scene, this._camera)
    let light = new THREE.DirectionalLight(0xFFFFFF, 1.0);
    light.position.set(20, 100, 10);
    light.target.position.set(0, 0, 0);
    light.castShadow = true;
    light.shadow.bias = -0.001;
    light.shadow.mapSize.width = 2048;
    light.shadow.mapSize.height = 2048;
    light.shadow.camera.near = 0.1;
    light.shadow.camera.far = 500.0;
    light.shadow.camera.near = 0.5;
    light.shadow.camera.far = 500.0;
    light.shadow.camera.left = 100;
    light.shadow.camera.right = -100;
    light.shadow.camera.top = 100;
    light.shadow.camera.bottom = -100;
    this._scene.add(light);

    light = new THREE.AmbientLight(0x101010);
    this._scene.add(light);

    const controls = new OrbitControls(
      this._camera, this._threejs.domElement);
    controls.target.set(0, 20, 0);
    controls.update();

    const loader = new THREE.CubeTextureLoader();
    const texture = loader.load([
        './resources/corona_rt.png',
        './resources/corona_ft.png',
        './resources/corona_up.png',
        './resources/corona_dn.png',
        './resources/corona_bk.png',
        './resources/corona_lf.png'
    ]);
    this._scene.background = texture;


    //cube 1
    const geometry = new THREE.BoxGeometry( 25, 20, 20);

    //adding texture 
    const textureCube = new THREE.TextureLoader().load('resources/timetravel.png');

    const material = new THREE.MeshBasicMaterial( {map: textureCube} );
    const cube = new THREE.Mesh( geometry, material );
    cube.position.set(10, 10, -20)
    this._scene.add( cube );
    cube.cursor = 'pointer';


    //cube 2
    const geometry2 = new THREE.BoxGeometry( 25, 20, 20);
      //adding texture 
      const textureCube2 = new THREE.TextureLoader().load('resources/dive.png');

      const material2 = new THREE.MeshBasicMaterial( {map: textureCube2} );
    
    const cube2 = new THREE.Mesh( geometry2, material2 );
    cube2.position.set(10,10,20)
    this._scene.add( cube2 );

    const domEvents = new THREEx.DomEvents(this._camera, this._threejs.domElement)
    domEvents.addEventListener(cube, 'click', event => {
      window.location.replace('/aracade.html')
    })

    domEvents.addEventListener(cube2, 'click', event => {
      window.location.replace('/timeline.html')
    })

    this._RAF();
  }

  _OnWindowResize() {
    this._camera.aspect = window.innerWidth / window.innerHeight;
    this._camera.updateProjectionMatrix();
    this._threejs.setSize(window.innerWidth, window.innerHeight);
  }

  

  _RAF() {
    requestAnimationFrame(() => {
      this._threejs.render(this._scene, this._camera);
      this._RAF();
    });
  }


}


let _APP = null;

window.addEventListener('DOMContentLoaded', () => {
  _APP = new BasicWorldDemo();
});
