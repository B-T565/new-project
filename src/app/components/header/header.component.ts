import { Component } from '@angular/core';

import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faLock } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  template: `
    <div class="navbar">
      <div class="item">
        <a href="#">
          <img src="./assets/Images/logo.png" width="65px" height="60px" alt="logo">
        </a>
        <p>CORE SECURITY</p>
      </div>
      <div class="item1">
        <nav>
          <ul>
            <li class="drop"><a routerLink="#">
              <fa-icon [icon]="user" class="icons"></fa-icon></a>
              <div class="dropdown">
                <a routerLink="/login"><fa-icon [icon]="user"></fa-icon> គណនីថ្មី</a>
                <a routerLink="/new-acc"><fa-icon [icon]="lock"></fa-icon> ចាក់ចេញ</a>
              </div>
            </li>
            <li><a routerLink="#"><img src="./assets/Images/cm.png" width="25px" height="25px" alt="icon"></a></li>
          </ul>
        </nav>
      </div>
    </div>
  `,
  styles: [`
    .navbar{
      display: grid;
      grid-template-columns: repeat(2,1fr);
      background-color: var(--colorRed);
      grid-auto-rows: 60px;
    }
    .item{
      display: flex;
    }
    a>img{
      margin-left: 10px;
    }
    .item>p{
      display: flex;
      justify-content: center;
      align-items: center;
      font-family: var(--fontEnglish);
      color: var(--background);
    }
    .item1>nav{
      float: right;
    }
    nav ul{
      display: flex;
      margin-right: 50px;
    }
    nav ul li{
      list-style-type: none;
    }
    nav ul li a>.icons{
      font-size: 20px;
      margin-right: 20px;
      color: var(--background);
    }
    nav ul li a>img{
      margin-top: -2px;
    }
    nav ul li a{
      display: block;
      margin-top: 20px;
    }
    nav ul li a:hover{
      opacity: .9;
    }
    li .drop{
      position: relative;
      display: inline-block;
    }
    .dropdown{
      position: absolute;
      background-color: #f9f9f9;
      width: 140px;
      display: none;
      border-radius: 0px 0px 5px 5px;
      box-shadow: 0px 5px 10px 0px rgba(0,0,0,0.1);
      z-index: 1;
      right: 2%;
      top: 7%;
      transition: 1s all; 
    }
    .dropdown a{
      text-align: center;
      margin-bottom: 20px;
      text-decoration: none;
      color: var(--colorBlack);
    }
    .dropdown a:hover{
      background-color: var(--colorRed);
      color: var(--colorBox);
    }
    .drop:hover .dropdown{
      display: block;
    }
    @media screen and (max-width: 768px){
      a>img{
        width: 55px;
        margin-top: 5px;
        height: 50px;
      }
      .item>p{
        font-size: 12px;
      }
      nav ul li a>.icons{
        font-size: 15px;
        margin-right: 10px;
      }
      nav ul li a>img{
        width: 20px;
        height: 20px;
        margin-top: -1px;   
        margin-right: -20px;
      }
      .dropdown{
        width: 100px;
        position: absolute;
        right: 5%;
      }
      .dropdown a{
        font-size: 12px;
      }
    }
  `]
})
export class HeaderComponent {
    user = faUser;
    lock = faLock;
}
