// app/family-tree/page.tsx
"use client";

import React, { useCallback, useState } from "react";
import ReactFlow, {
  Background,
  Controls,
  MiniMap,
  addEdge,
  useEdgesState,
  useNodesState,
  Node,
  Edge,
  Connection,
  Position,
} from "reactflow";
import "reactflow/dist/style.css";
import { v4 as uuidv4 } from "uuid";
import FamilyMemberModal from "@/components/FamilyMemberModal";

const initialNodes: Node[] = [
  {
    id: "1",
    data: { label: "You", id: "1" },
    position: { x: 250, y: 50 },
    sourcePosition: Position.Bottom,
    targetPosition: Position.Top,
  },
];

const initialEdges: Edge[] = [];

export default function FamilyTreePage() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const [selectedNode, setSelectedNode] = useState<Node | null>(null);

  const onConnect = useCallback(
    (params: Edge | Connection) =>
      setEdges((eds) => addEdge({ ...params, animated: true }, eds)),
    [setEdges]
  );

  const addFamilyMember = () => {
    const id = uuidv4();
    const newNode: Node = {
      id,
      data: { label: `Member ${nodes.length + 1}`, id },
      position: { x: Math.random() * 400, y: Math.random() * 400 },
      sourcePosition: Position.Bottom,
      targetPosition: Position.Top,
    };
    setNodes((nds) => [...nds, newNode]);
  };

  const handleSaveMember = async (data: any) => {
    await fetch("/api/family/add-member", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    setSelectedNode(null);
  };

  return (
    <div style={{ height: "100vh" }}>
      <div
        className="toolbar"
        style={{
          padding: "10px",
          background: "#ffffff" /* white background */,
          color: "#000000" /* black text */,
          borderColor: "#000000" /* black border */,
          borderStyle: "solid",
          borderRadius: "5px",
          textAlign: "center",
          margin: "10px",
        }}
      >
        <button onClick={addFamilyMember}>Add Member</button>
      </div>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        onNodeClick={(_, node) => setSelectedNode(node)}
        fitView
        className="bg-white text-black"
      >
        <MiniMap />
        <Controls />
        <Background />
      </ReactFlow>

      {selectedNode && (
        <FamilyMemberModal
          memberName={selectedNode.data.label}
          data={{
            name: selectedNode.data.label,
            relationships: [],
            hasNeuroCondition: false,
            disorders: {},
          }}
          onSave={handleSaveMember}
          onClose={() => setSelectedNode(null)}
        />
      )}
    </div>
  );
} // End
