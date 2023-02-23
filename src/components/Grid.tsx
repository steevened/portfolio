import Info from './Info';
import GithubCard from './InfoCards/GithubCard';
import LinkedinCard from './InfoCards/LinkedinCard';
import NameCard from './InfoCards/NameCard';
import Resume from './InfoCards/Resume';
import Picture from './Picture';

export default function Grid() {
  return (
    <>
      <div className="flex flex-col gap-5 flex-1 ">
        <div className="flex flex-col lg:flex-row gap-5">
          <Picture />
          <NameCard />
        </div>
        <div>
          <Info />
        </div>
      </div>
      <div className="flex-1">
        <div className="grid h-full md:grid-cols-2 gap-5 place-items-center">
          <Resume />
          <LinkedinCard />
          <GithubCard />
          <GithubCard />
        </div>
      </div>
    </>
  );
}
