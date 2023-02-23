import { ClassName } from '../Interfaces/Interfaces';

export default function ViewContainer({ children, className }: ClassName) {
  return (
    <div
      className={`bg-white/40 dark:bg-black/40 shadow-black/20 backdrop-blur-md rounded-xl shadow-lg ${className}`}
    >
      {children}
    </div>
  );
}
