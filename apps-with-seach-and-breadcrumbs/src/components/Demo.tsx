import React from "react";

// Importing components and styles from different libraries
import { MyButtonComponent as AkButton } from "@ak4upskill/core-component";
import "@ak4upskill/core-component/dist/core-component.css";

import {
  MyButton as BeautifulTimelineButton,
  divedeHalfNumberValueInString,
} from "react-beautiful-timeline";
import "react-beautiful-timeline/dist/style.css";

import { MyButtonComponent } from "react-component-library";
import "react-component-library/dist/react-component-library.css";

import "./Demo.css"; // Import the CSS file

const Demo: React.FC = () => {
  return (
    <div className="demo-container">
      {/* Exports from react-beautiful-timeline package  */}
      <section className="demo-section">
        <h2>Timeline Buttons</h2>
        <BeautifulTimelineButton theme="dark">
          This is dark button
        </BeautifulTimelineButton>
        <BeautifulTimelineButton theme="light">
          This is light button
        </BeautifulTimelineButton>
        <span>
          divedeHalfNumberValueInString when called with 200 is{" => "}
          {divedeHalfNumberValueInString("200")}
        </span>
      </section>

      {/* React Component Library Button */}
      <section className="demo-section">
        <h2>React Component Library Button</h2>
        <MyButtonComponent>
          Button from react-component-library
        </MyButtonComponent>
      </section>

      {/* AK Buttons */}
      <section className="demo-section">
        <h2>AK Buttons</h2>
        <AkButton>This is ak button with default theme</AkButton>
        <AkButton theme="dark">This is ak button with dark theme</AkButton>
        <AkButton theme="light">This is ak button with light theme</AkButton>
        <AkButton theme="primary">
          This is ak button with primary theme
        </AkButton>
        <AkButton theme="secondary">
          This is ak button with secondary theme
        </AkButton>
      </section>
    </div>
  );
};

export default Demo;
