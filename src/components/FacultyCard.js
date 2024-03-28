import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import AboutModal from './AboutModal';


/**
 * Component representing a card for displaying information about a faculty member.
 * @extends React.Component
 */
export default class FacultyCard extends React.Component {

    /**
     * Renders the FacultyCard component.
     * @returns {JSX.Element} JSX representing the FacultyCard component.
     */
    render() {
        const { username, name, tagline, title, interestArea, office, website, phone, email, twitter, facebook, imagepath } = this.props;
        let info = '';
        if (username) info += "Username: " + username + "\n";
        if (tagline) info += "Tagline: " + tagline + "\n";
        if (interestArea) info += "Area of interest: " + interestArea + "\n";
        if (website) info += "Website: " + website + "\n";
        if (twitter) info += "Twitter: " + twitter + "\n";
        if (facebook) info += "Facebook: " + facebook + "\n";
        return (
            <Card className='Card' sx={{ width: 345, marginBottom: 5 }}>
                <CardMedia
                    component="img"
                    alt="green iguana"
                    height="300"
                    image={imagepath}
                />
                <CardContent sx={{ height: 200 }}>
                    <Typography gutterBottom variant="h5" component="div">
                        {name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Position: {title}<br />
                        Phone: {phone}<br />
                        Email: {email}<br />
                        Office: {office}<br />
                    </Typography>
                </CardContent>
                <CardActions>
                    <AboutModal
                        quote={<pre>{info}</pre>}
                        name={"Read More"}
                        header={"Additional Information"}
                    />
                </CardActions>
            </Card>
        );
    }
}
