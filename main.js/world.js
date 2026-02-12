import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.158/build/three.module.js';

export function generateWorld(scene){

let geo = new THREE.PlaneGeometry(2000,2000,200,200);
geo.rotateX(-Math.PI/2);
let pos = geo.attributes.position;

for(let i=0;i<pos.count;i++){
pos.setY(i,Math.sin(i/8)*4+Math.random()*3);
}

scene.add(new THREE.Mesh(
geo,
new THREE.MeshStandardMaterial({color:0x224422})
));

// Water
let water = new THREE.Mesh(
new THREE.CircleGeometry(250,64),
new THREE.MeshStandardMaterial({color:0x2244aa,transparent:true,opacity:0.7})
);
water.rotation.x=-Math.PI/2;
water.position.y=2;
scene.add(water);

// Day/Night
setInterval(()=>{
let t=Date.now()*0.00005;
scene.background=new THREE.Color().setHSL(0.6,0.5,0.5*Math.sin(t)+0.5);
},50);
}
