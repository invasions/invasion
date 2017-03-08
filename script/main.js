var ItemId=function(id,textures,number,name,stack){
	this.id=id;
	this.textures=textures;
	this.number=number;
	this.name=name;
	this.stack=stack;
};

ItemId.prototype.addItem=function(){
	ModPE.setItem(this.name,this.textures,this.number,this.name,this.stack);
};

var phaseCrystal=new ItemId(1900,"phaseCrystal",0,"Phase Crystal",64);
phaseCrystal.addItem();
var riftFlux=new ItemId(1901,"riftFlux",0,"Rift Flux",64);
riftFlux.addItem();
var smallRemnants=new ItemId(1902,"smallRemnants",0,"Small Remnants",64);
smallRemnants.addItem();
var catalystMixture=new ItemId(1903,"catalystMixture",0,"Catalyst Mixture",);