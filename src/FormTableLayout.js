import React from "react";

function RowLayout(props) {
  return (
    <tr>
      <td>
        <label>{props.title}</label>
      </td>
      <td> {props.children}</td>
    </tr>
  );
}

function FormLayout(props) {
  return (
    <div>
      <h2>{props.title}</h2>
      <form>
        <table>
          <tbody>{props.children}</tbody>
        </table>
      </form>
    </div>
  );
}

export { FormLayout, RowLayout };
