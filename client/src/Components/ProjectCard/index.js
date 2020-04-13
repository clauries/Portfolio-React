import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
    cardRoot: {
        flexDirection: 'column',
        flexWrap: 'wrap',
        maxWidth: 345,
        margin: theme.spacing(2),
    },
}));

function ProjectCard(props) {
    const classes = useStyles();

    return (
        <Card className={classes.cardRoot}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    alt={props.alt}
                    height="225"
                    image={props.image}
                    title={props.alt}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {props.name}
                        </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                       {props.description}
                        </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary" href={props.deployedLink} target="_blank">
                    View App
                    </Button>
                <Button size="small" color="primary" href={props.repoLink} target="_blank">
                    View Repo
                    </Button>
            </CardActions>
        </Card>
    )
}

export default ProjectCard;