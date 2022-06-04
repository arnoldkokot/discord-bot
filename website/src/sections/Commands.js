import React from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { commands } from "../content";
import { Container, Heading } from "../components";

export default function Commands() {
  return (
    <Container className="py-8 surface-0">
      <Heading className="mb-6">
        Available <span className="text-primary">commands</span>
      </Heading>
      <DataTable value={commands} stripedRows>
        <Column field="command" header="Command"></Column>
        <Column field="example" header="Example"></Column>
        <Column field="description" header="Description"></Column>
      </DataTable>
    </Container>
  );
}
