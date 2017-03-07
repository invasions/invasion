var Data={
	encode:function(data){return JSON.stringify(data);},
	decode:function(data){return JSON.parse(data);},
	remove:function(name){
		if(Array.isArray(name)){
			for(let i=0;i<name.length;i++){
				if(new File(directory+Level.getWorldDir()+"/"+modsn+"/"+name[i]+".json").exists())
							new File(directory+Level.getWorldDir()+"/"+modsn+"/"+name[i]+".json").delete();
			}
		}else{
			if(new File(dir.mods+Level.getWorldDir()+"/"+modsn+"/"+name+".json").exists())
						new File(dir.mods+Level.getWorldDir()+"/"+modsn+"/"+name+".json").delete();
		}
	},
	save:function(name,data){
			new File(directory+Level.getWorldDir()+"/"+modsn).mkdirs();
			let saveFile=new File(directory+Level.getWorldDir()+"/"+modsn,name+".json");	saveFile.createNewFile();
			let output=new OutputStreamWriter(new FileOutputStream(saveFile));	output.append(Data.encode(data));	output.close();
	},
	load:function(name){
		try{
			var str=null;	var loadFile;	var c=0;
			var fileReader=new FileReader(directory+Level.getWorldDir()+"/"+modsn+"/"+name+".json");
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