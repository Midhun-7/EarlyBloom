import { Edge, Node } from 'reactflow';
import { FamilyMemberData } from '@/types/types';

export function graphToPrompt(nodes: Node<FamilyMemberData>[], edges: Edge[]): string {
  const peopleMap: Record<string, FamilyMemberData> = {};

  // Extract node data
  for (const node of nodes) {
    peopleMap[node.id] = node.data;
  }

  let prompt = 'Here is the family health data:\n\n';

  for (const node of nodes) {
    const data = node.data;

    prompt += `Name: ${data.name}\n`;
    prompt += `Relationships: ${data.relationships?.join(', ') || 'N/A'}\n`;
    prompt += `Has Neuro Condition: ${data.hasNeuroCondition ? 'Yes' : 'No'}\n`;

    if (data.neuroConditionDetails) {
      prompt += `Neuro Condition Details: ${data.neuroConditionDetails}\n`;
    }

    const disorders = Object.entries(data.disorders || {}).filter(([_, val]) => val.checked);
    if (disorders.length > 0) {
      prompt += `Disorders:\n`;
      for (const [disorder, info] of disorders) {
        prompt += `  - ${disorder}`;
        if (info.who) prompt += ` (Who: ${info.who})`;
        if (info.ageOfOnset) prompt += ` (Onset Age: ${info.ageOfOnset})`;
        prompt += '\n';
      }
    }

    if (data.geneticDisorder) {
      prompt += `Genetic Disorder: ${data.geneticDisorder}\n`;
    }

    prompt += '\n';
  }

  // Add relationship edges
  prompt += `Family Relationships:\n`;
  for (const edge of edges) {
    const source = peopleMap[edge.source]?.name || edge.source;
    const target = peopleMap[edge.target]?.name || edge.target;
    prompt += `- ${source} → ${target}\n`;
  }

  return prompt;
}
