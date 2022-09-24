import { useState } from "react"

import "./Notifications.css"

import AvatarAngela from "../../assets/images/avatar-angela-gray.webp"
import AvatarAnna from "../../assets/images/avatar-anna-kim.webp"
import AvatarJacob from "../../assets/images/avatar-jacob-thompson.webp"
import AvatarKimberly from "../../assets/images/avatar-kimberly-smith.webp"
import AvatarMark from "../../assets/images/avatar-mark-webber.webp"
import AvatarNathan from "../../assets/images/avatar-nathan-peterson.webp"
import AvataRizky from "../../assets/images/avatar-rizky-hasanuddin.webp"
import ImageChess from "../../assets/images/image-chess.webp"

const Notifications = () => {
    const [countNofification, setCountNotification] = useState(3)
    const [classNames, setClassNames] = useState(true)

    function allRead() {
        setCountNotification(0)
        setClassNames(false)
    }

    return (
        <div className="notificationsContainer">
            <header>
                <h1>Notifications <span>{countNofification}</span></h1>
                <button onClick={allRead}>Mark all as read</button>
            </header>

            <div className={`card ${classNames ? 'unread' : ''}`}>
                <div className="profile-photo">
                    <img src={AvatarMark} alt="Profile photo of Mark Webber" />
                </div>

                <div className="info-notification">
                    <p><strong>Mark Webber</strong> reacted to your recent post <strong>My first tournament today!</strong> <span className="flag"></span></p>

                    <span>1m ago</span>
                </div>
            </div>

            <div className={`card ${classNames ? 'unread' : ''}`}>
                <div className="profile-photo">
                    <img src={AvatarAngela} alt="Profile photo of Angela Gray" />
                </div>

                <div className="info-notification">
                    <p><strong>Angela Gray</strong> followed you <span className="flag"></span></p>

                    <span>5m ago</span>
                </div>
            </div>

            <div className={`card ${classNames ? 'unread' : ''}`}>
                <div className="profile-photo">
                    <img src={AvatarJacob} alt="Profile photo of Jacob Thompson" />
                </div>

                <div className="info-notification">
                    <p><strong>Jacob Thompson</strong> has joined your group <strong className="chess-club">Chess Club</strong> <span className="flag"></span></p>

                    <span>1 day ago</span>
                </div>
            </div>

            <div className="card">
                <div className="profile-photo">
                    <img src={AvataRizky} alt="Profile photo of Rizky Hasanuddin" />
                </div>

                <div className="info-notification">
                    <p><strong>Rizky Hasanuddin</strong> sent you a private message</p>

                    <span>5 day ago</span>

                    <div id="message">
                        <p>Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and 
                        I'm already having lots of fun and improving my game.</p>
                    </div>
                </div>
            </div>

            <div className="card">
                <div className="profile-photo">
                    <img src={AvatarKimberly} alt="Profile photo of Kimberly Smith" />
                </div>

                <div className="info-notification">
                    <p><strong>Kimberly Smith</strong> commented on your picture</p>

                    <span>1 week ago</span>
                </div>

                <div className="image-chess">
                    <img src={ImageChess} alt="Image Chess" />
                </div>
            </div>

            <div className="card">
                <div className="profile-photo">
                    <img src={AvatarNathan} alt="Profile photo of Nathan Peterson" />
                </div>

                <div className="info-notification">
                    <p><strong>Nathan Peterson</strong> reacted to your recent post 5 <strong>end-game strategies to increase your win rate</strong></p>

                    <span>2 weeks ago</span>
                </div>
            </div>

            <div className="card">
                <div className="profile-photo">
                    <img src={AvatarAnna} alt="Profile photo of Anna Kim" />
                </div>

                <div className="info-notification">
                    <p><strong>Anna Kim</strong> left the group <strong className="chess-club">Chess Club</strong></p>

                    <span>2 weeks ago</span>
                </div>
            </div>
        </div>
    )
}

export default Notifications