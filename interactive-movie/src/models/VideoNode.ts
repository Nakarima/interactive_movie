export interface VideoNode {
  id: string;
  url: string;
  leftChild: string; // id of child
  rightChild: string;
  important: boolean;
  rightChoice: string;
  leftChoice: string;
}