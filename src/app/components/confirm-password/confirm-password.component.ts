import { Component } from '@angular/core';

import { faLock } from '@fortawesome/free-solid-svg-icons';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-confirm-password',
  template: `
  <img class="wave" src="./assets/Images/wave.png" alt="">
  <div class="container">
      <div class="img">
          <img src="./assets/Images/bg (1).svg" alt="">
      </div>
      <div class="login-content">
          <form action="/otp">
              <img src="./assets/Images/logo.png" alt="">
              <h2 class="title">សូមផ្ទៀងផ្ទាត់គណនីរបស់អ្នក</h2>

              <div class="input-div pass">
                  <div class="i">
                      <fa-icon [icon]="lock"></fa-icon>
                  </div>
                  <div class="div">
                      <input type="password" class="input" name="" id="" placeholder="ពាក្យសម្ងាត់ថ្មី">
                  </div>
              </div>
              <div class="input-div pass">
                  <div class="i">
                      <fa-icon [icon]="lock"></fa-icon>
                  </div>
                  <div class="div">
                      <input type="password" class="input" name="" id="" placeholder="បញ្ជាក់ពាក្យសម្ងាត់ថ្មី">
                  </div>
              </div>

              <div class="btn">
                  <button type="button"><a routerLink="/login">ចូលប្រើប្រាស់</a></button>
              </div>
              <div class="back">
                  <a routerLink="/otp">
                      <p><fa-icon [icon]="left"></fa-icon> ត្រឡប់ទៅចូលប្រើប្រាស់</p>
                  </a>
              </div>
              <div class="footer-logo">
                  <img src="./assets/Images/kh-removebg-preview.png" alt="">
                  <img src="./assets/Images/us.png" alt="">
              </div>
          </form>
      </div>
  </div>
  `,
  styles: [`
    .wave {
      position: fixed;
      bottom: 0;
      left: 0;
      height: 100%;
      z-index: -1;
    }
    .container {
        width: 100vw;
        height: 100vh;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 7rem;
    }
    .img {
        display: flex;
        justify-content: flex-end;
        align-items: center;
    }
    .login-content {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        text-align: center;
        position: relative;
    }
    .img img {
        width: 500px;
    }
    form {
        width: 360px;
    }
    .login-content img {
        margin-bottom: 30px;
        height: 90px;
    }
    .login-content h2 {
        margin: 20px 0;
        margin-top: -5px;
        color: var(--colorBlack1);
        text-transform: uppercase;
        font-size: 1.3rem;
    }
    .login-content .input-div {
        position: relative;
        display: grid;
        grid-template-columns: 7% 93%;
        margin: 25px 0;
        padding: 5px 0px;
        border-bottom: 2px solid var(--borderColor);
    }
    .login-content .input-div.one {
        margin-top: 0px;
    }
    .i {
        color: var(--colorRed);
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .i i {
        transition: .3s;
    }
    .input-div .div {
        position: relative;
        height: 45px;
    }
    .input-div:before,
    .input-div:after {
        content: '';
        position: absolute;
        bottom: -2px;
        width: 0%;
        height: 2px;
        background-color: var(--colorRed);
        transition: .4s;
    }
    .input-div.focus .i i {
        color: var(--colorRed);
    }
    .input-div .div input {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        border: none;
        outline: none;
        background: none;
        padding: 0.5rem 0.7rem;
        font-size: 1rem;
        color: var(--colorBlack);
        font-family: 'poppins', sans-serif;
    }
    .input-div .pass {
        margin-bottom: 4px;
    }
    .remumber {
        width: 100%;
        height: 20px;
        display: inline-block;
    }
    .remumber a{
        color: var(--colorBlack);
    }
    .rem-left {
        float: left;
        text-align: left;
        text-decoration: none;
        color: var(--colorRed);
        font-size: 0.9rem;
        transition: .3s;
    }
    .rem-right {
        float: right;
        text-align: right;
        text-decoration: none;
        color: var(--colorRed);
        font-size: 0.9rem;
        transition: .3s;
    }
    .remumber a:hover {
        opacity: 0.8;
    }
    .btn button{
        display: block;
        width: 380px;
        height: 40px;
        border-radius: 25px;
        outline: none;
        border: none;
        background-image: linear-gradient(to right, var(--colorRed), var(--colorRed), var(--colorRed));
        background-size: 200%;
        font-size: 13px;
        font-family: "Kantumruy";
        text-transform: uppercase;
        margin: 1rem 0;
        cursor: pointer;
        transition: .5s;
        margin-left: -10px;
    }
    .btn a {
        text-decoration: none;
        color: var(--background);
    }
    .btn button:hover {
        opacity: 0.9;
    }
    .back {
        margin-top: 40px;
        text-align: right;
    }
    .back a {
        font-size: 14px;
        text-decoration: none;
        color: var(--colorBlack1);
    }
    .back a:hover {
        opacity: 0.8;
    }
   .footer-logo {
        width: 200px;
        height: 50px;
        margin: auto;
        margin-top: 50px;
        display: inline-block;
    }
    .footer-logo img {
        width: 25px;
        height: 25px;
        cursor: pointer;
        margin-top: 25px;
        margin-left: 7px;
    }
    .footer-logo img:hover {
        transform: scale(102%);
        opacity: 0.8;
    }
    /* From responsive screen */
    @media screen and (max-width: 1050px) {
        .container {
            grid-gap: 5rem;
        }
        .back a {
            color: var(--colorBlack1);
        }
    }
    @media screen and (max-width: 1000px) {
        form {
            width: 300px;
            margin-left: 30px;
        }
        .login-content h2 {
            font-size: .9rem;
            margin: 8px 0;
        }
        .img img {
            width: 400px;
        }
    }
    @media screen and (max-width: 900px) {
        .container {
            margin-top: -20px;
            grid-template-columns: .9fr;
        }
        .login-content h2 {
            font-size: 20px;
            margin-top: -5px;
        }
        .img {
            display: none;
        }
        .wave {
            display: none;
        }
        .login-content {
            justify-content: center;
        }
        .btn button {
            width: 320px;
            margin-left: -10px;
            font-size: .8rem;
        }
    }
    @media screen and (max-width: 800px) {
        .container {
            display: flex;
            justify-content: center;
            align-items: center;
            margin-top: -20px;
            margin-left: -20px;
            grid-template-columns: .9fr;
        }
        .login-content h2 {
            margin-top: -5px;
            font-size: 20px;
        }
        .img {
            display: none;
        }
        .wave {
            display: none;
        }
        .login-content {
            justify-content: center;
        }
        .btn button {
            width: 320px;
            margin-left: -10px;
            font-size: .8rem;
        }
    }
  `]
})
export class ConfirmPasswordComponent {
  lock = faLock;
  left = faAngleLeft;
}
