import React from 'react';
import EntityPresentation from './EntityPresentation';
let Entity = {
  name: 'Person',
  fields: [
    { name: 'Name', type: 'Name' },
    { name: 'Age', type: 'Age' },
    { name: 'Height', type: 'Long' },
    { name: 'Comment', type: 'Comment' },
    {
      fieldType: 'EmbedEntity',
      name: 'Address',
      type: {
        name: 'Address',
        fields: [
          { name: 'City', type: 'Name' },
          { name: 'Prinvance', type: 'Name' }
        ]
      }
    },
    { fieldType: 'Reference', name: 'Address', type: 'Address' }
  ]
};
const Sample2Form = () => <EntityPresentation entity={Entity} />;
export default Sample2Form;
