import React from "react";
import { Card, CardActions, CardActionArea, CardContent, CardMedia, Button, Typography } from "@mui/material";
import useStyles from "./styles.js"

const NewsCard = ({article: {description, publishedAt, source, title, url, urlToImage}, i}) => {

    const classes = useStyles()

    return (
        <Card className={classes.card}>
            <CardActionArea href={url} target ="_blank">
                <CardMedia className={classes.media} image={urlToImage || "https://img.freepik.com/vektoren-kostenlos/globaler-technologiehintergrund-mit-textplatz_1017-19388.jpg?w=996&t=st=1676840440~exp=1676841040~hmac=0968bc7c634f2e7b4df3d6e981c58a7f72a6cee57db7a2ffd5bbe136bec14270"}/>
                <div className={classes.details}>
                    <Typography variant="body2" color="textSecondary" component="h2">{(new Date(publishedAt)).toDateString()}</Typography>
                    <Typography variant="body2" color="textSecondary" component="h2">{source.name}</Typography>
                </div>
                <Typography className={classes.title} gutterBottom variant="h5">{title}</Typography> 
                <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">{description}</Typography>
                </CardContent> 
            </CardActionArea>
            <CardActions className={classes.cardActions}>
                <Button size="small" color="primary">Learn More</Button>
                <Typography variant="h5" color="textSecondary">{i + 1}</Typography>
            </CardActions>
        </Card>
    )
}

export default NewsCard