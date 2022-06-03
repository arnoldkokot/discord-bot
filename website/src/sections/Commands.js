import React from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

const commands = [
  {
    command: "ping",
    example: "/ping",
    description: "Test network latency",
  },
  {
    command: "help",
    example: "/help",
    description: "List all available commands",
  },
  {
    command: "leave",
    example: "/leave",
    description: "Leave the channel bot is currently in",
  },
  {
    command: "move",
    example: "/move (while in channel)",
    description: "Move to the message author's channel",
  },
  {
    command: "pause",
    example: "/pause",
    description: "Pause playback",
  },
  {
    command: "play",
    example: "/play https://youtu.be/dQw4w9WgXcQ",
    description: "Play a youtube link",
  },
  {
    command: "resume",
    example: "/resume",
    description: "Resume playback",
  },
  {
    command: "volume",
    example: "/volume 0.5",
    description: "Change playback volume, 1 is 100%",
  },
];

export default function Commands() {
  return (
    <DataTable value={commands} stripedRows>
      <Column field="command" header="Command"></Column>
      <Column field="example" header="Example"></Column>
      <Column field="description" header="Description"></Column>
    </DataTable>
  );
}
