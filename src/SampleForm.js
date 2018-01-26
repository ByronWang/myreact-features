import React from 'react';
import { Form, Field } from './nebula/FormPresentation';

const SampleForm = () => (
  <Form name="SampleForm">
    <Field type="Name" name="name" value={this.state.name} />
    <Field type="Description" name="description" value={this.state.name} />
    <Field type="Text" name="content" value={this.state.name} />
    <Field type="Comment" name="comment" value={this.state.name} />
  </Form>
);

export default SampleForm;
