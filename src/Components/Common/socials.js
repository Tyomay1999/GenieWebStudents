import Youtube_SVG from "../../Assets/Socials/youtube.svg"
import Instagram_SVG from "../../Assets/Socials/instagram.svg"
import Telegram_SVG from "../../Assets/Socials/telegram.svg"
import TikTok_SVG from "../../Assets/Socials/tiktok.svg"
import Linkedin_SVG from "../../Assets/Socials/linkedin.svg"



export const Telegram = ({width, height}) => {
    return <div style={{width, height, cursor: "pointer"}}>
        <img style={{width: "100%", height: "100%"}} src={Telegram_SVG} alt="Telegram"/>
    </div>
}
export const Instagram = ({width, height}) => {
    return <div style={{width, height, cursor: "pointer"}}>
        <img style={{width: "100%", height: "100%"}} src={Instagram_SVG} alt="Instagram"/>
    </div>
}
export const Youtube = ({width, height}) => {
    return <div style={{width, height, cursor: "pointer"}}>
        <img style={{width: "100%", height: "100%"}} src={Youtube_SVG} alt="Youtube"/>
    </div>
}
export const Linkedin = ({width, height}) => {
    return <div style={{width, height, cursor: "pointer"}}>
        <img style={{width: "100%", height: "100%"}} src={Linkedin_SVG} alt="Linkedin"/>
    </div>
}
export const TikTok = ({width, height}) => {
    return <div style={{width, height, cursor: "pointer"}}>
        <img style={{width: "100%", height: "100%"}} src={TikTok_SVG} alt="TikTok"/>
    </div>
}
