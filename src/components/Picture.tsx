import me from '../../public/me.webp';
import ViewContainer from './ViewContainer';

export default function Picture() {
  return (
    <ViewContainer className="w-full z-40">
      <div className="relative rounded-lg overflow-hidden">
        <img className="" src={me} alt="portrait Steven Alvarado" />
        <div className="bg-slate-900/20 absolute inset-0" />
      </div>
    </ViewContainer>
  );
}
