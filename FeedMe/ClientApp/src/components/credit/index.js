import React from 'react';
import './index.css';

function Credit() {
  return (
    <div id="credit-container">
        <a href="/" class="title">FEED ME</a>
        <h2>Credits</h2>
        <ul>
          <li>
            <a class="link" href="https://codesandbox.io/s/github/hadriengerard/spinning-wheel-game-react/tree/master/?from-embed">
              Wheel component created from: - https://codesandbox.io/s/github/hadriengerard/spinning-wheel-game-react/tree/master/?from-embed
            </a>
          </li>
          <li>
            <a class="link" href="https://react-bootstrap.github.io/components/alerts">
              React bootstrap components created from: - https://react-bootstrap.github.io/components/alerts
            </a>
          </li>
          <li>
            <a class="link" href="https://wallhaven.cc/">
              Wall papers from: - https://wallhaven.cc/
            </a>
          </li>
          <li>
            <a class="link" href="https://dev.to/jessicabetts/how-to-use-google-maps-api-and-react-js-26c2">
              Google map from: - https://dev.to/jessicabetts/how-to-use-google-maps-api-and-react-js-26c2
            </a>
          </li>
        </ul>
    </div>
  );
}

export default Credit;
