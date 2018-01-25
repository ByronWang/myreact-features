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

var FieldTypes = {
  register: function(...rest) {
    rest.map(fieldtype =>
      fieldtype.supportedTypes.map(typeName => (this[typeName] = fieldtype))
    );
  },
  match: function(typeName) {
    console.log(`FieldTypes.match( ${typeName} )`);
    return Types[typeName]
      ? this[typeName] || this.match(Types[typeName].baseType.name)
      : undefined;
  }
};

class Field extends React.Component {
  constructor(props) {
    super(props);
    const { type,layout, ...other } = props;
    this.typeName = type;
    this.other = other;
    this.type = Types[this.typeName];
    this.layout = layout;

    this.extProps = {};
    if (this.type) {
      if (this.type.attr("minLength")) {
        this.extProps.minLength = this.type.minLength;
      }
      if (this.type.attr("maxLength")) {
        this.extProps.maxLength = this.type.maxLength;
      }
    }
  }

  render() {
    let TargetFieldType = FieldTypes.match(this.typeName) || "input";
    let Layout = this.layout;
    console.log(this.props);
    return (
      <Layout title={this.props.name}>
          <TargetFieldType {...this.extProps} {...this.other} />
      </Layout>
    );
  }
}

function TextField(props) {
    return <input placeholder="TextField" {...props} />;
}
TextField.supportedTypes = ["String"];


function NameField (props) {
    return <input placeholder="NameField" {...props} />;
}
NameField.supportedTypes = ["Name"];

function PersonNameField (props) {
    return <input placeholder="PersonNameField" {...props} />;
}
PersonNameField.supportedTypes = ["PersonName"];

FieldTypes.register(TextField, NameField, PersonNameField);

console.log(FieldTypes);
console.log(`FieldTypes.match("Text").name ${FieldTypes.match("Text").name}`);

export default Field;
