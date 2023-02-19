import React from "react";
import { Card, CardActions, CardActionArea, CardContent, CardMedia, Button, Typography } from "@mui/material";

const NewsCard = () => {
    return (
        <Card>
            <CardActionArea>
                <CardMedia/>
                <div>
                    <Typography variant="body2" color="textSecondary" component="h2"></Typography>
                    <Typography variant="body2" color="textSecondary" component="h2"></Typography>
                </div>
                <Typography gutterBottom variant="h5"></Typography> 
                <CardContent>
                <Typography variant="body2" color="textSecondary" component="p"></Typography>
                </CardContent> 
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary"></Button>
                <Typography variant="h5" color="textSecondary"></Typography>
            </CardActions>
        </Card>
    )
}

export default NewsCard