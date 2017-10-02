import React from 'react';
import { withRouter } from 'react-router-dom';

import ProjectStore from '../stores/ProjectStore';

//material

import TextField from 'material-ui/TextField';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';

class ProjectDetails extends React.Component {

    constructor(props) {
        super(props)

        this.id = this.props.match.params.id;       

        this.loadProject(this.id);
    }

    loadProject(id) {
        let project = ProjectStore.getProject(id);        
      
        if (project) {            
            this.state = {
                title: project.title
            };
        } else {
            console.log(`Project not found: ${this.id}`)
        }
    }

    render() {

        return (
            <div>
                <TextField
                    id="search"
                    label="Search field"
                    type="search"
                    margin="normal"
                />
                <div>
                    <Card>
                        <CardMedia
                            image="/static/images/cards/contemplative-reptile.jpg"
                            title="Contemplative Reptile"
                        />
                        <CardContent>
                            <Typography type="headline" component="h2">
                                {this.state.title}
                            </Typography>
                            <Typography component="p">
                                Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                across all continents except Antarctica
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button dense color="primary">
                                Share
                            </Button>
                            <Button dense color="primary">
                                Learn More
                            </Button>
                        </CardActions>
                    </Card>
                </div>
            </div>
        );
    }
}

export default withRouter(ProjectDetails);