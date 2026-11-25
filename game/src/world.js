import {TILE,W,H,INGREDIENTS,RECIPES,COLORS,TIME,BIN_ORDER} from './config.js';
export class Ingredient{constructor(type,x=0,y=0){this.type=type;this.x=x;this.y=y;this.state='raw';this.held=false}}
export class Plate{constructor(x=0,y=0){this.x=x;this.y=y;this.items=[];this.ready=false}}
export class World{
 constructor(seed=1){this.seed=seed;this.rng=()=>{seed=(seed*1664525+1013904223)>>>0;return seed/4294967296};this.score=0;this.combo=0;this.lives=3;this.clock=TIME.day;this.orders=[];this.spawnClock=0;this.particles=[];this.popups=[];this.held=[];this.plate=new Plate(1020,560);this.chef={x:560,y:500,face:1};this.stations={board:{x:380,y:490},stove:{x:700,y:490},serve:{x:1090,y:300},trash:{x:180,y:550}};this.bins=BIN_ORDER.map((type,i)=>({type,x:55+(i%5)*105,y:250+Math.floor(i/5)*105}));this.spawnOrder();this.spawnOrder();this.spawnOrder()}
 spawnOrder(){let r=RECIPES[Math.floor(this.rng()*RECIPES.length)];this.orders.push({id:Math.random(),recipe:r,patience:TIME.patience,max:TIME.patience})}
 step(dt){if(this.clock>0)this.clock=Math.max(0,this.clock-dt);this.spawnClock+=dt;if(this.spawnClock>TIME.spawn&&this.orders.length<4){this.spawnClock=0;this.spawnOrder()}for(const o of this.orders)o.patience-=dt;for(let i=this.orders.length-1;i>=0;i--)if(this.orders[i].patience<=0){this.orders.splice(i,1);this.lives--;this.combo=0;this.spawnOrder()}this.particles=this.particles.filter(p=>(p.life-=dt)>0);this.popups=this.popups.filter(p=>(p.life-=dt)>0)}
 addParticle(x,y,color=COLORS.gold){for(let i=0;i<8;i++)this.particles.push({x,y,vx:(this.rng()-.5)*100,vy:(this.rng()-.8)*100,life:.7,color})}
 orderMatches(){let types=this.plate.items.map(i=>i.type).sort().join(',');return this.orders.findIndex(o=>o.recipe.items.slice().sort().join(',')===types&&this.plate.items.every(i=>i.state==='cooked'||!o.recipe.cook&&i.state!=='raw'))}
}
