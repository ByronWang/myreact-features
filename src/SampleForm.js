import React from 'react';
import { Form, Field } from './FieldPresentation.js';

const SampleForm = () => (
  <Form name="SampleForm">
    <Field type="Name" name="Name" />
    <Field type="Description" name="Description" />
    <Field type="Text" name="Content" />
    <Field type="Comment" name="Comment" />
  </Form>
);

export default SampleForm;
