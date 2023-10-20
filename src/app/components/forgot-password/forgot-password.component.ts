import { Component } from '@angular/core';

import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-forgot-password',
  template: `
    <img class="wave" src="./assets/Images/wave.png" alt="">
    <div class="container">
        <div class="img">
            <img src="./assets/Images/bg (1).svg" alt="">
        </div>
        <div class="login-content">
            <form action="/forgot-password">
                <img src="./assets/Images/logo.png" alt="">
                <h2 class="title">ភ្លេចលេខសម្លាត់</h2>
                <p>បញ្ជូលអីុមែលដើម្បីកំំណត់លេខសម្លាត់ឡើងវិញុ។</p>
                <div class="input-div one">
                    <div class="ii">
                        <fa-icon [icon]="mail"></fa-icon>
                    </div>
                    <div class="div1">
                        <input type="text" class="input" name="" id="" placeholder="បញ្ជូលអីុមែល">
                    </div>
                </div>
                <div class="btn">
                    <button type="submit"><a routerLink="#">កំំណត់លេខសម្លាត់ឡើងវិញុ</a></button>
                </div>
                <div class="back">
                    <a routerLink="/login">
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
    /* forgetPassword */
    .login-content p {
        margin-top: -10px;
        font-size: 14px;
        color: var(--colorBlack1);
    }
    .ii {
        color: var(--colorRed);
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 10px;
    }
    .ii i {
        transition: .3s;
    }
    .input-div .div1 {
        position: relative;
        height: 45px;
        margin-top: 10px;
    }
    .input-div .div1 input {
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
        color: var(--colorBlack1);
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
        /* forgetPassword */
        .login-content p {
            margin-top: 10px;
        }
        .login-content .back p {
            color: var(--colorBlack1);
            margin-top: -20px;
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
        /* forgetPassword */
        .login-content p {
            margin-top: 10px;
        }
        .login-content .back p {
            color: var(--colorBlack1);
            margin-top: -20px;
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
        /* forgetPassword */
        .login-content p {
            margin-top: 10px;
        }
        .login-content .back p {
            color: var(--colorBlack1);
            margin-top: -20px;
        }
    }

  `]
})
export class ForgotPasswordComponent {
  mail = faEnvelope;
  left = faAngleLeft;
}
