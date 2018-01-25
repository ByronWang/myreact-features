import React from "react";


class Type {
  constructor(name, attrs={},baseType=undefined) {
    this.name = name;
    this.baseType = baseType;
    this.attrs = attrs;
    Object.assign(this,this.allAttrs());
  }
  
  attr(attrName) {
    return this.attrs[attrName] || (this.baseType?this.baseType.attr(attrName):"");
  }

  allAttrs(){
    return this.baseType?Object.assign({},this.attrs,this.baseType.allAttrs()):this.attrs;
  }
}

const Types = {
  add : function(name, attrs={},baseType=undefined){
    if( typeof baseType === 'string'){
      this[name] = new Type(name,attrs,this[baseType]);
    }else if( typeof baseType === 'Type'){
      this[name] = new Type(name,attrs,baseType);
    }else {
      this[name] = new Type(name,attrs);
    }
  },
  addAll: function(list){
    list.map((type)=>{
      let [name,attrs,baseType] = type;
      this.add(name,attrs,baseType);
    });
  }
}

Types.add("String",{minLenght:0});
Types.add("Text",{maxLength:4098},"String");
Types.add("Long");
Types.add("Age",{min:0,regularMax:150});
Types.add("Decimal");
Types.add("Description",{maxLength:256},"String");
Types.add("Name",{minLength:3,maxLength:12},"String");

// console.log(Types);
// console.log(Types["String"].attr("maxLength"));
// console.log(Types["Descripiton"].attr("maxLength"));
// console.log("String.attrs " + Types["String"].attrs);
// console.log("String.maxLength " + Types["String"].maxLength);
// console.log(`Types["Descripiton"].maxLength ${Types["Descripiton"].maxLength}`);
// console.log(`Types.Descripiton.maxLength ${Types.Descripiton.maxLength}`);

export default Types;
export {Type};
