import React from 'react';
import { Form, Field } from './FormPresentation';
/*
let Entity = {
  name: "Person",
  fields: [
    {name: "Name", type: "Name" },
    {name: "Age", type: "Age" },
    {name: "Height", type: "Long" },
    {name: "Comment", type: "Comment" },
    {fieldType:"EmbedEntity",name:"Address",type={name:fields:[{
      {name: "City", type: "Name" },
      {name: "Prinvance", type: "Name" },
    }]},
    {fieldType:"Reference",name:"Address",type:"Address"},
  ]
};
*/
function EntityPresentation(props) {
  const entity = props.entity;

  console.log(entity);
  return (
    <Form name={entity.name}>
      {entity.fields.map(field => {
        if (!field.fieldType) {
          return <Field key={field.name} type={field.type} name={field.name} />;
        } else if (field.fieldType === 'EmbedEntity') {
          return (
            <EmbedEntityPresentation
              key={field.name}
              name={field.name}
              entity={field.type}
            />
          );
        } else {
          return false;
        }
      })}
    </Form>
  );
}

function EmbedEntityPresentation(props) {
  const entity = props.entity;

  return (
    <React.Fragment>
      {entity.fields.map(field => {
        if (!field.fieldType) {
          return (
            <Field
              key={props.name + '.' + field.name}
              type={field.type}
              name={props.name + '.' + field.name}
            />
          );
        } else if (field.fieldType === 'EmbedEntity') {
          return (
            <EntityPresentation
              key={props.name + '.' + field.name}
              entity={field}
            />
          );
        } else {
          return false;
        }
      })}
    </React.Fragment>
  );
}

export default EntityPresentation;
