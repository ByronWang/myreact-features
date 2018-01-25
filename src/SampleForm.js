import React from "react";
import Field from "./FieldPresentation.js";
import * as FormLayout from "./FormTableLayout.js";

function Form(props) {
  let Layout = props.layout;
  return <Layout title={props.name}>{props.children}</Layout>;
}

const SampleForm = () => (
  <Form name="SampleForm" layout={FormLayout.FormLayout}>
    <Field type="Name" name="Name" layout={FormLayout.RowLayout} />
    <Field
      type="Description"      name="Description"      layout={FormLayout.RowLayout}
    />
    <Field type="Text" name="Content" layout={FormLayout.RowLayout} />
    <Field type="Comment" name="Comment" layout={FormLayout.RowLayout} />
  </Form>
);

export default SampleForm;
