import { player } from './player.js';

export function saveGame(){
localStorage.setItem("echoSave",JSON.stringify(player));
}

export function loadGame(){
let data=localStorage.getItem("echoSave");
if(data){
Object.assign(player,JSON.parse(data));
}
}
