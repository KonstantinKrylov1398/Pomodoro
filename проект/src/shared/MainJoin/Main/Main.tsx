import React from "react";
import { useSelector } from "react-redux";
import { rootState } from "../../../redux/redux";
import { Form } from "./Form";
import { MainOne } from "./MainOne";

export function Main() {
  return (
    <div>
      <MainOne />
      <Form />
    </div>
  );
}
