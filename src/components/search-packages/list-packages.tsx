import CardPackage from './card-package';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { Typography, Box } from '@material-ui/core';


const ListPackages = () => {
  const { data, error, loading } = useTypedSelector(
    (state) => state.repositories
  );
  return (<>

    {
      error && <Box p={4}><Typography>{error}</Typography></Box>
    }
    {
      loading && <Box p={4}><Typography>aguarde ...</Typography></Box>
    }
    {
      data.map((el, index) => (
        <CardPackage key={index} name={el.name} version={el.version} description={el.description} links={el.links} />
      ))
    }

  </>);
}
export default ListPackages;