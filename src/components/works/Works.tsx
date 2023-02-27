import phoneBook from '../../assets/works/phonebook.png';
import techcommerce from '../../assets/works/techcommerce.png';
import githubfinder from '../../assets/works/githubfinder.png';
import ViewContainer from '../ViewContainer';
import bg from '../../assets/backgrounds/works.jpg';
import bgDark from '../../assets/backgrounds/worksDark.jpg';

const styles = {
  backgroundImage: `url(${bg})`,
  backgroundSize: '150rem',
};

export default function Works() {
  return (
    <div className="relative">
      <div
        className={`absolute inset-y-0 -left-10 -right-10  bg-bottom bg-no-repeat bg-fixed bg-slate-50 dark:bg-[#0B1120] bg`}
      >
        <div className="absolute inset-0 bg-grid bg-fixed" />
      </div>
      <div className=" backdrop-blur-0 py-10">
        <h2 className="text-slate-900 dark:text-white text-4xl font-extrabold pt-10 text-center">
          Check out my recent works
        </h2>
        <div className="flex justify-center gap-4 mt-5">
          <div className="w-64 ">
            <img src={githubfinder} alt="githubfinder" />
          </div>
          <div className="w-64 ">
            <img src={techcommerce} alt="techcommerce" />
          </div>
          <div className="w-64 ">
            <img src={phoneBook} alt="phone" />
          </div>
        </div>
      </div>
    </div>
  );
}
