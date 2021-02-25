import React from 'react';
import './index.css';

function SideBar() {
  return (
    <form class="sidebar" id="sidebar">
      <a href="README.md" class="sidebar_item">About</a>
      <a href="#" class="sidebar_item">Browse all</a>
      <a href="#" class="sidebar_item">Look for friends</a>
      <a href="#" class="sidebar_item">Contact us</a>
      <a href="credits.html" class="sidebar_item">Credits</a>
    </form>
  );
}

export default SideBar;
