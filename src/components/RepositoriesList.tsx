import Search from './search-packages/search';
import ListPackages from './search-packages/list-packages';
const RepositoriesList: React.FC = () => {


  return (
    <>
      <Search />
      <ListPackages />
    </>
  );
};

export default RepositoriesList;