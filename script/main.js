var modName=".invasion";

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
		nexusBlock:{"id":254,"name":"Nexus","texture":[["nexusTopOff",0],["nexusTopOff",0],["nexusSideOff",0],["nexusSideOff",0],["nexusSideOff",0],["nexusSideOff",0],["nexusTopOn",0],["nexusTopOn",0],["nexusSideOn",0],["nexusSideOn",0],["nexusSideOn",0],["nexusSideOn",0]],"tool":0,"light":true,"type":0,"stack":1,"damage":[0,1]},
		riftTrap:{},
		frameTrap:{}
	}
};

for(let is=0;is<addSelf.items.length;is++){
	ModPE.setItem(addSelf.items[is]["id"],addSelf.items[is]["texture"],addSelf.items[is]["number"],addSelf.items[is]["name"],addSelf.items[is]["stack"]);
	Player.addItemCreativeInv(addSelf.items[is]["id"],1,0);
};

Block.defineBlock(addSelf.blocks["nexusBlock"].id,addSelf.blocks["nexusBlock"].name,addSelf.blocks["nexusBlock"].texture,addSelf.blocks["nexusBlock"].tool,addSelf.blocks["nexusBlock"].light,addSelf.blocks["nexusBlock"].type);
Player.addItemCreativeInv(addSelf.blocks["nexusBlock"].id,addSelf.blocks["nexusBlock"].stack,addSelf.blocks["nexusBlock"].damage[0]);
Player.addItemCreativeInv(addSelf.blocks["nexusBlock"].id,addSelf.blocks["nexusBlock"].stack,addSelf.blocks["nexusBlock"].damage[1]);//あとで消す
Item.setMaxDamage(addSelf.items[10]["id"],addSelf.items[10]["maxDamage"]);

const Environment=android.os.Environment;

const File=java.io.File;
const OutputStreamWriter=java.io.OutputStreamWriter;
const FileInputStream=java.io.FileInputStream;
const FileOutputStream=java.io.FileOutputStream;
const FileWriter=java.io.FileWriter;
const FileReader=java.io.FileReader;
const BufferedWriter=java.io.BufferedWriter;
const BufferedReader=java.io.BufferedReader;

const directory=Environment.getExternalStorageDirectory().getAbsolutePath()+"/games/com.mojang/minecraftWorlds/";

var Data={
	encode:function(data){return JSON.stringify(data);},
	decode:function(data){return JSON.parse(data);},
	remove:function(name){
		if(Array.isArray(name)){
			for(let i=0;i<name.length;i++){
				if(new File(directory+Level.getWorldDir()+"/"+modName+"/"+name[i]+".json").exists())
							new File(directory+Level.getWorldDir()+"/"+modName+"/"+name[i]+".json").delete();
			}
		}else{
			if(new File(dir.mods+Level.getWorldDir()+"/"+modName+"/"+name+".json").exists())
						new File(dir.mods+Level.getWorldDir()+"/"+modName+"/"+name+".json").delete();
		}
	},
	save:function(name,data){
			new File(directory+Level.getWorldDir()+"/"+modName).mkdirs();
			let saveFile=new File(directory+Level.getWorldDir()+"/"+modName,name+".json");	saveFile.createNewFile();
			let output=new OutputStreamWriter(new FileOutputStream(saveFile));	output.append(Data.encode(data));	output.close();
	},
	load:function(name){
		try{
			var str=null;	var loadFile;	var c=0;
			var fileReader=new FileReader(directory+Level.getWorldDir()+"/"+modName+"/"+name+".json");
			var bufferedReader=new BufferedReader(fileReader);
			while((loadFile=bufferedReader.readLine())!=null){
				if(c==0){
					str=loadFile;
				}else{
					str=str+"\n"+loadFile;
				}c++;
			}bufferedReader.close();	fileReader.close();
		}catch(err){
			print(err);
		}return Data.decode(str);
	}
};

const GameType={SURVIVAL:0,CREATIVE:1};

var Invasion={
	entArray:[],
	rangeCount:0,
	range:[32,40,48,56,64,72,80,88,96,104,112,120,128],
	onSet:false,
	isInvasion:false,
	isContinues:false
};

var checkPos=[];

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


Invasion.useItem=function(x,y,z,itemId,blockId,side,itemDamage,blockDamage){
	if((itemId==addSelf.items[16].id||itemId==addSelf.items[17].id)&&blockId==addSelf.blocks["nexusBlock"].id){
		Invasion["rangeCount"]++;
			if(Invasion["rangeCount"]==13){
				Invasion["rangeCount"]=0;
			}
		Data.save("range",Invasion.range[Invasion["rangeCount"]]);
		clientMessage(Invasion.range[Invasion["rangeCount"]]);
	}
	if(itemId==addSelf.blocks["nexusBlock"].id){
		switch(side){
			case 0:Invasion.onSet=true;checkPos.push([x,y-1,z,itemId,itemDamage]);break;
			case 1:Invasion.onSet=true;checkPos.push([x,y+1,z,itemId,itemDamage]);break;
			case 2:Invasion.onSet=true;checkPos.push([x,y,z-1,itemId,itemDamage]);break;
			case 3:Invasion.onSet=true;checkPos.push([x,y,z+1,itemId,itemDamage]);break;
			case 4:Invasion.onSet=true;checkPos.push([x-1,y,z,itemId,itemDamage]);break;
			case 5:Invasion.onSet=true;checkPos.push([x+1,y,z,itemId,itemDamage]);break;
		}
	}
};

Invasion.modTick=function(){
	if(Invasion.onSet){
		for(let p=0;p<checkPos.length;p++){
			if(checkPos[p][3]==getTile(checkPos[p][0],checkPos[p][1],checkPos[p][2])){
				Data.save("x",checkPos[p][0]);
				Data.save("y",checkPos[p][1]);
				Data.save("z",checkPos[p][2]);
				Data.save("range",Invasion.range[0]);
			}
		}
	}
};

Invasion.attackHook=function(attacker,victim){

};

Invasion.destroyBlock=function(x,y,z,side){
	if(getTile(x,y,z)==addSelf.blocks["nexusBlock"].id){
		Data.remove(["x","y","z","range"]);
	}
};

Invasion.entityAddedHook=function(entity){
var getEntityID=Entity.getEntityTypeId;
	if(getEntityID(entity)==32||getEntityID(entity)==33||getEntityID(entity)==34||getEntityID(entity)==35||getEntityID(entity)==36||getEntityID(entity)==40||getEntityID(entity)==44){
Invasion["entArray"].push(entity);
	}
	if(Invasion.isOn){
	var nx=Data.load("x");
	var nz=Data.load("z");
	var nr=Data.load("range");
		for(let e=0;e<Invasion["entArray"].length;e++){
			if(getEntityID(Ent[e])==32||getEntityID(Ent[e])==33||getEntityID(Ent[e])==34||getEntityID(Ent[e])==35||getEntityID(Ent[e])==36||getEntityID(Ent[e])==40||getEntityID(Ent[e])==44){
			var ex=Entity.getX(Ent[e]);
			var ez=Entity.getZ(Ent[e]);
				if(Math.sqrt(Math.pow(nx-ex,2)+Math.pow(nz-ez,2))<nr){
				Entity.remove(Ent[e]);
				}
			}
		}
	}
};

const Armor={
	Leather:{
		helmet:{"id":298,"defence":1},
		chestplate:{"id":299,"defence":3},
		leggings:{"id":300,"defence":2},
		boots:{"id":301,"defence":1}
	},
	Chain:{
		helmet:{"id":302,"defence":2},
		chestplate:{"id":303,"defence":5},
		leggings:{"id":304,"defence":4},
		boots:{"id":305,"defence":1}
	},
	Iron:{
		helmet:{"id":306,"defence":2},
		chestplate:{"id":307,"defence":6},
		leggings:{"id":308,"defence":5},
		boots:{"id":309,"defence":2}
	},
	Diamond:{
		helmet:{"id":310,"defence":3},
		chestplate:{"id":311,"defence":8},
		leggings:{"id":312,"defence":6},
		boots:{"id":313,"defence":3}
	},
	Gold:{
		helmet:{"id":314,"defence":2},
		chestplate:{"id":315,"defence":5},
		leggings:{"id":316,"defence":3},
		boots:{"id":317,"defence":1}
	}
};

Invasion.calculator=function(entity,power){
var getEntityArm=Entity.getArmor;

};

Invasion.setInfusedSword=function(){
var getId=Player.getCarriedItem();
var getStack=Player.getCarriedItemCount();
var getDamage=Player.getCarriedItemData();
var getEntityHP=Entity.getHealth();
var getEntityArm=Entity.getArmor(entity,int);
	if(getId==addSelf.items[10].id){
		
	}
};

/*
damage=power*(1-Math.min(20,Math.max(defencePoints/5,defencePoints-power/(2+toughness/4)))/25);
or
damage=damage*(1-(defencePoints-danage/2)/30);
*/