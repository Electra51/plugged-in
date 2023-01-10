import style from "../styles/Footer.module.css";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return (
        <div className={style.container}>
            <div className={style.cardL}>

                <img src="/navlogo.png" alt="" width={100} />
                <p className='font-normal'>Online meeting recording application using nextJs</p>
            </div>
            <div className={style.cardS}>
                <div className={style.cardItem}>
                    Services

                </div>
                <div className={style.cardItem}>
                    Terms & Condition
                </div>
                <div className={style.cardItem}>
                    Privacy Policy
                </div>
                <div className={style.cardItem}>
                    FAQ
                </div>
            </div>
            <div className={style.cardS}>
                <div className={style.cardItem}>
                    Follow us:
                </div>
                <div className={style.cardItem}>

                    <div className={style.cardItemIcon}>
                        <a href=""><FaFacebook /></a>
                        <a href=""><FaGithub /></a>
                        <a href=""><FaLinkedin /></a>
                    </div>

                </div>
                <div className={style.cardItem}>
                    Copyright © 2023 - All right reserved
                </div>
            </div>
        </div>
    );
};

export default Footer;
