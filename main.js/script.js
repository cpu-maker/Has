import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.158/build/three.module.js';
import { generateWorld } from './world.js';
import { initPlayer, updatePlayer } from './player.js';
import { spawnEnemies, updateEnemies } from './enemies.js';
import { initCombat } from './combat.js';
import { initSkills } from './skills.js';
import { initInventory } from './inventory.js';
import { generateDungeon } from './dungeon.js';
import { initUI, updateUI } from './ui.js';
import { saveGame, loadGame } from './save.js';

let scene, camera, renderer, clock;

init();
animate();

function init() {
scene = new THREE.Scene();
scene.fog = new THREE.FogExp2(0x000011,0.002);

camera = new THREE.PerspectiveCamera(75,1920/1080,0.1,5000);

renderer = new THREE.WebGLRenderer({canvas:gameCanvas});
renderer.setSize(1920,1080);
renderer.setPixelRatio(window.devicePixelRatio);

clock = new THREE.Clock();

scene.add(new THREE.AmbientLight(0xffffff,0.6));
let light=new THREE.DirectionalLight(0xffffff,1);
light.position.set(200,400,200);
scene.add(light);

generateWorld(scene);
generateDungeon(scene);
initPlayer(scene,camera);
spawnEnemies(scene,12);
initCombat(scene);
initSkills();
initInventory();
initUI();

loadGame();
}

function animate(){
requestAnimationFrame(animate);
let delta = clock.getDelta();

updatePlayer(delta);
updateEnemies(delta);
updateUI();

renderer.render(scene,camera);
}
