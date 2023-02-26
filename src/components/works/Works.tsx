import phoneBook from '../../assets/works/phonebook.png';
import techcommerce from '../../assets/works/techcommerce.png';
import githubfinder from '../../assets/works/githubfinder.png';
import ViewContainer from '../ViewContainer';

export default function Works() {
  return (
    <ViewContainer className="mt-12 p-10">
      <ViewContainer className="text-center py-10 text-2xl md:text-4xl font-bold">
        Works
      </ViewContainer>
      <ViewContainer className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-5 p-10">
        <div className="col-span-2">
          <img src={githubfinder} alt="phonebook picture" />
        </div>
        <div className="grid gap-3">
          <div>
            <img src={phoneBook} alt="phonebook picture" />
          </div>
          <div>
            <img src={techcommerce} alt="phonebook picture" />
          </div>
        </div>
      </ViewContainer>
    </ViewContainer>
  );
}
