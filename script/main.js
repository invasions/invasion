const addSelf={
	items:[
		{"id":1900,"texture":"phaseCrystal","number":0,"name":"Phase Crystal","stack":64},
		{"id":1901,"texture":"riftFlux","number":0,"name":"Rift Flux","stack":64},
		{"id":1902,"texture":"smallRemnants","number":0,"name":"Small Remnants","stack":64},
		{"id":1903,"texture":"catalystMixture","number":0,"name":"Catalyst Mixture","stack":64},
		{"id":1904,"texture":"stableCatalystMixture","number":0,"name":"Stable Catalyst Mixture","stack":64},
		{"id":1905,"texture":"nexusCatalyst","number":0,"name":"Nexus Catalyst","stack":64},
		{"id":1906,"texture":"stableNexusCatalyst","number":0,"name":"Stable Nexus Catalyst","stack":64},
		{"id":1907,"texture":"trapEmpty","number":0,"name":"Empty Trap","stack":1},
		{"id":1908,"texture":"trapPurple","number":0,"name":"Rift Trap","stack":1},
		{"id":1909,"texture":"trapRed","number":0,"name":"Frame Trap","stack":1},
		{"id":1910,"texture":"infusedSword","number":0,"name":"Infused Sword","stack":1,"maxDamage":250,"heal":false},
		{"id":1911,"texture":"searingBow","number":0,"name":"Searing Bow","stack":1},
		{"id":1912,"texture":"sbowc","number":1,"name":"Searing Bow","stack":1},
		{"id":1913,"texture":"sbowc","number":2,"name":"Searing Bow","stack":1},
		{"id":1914,"texture":"sbowc","number":3,"name":"Searing Bow","stack":1},
		{"id":1915,"texture":"strangeBone","number":0,"name":"Strange Bone","stack":64},
		{"id":1916,"texture":"adjuster","number":0,"name":"Nexus Adjuster","stack":1},
		{"id":1917,"texture":"probe","number":0,"name":"Material Probe","stack":1},
		{"id":1918,"texture":"dampingAgent","number":0,"name":"Damping Agent","stack":16},
		{"id":1919,"texture":"strongDampingAgent","number":0,"name":"Strong Damping Agent","stack":16}
	],
	blocks:{
		nexusBlock:{"id":254,"name":"Nexus","texture":[["nexusTopOff",0],["nexusTopOff",0],["nexusSideOff",0],["nexusSideOff",0],["nexusSideOff",0],["nexusSideOff",0],["nexusTopOn",0],["nexusTopOn",0],["nexusSideOn",0],["nexusSideOn",0],["nexusSideOn",0],["nexusSideOn",0]],"tool":0,"light":true,"type":0,"count":1,"damage":[0,1]},
		riftTrap:{},
		frameTrap:{}
	}
};

for(let is=0;is<addSelf.items.length;is++){
	ModPE.setItem(addSelf.items[is]["id"],addSelf.items[is]["texture"],addSelf.items[is]["number"],addSelf.items[is]["name"],addSelf.items[is]["stack"]);
	Player.addItemCreativeInv(addSelf.items[is]["id"],1,0);
};

Item.setMaxDamage(addSelf.items[10]["id"],addSelf.items[10]["maxDamage"]);

const GameType={SURVIVAL:0,CREATIVE:1};

var Invasion={
	useItem:function(x,y,z,itemId,blockId,side,itemDamage,blockDamage){
		
	},
	attackHook:function(attacker,victim){
		
	},
	modTick:function(){
		
	},
	destroyBlock:function(x,y,z,side){
		
	},
	entityAddedHook:function(entity){
		
	}
};

function useItem(x,y,z,itemId,blockId,side,itemDamage,blockDamage){
	Invasion.useItem(x,y,z,itemId,blockId,side,itemDamage,blockDamage);
}

function attackHook(attacker,victim){
	Invasion.attackHook(attacker,victim);
}

function modTick(){
	Invasion.modTick();
}

function destroyBlock(x,y,z,side){
	Invasion.destroyBlock(x,y,z,side);
}

function entityAddedHook(entity){
	Invasion.entityAddedHook(entity);
}