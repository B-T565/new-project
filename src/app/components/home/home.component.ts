import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <app-header></app-header>
    
    <div class="grid-container">
      <div class="item">
          <a routerLink="#"><img src="./assets/Images/user.png" width="80px" height="80px" alt=""></a>
          <p>STAFF_APP</p>
      </div>
      <div class="item">
          <img src="./assets/Images/user1.png" width="80px" height="80px" alt="">
          <p>STAFF_ALL (Local)</p>
      </div>
      <div class="item">
          <img src="./assets/Images/1.png" width="80px" height="80px" alt="">
          <p>SELL</p>
      </div>
      <div class="item">
          <img src="./assets/Images/it-helpdesk.svg" width="80px" height="80px" alt="">
          <p>IT SUPPORT</p>
      </div>
      <!-- ======================== -->
      <div class="item">
          <img src="./assets/Images/network.png" width="80px" height="80px" alt="">
          <p>NETWORK</p>
      </div>
      <div class="item">
          <img src="./assets/Images/6892175.png" width="80px" height="80px" alt="">
          <p>CUSTOMERS</p>
      </div>
      <div class="item">
          <img src="./assets/Images/staff.png" width="80px" height="80px" alt="">
          <p>STAFF_BOY</p>
      </div>
      <div class="item">
          <img src="./assets/Images/staff1.png" width="80px" height="80px" alt="">
          <p>STAFF_GIRL</p>
      </div>
    </div>
  `,
  styles: [`
    /* grid-container */
    .grid-container {
        width: 1200px;
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-auto-rows: 200px;
        grid-gap: 20px;
        grid-column-gap: 20px;
        grid-row-gap: 20px;
        margin: auto;
        margin-top: 25px;
    }
    .grid-container>.item {
        display: flex;
        align-items: initial;
        justify-content: center;
        border-radius: 5px 5px 5px 5px;
        background-color: var(--colorBox);
        box-shadow: inset 0 2px 3px 0 var(--colorBox),
            0 3px 4px 0 var(--colorBox);
        box-shadow: 0 1px 3px 0 #fafafa,
            0 2px 4px 0 #ff8989;
        cursor: pointer;
        position: relative;
    }
    .grid-container>.item:hover {
        opacity: .8;
    }
    .grid-container .item>img {
        margin-top: 35px;
    }
    .grid-container .item>p {
        position: absolute;
        top: 70%;
        font-family: var(--fontEnglish);
    }

    /* responsive screen */
    @media screen and (max-width: 480px) {
        .grid-container {
            width: 100%;
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            padding: 0px 10px 50px 10px;
            grid-auto-rows: 150px;
            margin-top: 20px;
        }
        .grid-container>.item img {
            margin-top: 15px;
        }
        .grid-container>.item p {
            margin-top: 5px;
        }
    }
    @media screen and (min-width: 480px) {
        .grid-container {
            width: 100%;
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            padding: 0px 10px 50px 10px;
            grid-auto-rows: 150px;
            margin-top: 20px;
        }
        .grid-container>.item img {
            margin-top: 15px;
        }
        .grid-container>.item p {
            margin-top: 5px;
        }
    }
    @media screen and (min-width: 600px) {
        .grid-container {
            width: 100%;
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            padding: 0px 10px 50px 10px;
            grid-auto-rows: 150px;
            margin-top: 20px;
        }
        .grid-container>.item img {
            margin-top: 15px;
        }
        .grid-container>.item p {
            margin-top: 5px;
        }
    }
    @media screen and (min-width: 768px) {
        .grid-container {
            width: 100%;
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            padding: 0px 10px 50px 10px;
            grid-auto-rows: 150px;
            margin-top: 20px;
        }
        .grid-container>.item img {
            margin-top: 15px;
        }
        .grid-container>.item p {
            margin-top: 5px;
        }
    }
    @media screen and (min-width: 992px) {
        .grid-container {
            width: 100%;
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            padding: 0px 10px 50px 10px;
            grid-auto-rows: 150px;
            margin-top: 20px;
        }
        .grid-container>.item img {
            margin-top: 15px;
        }
        .grid-container>.item p {
            margin-top: 5px;
        }
    }
    @media screen and (min-width: 1200px) {
        .grid-container {
            width: 1200px;
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            grid-auto-rows: 200px;
            grid-gap: 20px;
            grid-column-gap: 20px;
            grid-row-gap: 20px;
            margin: auto;
            margin-top: 25px;
        }
        .grid-container>.item img {
            margin-top: 35px;
        }
        .grid-container>.item p {
            margin-top: 5px;
        }
    }
  `]
})
export class HomeComponent {

}
