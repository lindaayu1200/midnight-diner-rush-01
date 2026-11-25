export const TILE=64, W=1280, H=720;
export const COLORS={ink:'#090d1b',night:'#10182e',floorA:'#1c2740',floorB:'#222e49',wood:'#6c3f2d',woodHi:'#9b6041',cream:'#ffe9b0',gold:'#ffca58',mint:'#71e0b0',red:'#f06b69',purple:'#9b8cff',blue:'#62b8ef',white:'#fff8e8'};
export const INGREDIENTS={onion:{label:'Onion',color:'#e6d7bd',accent:'#b58cc9'},tomato:{label:'Tomato',color:'#ed625c',accent:'#ffad70'},mushroom:{label:'Mushroom',color:'#c99b78',accent:'#f3d0a6'},fish:{label:'Fish',color:'#64b9df',accent:'#c9f4ff'},noodle:{label:'Noodle',color:'#f4ca68',accent:'#fff1a8'},egg:{label:'Egg',color:'#fff4d8',accent:'#ffd56b'},herb:{label:'Herb',color:'#65c987',accent:'#b7f29a'},bun:{label:'Bun',color:'#d89148',accent:'#ffcf74'},seaweed:{label:'Seaweed',color:'#356d68',accent:'#83d8b1'}};
export const RECIPES=[
 {id:'moon-noodles',name:'Moonlit Noodles',items:['noodle','onion','herb'],chop:['onion'],cook:true,color:'#f4ca68'},
 {id:'neon-omelet',name:'Neon Omelet',items:['egg','mushroom','herb'],chop:['mushroom'],cook:true,color:'#ffd56b'},
 {id:'harbor-bowl',name:'Harbor Bowl',items:['fish','noodle','seaweed'],chop:[],cook:true,color:'#62b8ef'},
 {id:'lantern-soup',name:'Lantern Soup',items:['tomato','onion','mushroom'],chop:['onion','mushroom'],cook:true,color:'#ed625c'},
 {id:'night-bun',name:'Night Market Bun',items:['bun','fish','herb'],chop:[],cook:false,color:'#d89148'},
 {id:'garden-toast',name:'Garden Toast',items:['bun','tomato','herb'],chop:['tomato'],cook:false,color:'#65c987'}
];
export const TIME={day:180,patience:42,chop:1.5,cook:3.5,spawn:7};
export const BIN_ORDER=Object.keys(INGREDIENTS);
