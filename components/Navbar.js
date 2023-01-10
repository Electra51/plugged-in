import { useState } from "react";
import style from "../styles/Navbar.module.css";
import Link from "next/link";

const Navbar = () => {
    const [open, setOpen] = useState(false);

    return (
        <div className={style.container}>
            <Link href="/">
                <img src="/navlogo.png" alt="logo" width={90} />
            </Link>
            <ul className={style.list}>
                <li className={style.listItem}>
                    <Link href="/">Home</Link>
                </li>
                <li className={style.listItem}>
                    <Link href="/pricing">Pricing</Link>
                </li>
                <li className={style.listItem}>
                    <Link href="/about">About Us</Link>
                </li>
                <li className={style.listItem}>
                    <Link href="/login">Login</Link>
                </li>
                <li className={style.listItem}>
                    <Link href="/signup">Sign Up</Link>
                </li>
            </ul>
            {/* hamburger menu for small device  */}
            <div className={style.hamburger} onClick={() => setOpen(!open)}>
                <div className={style.line} />
                <div className={style.line} />
                <div className={style.line} />
            </div>
            <ul onClick={() => setOpen(false)} className={style.menu} style={{ right: open ? "0px" : "-50vw" }}>
                <li className={style.menuItem}>
                    <Link href="/">Home</Link>
                </li>
                <li className={style.menuItem}>
                    <Link href="/pricing">Pricing</Link>
                </li>
                <li className={style.menuItem}>
                    <Link href="/about">About Us</Link>
                </li>
                <li className={style.menuItem}>
                    <Link href="/login">Login</Link>
                </li>
                <li className={style.menuItem}>
                    <Link href="/signup">Sign Up</Link>
                </li>

            </ul>
        </div>
    );
};

export default Navbar;