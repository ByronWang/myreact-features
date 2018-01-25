import React from "react";
import FieldPresentation from "./FieldPresentation.js";
import Types from "./Types.js";



const SampleForm = () => (
  <div>
    <h2>SampleForm</h2>
    <form>
      <table>
        <tbody>
          <tr>
            <td>
              <label>Name:</label>
            </td>
            <td>
              <label>
                <FieldPresentation type="Text" name="name" />
              </label>
            </td>
          </tr>
          <tr>
            <td>
              <label>Name:</label>
            </td>
            <td>
              <label>
                <FieldPresentation type="Description" name="name" />
              </label>
            </td>
          </tr>
          <tr>
            <td>
              <label>Name:</label>
            </td>
            <td>
              <label>
                <FieldPresentation type="Name" name="name" />
              </label>
            </td>
          </tr>
          <tr>
            <td>
              <label>Name:</label>
            </td>
            <td>
              <label>
                <FieldPresentation type="Name" name="name" />
              </label>
            </td>
          </tr>
          <tr>
            <td colSpan="2">
              <input type="submit" value="Submit" />
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  </div>
);

export default SampleForm;
