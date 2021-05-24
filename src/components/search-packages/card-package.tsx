import { Typography, Card, Box } from '@material-ui/core';

import StorageIcon from '@material-ui/icons/Storage';
import DeviceHubIcon from '@material-ui/icons/DeviceHub';
import { grey } from '@material-ui/core/colors';
import useStyles from './styles';


interface Package {
    name: string,
    version: string,
    description: string,
    links: {
        npm: string,
        repository: string
    }
}

const CardPackage = ({ name, version, description, links }: Package) => {
    const classes = useStyles();
    return (
        <>
            <Card className={classes.cardroot} variant="outlined">
                <Box display={"flex"} alignItems={"center"}>
                    <Box mr={2}>
                        <DeviceHubIcon fontSize={"small"} style={{ color: grey[400] }} />
                    </Box>
                    <Typography variant="caption" color={"textSecondary"}>
                        {version}
                    </Typography>
                </Box>
                <Box display={"flex"} mb={1} alignItems={"center"}>
                    <Box mr={2} >
                        <StorageIcon fontSize={"small"} />
                    </Box>
                    <Typography variant="h6" gutterBottom>
                        {name}
                    </Typography>
                </Box>
                <Typography variant="body1" gutterBottom>
                    {description}
                </Typography>
                <Box display="flex" className={classes.links}>
                    <Typography variant="caption" gutterBottom>
                        {links.repository}
                    </Typography>
                    <Typography variant="caption" gutterBottom>
                        {links.npm}
                    </Typography>
                </Box>
            </Card>
        </>
    );
}

export default CardPackage;

