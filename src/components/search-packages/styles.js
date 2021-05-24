import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    margin: 20,
    backgroundColor: "#fff"
  },
  postTitle: {
    fontSize: 48
  },
  cardroot: {
    margin: 20,
    padding: 20
  },
  links: {
    '> .MuiTypography-root': {
      marginRight: 36
    }
  }
});

export default useStyles;