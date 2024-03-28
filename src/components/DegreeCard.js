import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions } from '@mui/material';
import AboutModal from './AboutModal';
import './DegreeCard.css';

/**
 * Class component representing a degree card.
 * @extends React.Component
 */
export default class DegreeCard extends React.Component {

    /**
     * Renders the DegreeCard component.
     * @returns {JSX.Element} JSX representing the DegreeCard component.
     */
    render() {
        const { title, description, concentrations, availableCertificates } = this.props;

        // ChatGPT helped me with formating
        let certificates = '';
        let headerValue = '';

        if (availableCertificates) {
            certificates = availableCertificates.join('\n');
            headerValue = "AVAILABLE CERTIFICATES";

        }

        let concentration = '';
        if (concentrations) {
            concentration = concentrations.join('\n');
            headerValue = "CONCENTRATION";
        }

        return (
            <Card className='Card' sx={{ width: 345 }}>
                <CardActionArea sx={{ minHeight: 345 }}>
                    <CardContent className='Content'>
                        <Typography gutterBottom variant="h5" component="div" id='title'>
                            {title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {description || certificates}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <AboutModal
                        quote={concentration || certificates}
                        name={"Read More"}
                        header={headerValue}
                    />
                </CardActions>
            </Card>
        );
    }
}
