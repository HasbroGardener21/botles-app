import { ConnectionsProvider } from "@/providers/connections-provider";
import EditorProvider from "@/providers/editor-provider";
import React from "react";

type Props = {};

const Page = (props: Props) => {
  return (
    <div>
      <EditorProvider>
        <ConnectionsProvider>
          <div></div>
        </ConnectionsProvider>
      </EditorProvider>
    </div>
  );
};

export default Page;
