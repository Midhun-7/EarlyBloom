export type RelationshipType =
  | 'Mother'
  | 'Father'
  | 'Sibling'
  | 'Grandparent (maternal)'
  | 'Grandparent (paternal)'
  | 'Uncle/Aunt (first degree)'
  | 'Cousin (first degree)';

export interface DisorderInfo {
  checked: boolean;
  who?: string;
  ageOfOnset?: string;
}

export interface FamilyMemberData {
  name: string;
  relationships: RelationshipType[];
  hasNeuroCondition: boolean;
  neuroConditionDetails?: string;
  disorders: {
    [disorder: string]: DisorderInfo;
  };
  geneticDisorder?: string;
}

export interface Message {
    id: string;
    text: string;
    sender: 'user' | 'bot';
}

export interface ChatProps {
    messages: Message[];
    onSendMessage: (message: string) => void;
}