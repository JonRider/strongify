import React from "react";
import { Row, Column } from "../Grid";
import { Title } from "./style";

export default function TemplatesContainer() {
  return (
    <Row>
      <Column span="6">
        <Title>Templates</Title>
      </Column>
    </Row>
  );
}
