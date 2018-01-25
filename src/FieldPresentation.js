import React from "react";
import Types from "./Types.js";


/*let FieldTypes = {
    string:TextField,
};*/

/* 
ControlSize 
Desc
Format
FormatType
IDGenerationStrategy
Max
Min
MaxLength
MinLength
Precision
Scale
SP
Style
Uom
*/


var FieldTypes ={
    register : function(...rest){
        rest.map((fieldtype)=>fieldtype.supportedTypes.map((typeName)=>this[typeName] = fieldtype))
    },
    match: function(typeName){
        console.log(`FieldTypes.match( ${typeName} )`)
        return Types[typeName]?this[typeName] || this.match(Types[typeName].baseType.name):undefined;
    }
};

class FieldPresentation extends React.Component {
    constructor(props) {
        super(props);
        const {type,...other} = props;
        this.typeName = type;
        this.other = other;
        this.type = Types[this.typeName];
        
        this.extProps = {};
        if(this.type){
            if(this.type.attr("minLength")){
                this.extProps.minLength =this.type.minLength;
            }
            if(this.type.attr("maxLength")){
                this.extProps.maxLength =  this.type.maxLength;
            }
        }
    }
  
    render() {
      let TargetFieldType = FieldTypes.match(this.typeName) || "input";
      return <TargetFieldType {...this.extProps} {...this.other} />;
    }
  }

class TextField extends React.Component{
    constructor(props) {
        super(props);
      }
    
      static supportedTypes =["String"]

      render() {
        return <input placeholder="TextField" {...this.props} />;
      }
}

class NameField extends React.Component{
    constructor(props) {
        super(props);
      }
    
      static supportedTypes =["Name"]

      render() {
        return <input placeholder="NameField" {...this.props} />;
      }
}

class PersonNameField extends React.Component{
    constructor(props) {
        super(props);
      }
    
      static supportedTypes =["PersonName"]

      render() {
        return <input placeholder="PersonNameField" {...this.props} />;
      }
}

console.log(Types.String.name);

FieldTypes.register(TextField,NameField,PersonNameField);
console.log(FieldTypes);
console.log(`FieldTypes.match("Text").name ${FieldTypes.match("Text").name}`);

export default FieldPresentation;