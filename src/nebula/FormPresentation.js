import React from 'react';
import Types from './Types.js';
import * as FormLayout from './FormTableLayout';
import PropTypes from 'prop-types';

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
    return Types[typeName]
      ? this[typeName] || this.match(Types[typeName].baseType.name)
      : undefined;
  }
};

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.handleInputChange = this.handleInputChange.bind(this);
    this.initInput = this.initInput.bind(this);
    this.getState = this.getState.bind(this);
  }

  initInput(name, value) {
    this.setState({
      [name]: value
    });
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
    console.log(this.state);
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  getChildContext() {
    return {
      rowLayout: FormLayout.RowLayout,
      handleInputChange: this.handleInputChange,
      initInput: this.initInput,
      getState: this.getState
    };
  }
  getState(name) {
    return this.state[name] || '';
  }
  render() {
    console.log(`render form ${this.props.name}`);
    let Layout = FormLayout.FormLayout;
    return (
      <form onSubmit={this.handleSubmit}>
        <Layout title={this.props.name}>{this.props.children}</Layout>
      </form>
    );
  }
}

Form.childContextTypes = {
  rowLayout: PropTypes.any,
  handleInputChange: PropTypes.func,
  initInput: PropTypes.func,
  getState: PropTypes.func
};

class Field extends React.Component {
  constructor(props) {
    super(props);
    const { type, layout, ...other } = props;
    this.typeName = type;
    this.other = other;
    this.type = Types[this.typeName];
    this.layout = layout;

    this.extProps = {};
    if (this.type) {
      if (this.type.attr('minLength')) {
        this.extProps.minLength = this.type.minLength;
      }
      if (this.type.attr('maxLength')) {
        this.extProps.maxLength = this.type.maxLength;
      }
    }
    this.extProps.placeholder = `Please input ${props.name}`;
    console.log(this.context);
  }

  render() {
    console.log(`render field ${this.props.name}`);
    let TargetFieldType = FieldTypes.match(this.typeName) || TextField;
    let RowLayout = this.context.rowLayout;
    // console.log(this.context);

    // this.context.initInput(this.props.name,"");/* TODO */
    this.extProps.onChange = this.context.handleInputChange;
    // console.log(this.props);
    return (
      <RowLayout title={this.props.name}>
        <TargetFieldType
          {...this.extProps}
          {...this.other}
          value={this.context.getState(this.props.name)}
        />
      </RowLayout>
    );
  }
}

Field.contextTypes = {
  rowLayout: PropTypes.any,
  handleInputChange: PropTypes.func,
  initInput: PropTypes.func,
  getState: PropTypes.func
};

function TextField(props) {
  console.log(`render TextField ${props.name}`);
  return <input placeholder="TextField" {...props} />;
}
TextField.supportedTypes = ['String', 'Long'];

function NameField(props) {
  console.log(`render NameField ${props.name}`);
  return <input placeholder="NameField" {...props} />;
}
NameField.supportedTypes = ['Name'];

function PersonNameField(props) {
  console.log(`render PersonNameField ${props.name}`);
  return <input placeholder="PersonNameField" {...props} />;
}
PersonNameField.supportedTypes = ['PersonName'];

FieldTypes.register(TextField, NameField, PersonNameField);

console.log(FieldTypes);
console.log(`FieldTypes.match("Text").name ${FieldTypes.match('Text').name}`);

export { Form, Field };
