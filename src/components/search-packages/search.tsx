import { useState } from 'react';
import { useActions } from '../../hooks/useActions';
import { Box, Button, TextField, Card } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
// import SendIcon from '@material-ui/icons/Send';

const useStyles = makeStyles({
    root: {
        margin: 20,
        backgroundColor: "#fff"
    },
    postTitle: {
        fontSize: 48
    },
});
const Search = () => {
    const [term, setTerm] = useState('');
    const { searchRepositories } = useActions();

    const classes = useStyles(useStyles);

    const onSubmit = async (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.preventDefault();

        searchRepositories(term);

    };
    return (
        <Card className={classes.root} variant="outlined">
            <Box display={"flex"} flexDirection={"column"} justifyContent={"flex-end"}>
                <Box p={2}>
                    <TextField onChange={e => setTerm(e.target.value)} fullWidth id="title" label="Search packages ..." InputLabelProps={{ style: { fontSize: 32 } }} inputProps={{ style: { fontSize: 36 } }} />
                </Box>
                <Box display={"flex"} justifyContent={"flex-end"} p={2}>
                    <Button onClick={(event) => { onSubmit(event) }} size="large" disableElevation={true} variant="contained" color="primary">Enviar</Button>

                </Box>
            </Box>
        </Card>
    );
}

export default Search;

