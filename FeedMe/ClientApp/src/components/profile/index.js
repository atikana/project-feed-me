import React from 'react';
import './index.css';
import { Button, Form, Tabs, Tab } from 'react-bootstrap';

function Profile() {
  return (
    <div id="profile-container">
        <a href="/" className="title">User Profile</a>
        <div>
          <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
            <Tab eventKey="favorites" title="Favorites">
            </Tab>
            <Tab eventKey="blacklist" title="Blacklist">
            </Tab>
            <Tab eventKey="friends" title="Friends">
            </Tab>
            <Tab eventKey="uploads" title="Uploads">
            </Tab>
          </Tabs>
        </div>
    </div>
  );
}

export default Profile;
