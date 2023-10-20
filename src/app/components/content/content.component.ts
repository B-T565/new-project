import { Component } from '@angular/core';

@Component({
  selector: 'app-content',
  template: `
    <app-header></app-header>
    <!-- container -->
    <div class="container">
        <div class="container-left">
            <img src="./assets/Images/whatsapp.png" width="80px" height="80px" alt="">
            <div class="txt">
                <p>WhatsApp</p>
            </div>
        </div>

        <div class="container-left">
            <img src="./assets/Images/messenger.png" width="80px" height="80px" alt="">
            <div class="txt">
                <p>Messengers</p>
            </div>
        </div>

        <div class="container-left">
            <img src="./assets/Images/slack.png" width="80px" height="80px" alt="">
            <div class="txt">
                <p>Slack</p>
            </div>
        </div>

        <div class="container-left">
            <img src="./assets/Images/skype.png" width="80px" height="80px" alt="">
            <div class="txt">
                <p>Skype</p>
            </div>
        </div>

        <div class="container-left">
            <img src="./assets/Images/gmail.png" width="80px" height="80px" alt="">
            <div class="txt">
                <p>Gmail</p>
            </div>
        </div>

        <div class="container-left">
            <img src="./assets/Images/telegram.png" width="80px" height="80px" alt="">
            <div class="txt">
                <p>Telegram</p>
            </div>
        </div>

        <div class="container-left">
            <img src="./assets/Images/android_message.png" width="80px" height="80px" alt="">
            <div class="txt">
                <p>Android Messages</p>
            </div>
        </div>

        <div class="container-left">
            <img src="./assets/Images/google_calender.png" width="80px" height="80px" alt="">
            <div class="txt">
                <p>Google Calendar</p>
            </div>
        </div>

        <div class="container-left">
            <img src="./assets/Images/discord.png" width="80px" height="80px" alt="">
            <div class="txt">
                <p>Discord</p>
            </div>
        </div>

        <div class="container-left">
            <img src="./assets/Images/hangouts.png" width="80px" height="80px" alt="">
            <div class="txt">
                <p>Hangouts</p>
            </div>
        </div>

        <div class="container-left">
            <img src="./assets/Images/linkedIn.png" width="80px" height="80px" alt="">
            <div class="txt">
                <p>LinkedIn</p>
            </div>
        </div>

        <div class="container-left">
            <img src="./assets/Images/twitter.png" width="80px" height="80px" alt="">
            <div class="txt">
                <p>Tweetdeck</p>
            </div>
        </div>

        <div class="container-left">
            <img src="./assets/Images/trello.png" width="80px" height="80px" alt="">
            <div class="txt">
                <p>Trello</p>
            </div>
        </div>

        <div class="container-left">
            <img src="./assets/Images/offic365-outlook.png" width="80px" height="80px" alt="">
            <div class="txt">
                <p>Office 365 - Outlook</p>
            </div>
        </div>

        <div class="container-left">
            <img src="./assets/Images/google-keep.png" width="80px" height="80px" alt="">
            <div class="txt">
                <p>Google Keep</p>
            </div>
        </div>

        <div class="container-left">
            <img src="./assets/Images/hangout_chat.png" width="80px" height="80px" alt="">
            <div class="txt">
                <p>Hangouts Chat</p>
            </div>
        </div>
    </div>
  `,
  styles: [`
    /* container */
    .container {
        width: 1200px;
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-gap: 20px;
        grid-auto-rows: 200px;
        margin: auto;
        margin-top: 20px;
    }
    .container .container-left {
        width: 100%;
        height: 100%;
        background-color: var(--colorBox);
        float: left;
        margin-left: .5%;
        border-radius: 5px 5px 5px 5px;
        box-shadow: 0px 1px 3px 0px var(--colorBox),
        0px 3px 2px 0px var(--colorBox);
        cursor: pointer;
    }

    .container .container-left img {
        margin-left: 35%;
        margin-top: 35px;
    }

    .container .container-left .txt p {
        text-align: center;
        margin-top: 20px;
        font-size: var(--fontSize);
        font-family: var(--fontEnglish);
    }

    /* media responsive screen */
    @media screen and (max-width: 600px) {
        .container {
            width: 100%;
            display: grid;
            grid-template-columns: repeat( 2 ,1fr);
            padding: 0px 10px 30px 8px;
        }
        .container-left img{
            width: 60px;
            height: 60px;
        }
        .container-left .txt p{
            font-size: 12px;
        }
    }
    @media screen and (min-width: 600px) {
        .container {
            width: 100%;
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            padding: 0px 10px 20px 8px;
        }
    }
    @media screen and (min-width: 768px) {
        .container {
            width: 100%;
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            padding: 0px 10px 20px 8px;
        }
    }
    @media screen and (min-width: 992px) {
        .container {
            width: 100%;
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            padding: 0px 10px 20px 8px;
        }
    }
    @media screen and (min-width: 1200px) {
        .container {
            width: 100%;
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            padding: 0px 10px 20px 8px;
        }
    }
  `]
})
export class ContentComponent {

}
