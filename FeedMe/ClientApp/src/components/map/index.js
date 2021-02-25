import React from 'react';
import './index.css';
import { Map, GoogleApiWrapper } from 'google-maps-react';


class CustomMap extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {};


    render() {

        const mapStyles = {
            width: '80%',
            height: '480px',
        };

        return ( <
            Map google = { this.props.google }
            zoom = { 8 }
            style = { mapStyles }
            initialCenter = {
                { lat: 47.444, lng: -122.176 } }
            />
        );
    }
};

export default GoogleApiWrapper({
    apiKey: 'AIzaSyCoRb_IIdByotLomcBQRazPCHWsqEheeBM'
})(CustomMap);