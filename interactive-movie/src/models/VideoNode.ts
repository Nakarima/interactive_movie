export interface VideoNode {
  id: string;
  url: string;
  leftChild: string; // id of child
  rightChild: string;
}