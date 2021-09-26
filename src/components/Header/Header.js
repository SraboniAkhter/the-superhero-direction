import React from 'react';

const Header = () => {
    return (
         <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
     <a class="navbar-brand" href="home">Writer-Association</a>
    <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="home">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="writer">Writer-info</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="about">About</a>
        </li>
      </ul>
      <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-info" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
        </div>
    );
};

export default Header;