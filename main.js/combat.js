import { player } from './player.js';
import { enemies } from './enemies.js';

export function initCombat(){

document.addEventListener("mousedown",()=>melee());

document.addEventListener("keydown",e=>{
if(e.code==="KeyR") ranged();
if(e.code==="KeyF") fireball();
});
}

function melee(){
enemies.forEach(e=>{
if(e.mesh.position.distanceTo(player.object.position)<15){
e.health-=25;
}
});
}

function ranged(){
if(player.stamina<15)return;
player.stamina-=15;
}

function fireball(){
if(player.mana<20)return;
player.mana-=20;
}
