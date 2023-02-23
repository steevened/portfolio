export default interface Children {
  children: React.ReactNode;
}

export interface ClassName extends Children {
  className?: string;
}
