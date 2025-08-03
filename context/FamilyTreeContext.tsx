'use client';

import React, { createContext, useContext, useState } from 'react';
import {
  Node,
  Edge,
  useNodesState,
  useEdgesState,
  NodeChange,
  EdgeChange,
  OnNodesChange,
  OnEdgesChange,
} from 'reactflow';

type FamilyTreeContextType = {
  nodes: Node[];
  setNodes: React.Dispatch<React.SetStateAction<Node[]>>;
  onNodesChange: OnNodesChange;
  edges: Edge[];
  setEdges: React.Dispatch<React.SetStateAction<Edge[]>>;
  onEdgesChange: OnEdgesChange;
  selectedNode: Node | null;
  setSelectedNode: React.Dispatch<React.SetStateAction<Node | null>>;
};

const FamilyTreeContext = createContext<FamilyTreeContextType | null>(null);

export const useFamilyTree = () => {
  const ctx = useContext(FamilyTreeContext);
  if (!ctx) throw new Error('useFamilyTree must be used inside FamilyTreeProvider');
  return ctx;
};

type Props = {
  children: React.ReactNode;
  initialNodes?: Node[];
  initialEdges?: Edge[];
};

export const FamilyTreeProvider = ({
  children,
  initialNodes = [],
  initialEdges = [],
}: Props) => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const [selectedNode, setSelectedNode] = useState<Node | null>(null);

  return (
    <FamilyTreeContext.Provider
      value={{
        nodes,
        setNodes,
        onNodesChange,
        edges,
        setEdges,
        onEdgesChange,
        selectedNode,
        setSelectedNode,
      }}
    >
      {children}
    </FamilyTreeContext.Provider>
  );
};
