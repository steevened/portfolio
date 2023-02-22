import me from '../../public/me.webp';

export default function Picture() {
  return (
    <div className=" w-full bg-white/40 dark:bg-black/40 shadow-black/50 backdrop-blur-md z-50 p-1 rounded-lg shadow-lg">
      <img className="rounded-lg" src={me} alt="portrait Steven Alvarado" />
    </div>
  );
}
