class ClubItem extends HTMLElement {
  set club(club) {
    this._club = club;
    this.render();
  }

  render() {
    this.innerHTML = `

    <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      
    }
    :host {
      display: block;
      margin-bottom: 18px;
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
      border-radius: 10px;
      overflow: hidden;
    }
   
    club-item{
      font-family: "Poppins", sans-serif;
      display: block;
      padding-top: 50px;
      padding-bottom: 50px;
      background: #fff;
      border-radius: 1rem;
      margin-left: 0.7rem;
      margin-top: 20px;
      margin-bottom: 70px;
      width: 98%;
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
      align-items: center;
      text-align: center;
    }
    club-item:hover{
    transform: scale(0.9);
    transition: all  1s;
    }
    .fan-art-club {
      width: 20%;
      max-height: 300px;
      object-fit: cover;
      object-position: center;
      border-radius: 10px;

    }
    .fan-art-club:hover{
    transform: scale(1.1);
    transition: all ease 1s;
    }
    .club-info {
      padding: 24px;
    }
    
    .club-info > h2 {
      font-weight: lighter;
      
    }
    
    .club-info > p {
      text-align: Justify;
      margin-top: 25px;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 10; 
      /* number of lines to show */
    }
    .club-info > p:hover{
      transform: scale(1.0);
      transition: all ease 1s;
    }
    
  
        @media(max-width:375px) {
          width: 100%;
      }
      
    

  </style>
  
  <img class="fan-art-club" src="${this._club.strTeamBadge}" alt="Fan Art">
  <div class="club-info">
    <h2>${this._club.strTeam}</h2>
    <p>${this._club.strDescriptionEN}</p>
  </div>
      `;
  }
}

customElements.define("club-item", ClubItem);
