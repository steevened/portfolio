import { IconType } from 'react-icons';
import ViewContainer from '../ViewContainer';

interface InfoContainer {
  children: React.ReactNode;
  title: string;
}

export default function InfoCardContainer({ children, title }: InfoContainer) {
  return (
    <ViewContainer className="p-10 h-full w-full flex flex-col items-center justify-center text-slate-700 dark:text-slate-200">
      <div className="mx-auto mb-5 inline-flex p-3 rounded-full bg-gray-100 dark:bg-slate-900 shadow-lg shadow-black/20 dark:shadow-black/80 ">
        {children}
      </div>
      <h3 className="text-3xl text-center font-bold">{title}</h3>
    </ViewContainer>
  );
}
