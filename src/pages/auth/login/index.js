/* eslint-disable react/jsx-key */
import Image from "next/image";
// import Link from "next/link";
import Footer from "../../../components/module/Footer";
import Button from "../../../components/Button";
import Input from "../../../components/Input";
import styles from "../../../styles/Login.module.css";
import { useRouter } from "next/router";
import header from "../../../assets/a94826add678c8ad2ef1990fd32535cb.jpg"
import Link from "next/link";

export default function Login() {
    const router = useRouter();

    return (
        <>
            <main className="row">
                <div className={`${styles.headerPi} col mb-0`}>
                    <Image className="mb-0" src={header} alt="" height='1300'></Image>
                </div>
                <div className="col mt-5 text-center">
                    <p className="fw-bold fs-3">Login</p>
                    <p className="fw-bold mt-5">Email Address :</p>
                    <Input className='border border-warning p-3 rounded-3 w-75' placeholder="Enter your email address"></Input>
                    <p className="fw-bold mt-3">Password :</p>
                    <Input className='border border-warning p-3 rounded-3 w-75' placeholder="Enter your password"></Input>
                    <Button className="rounded-3 btn-orange p-3 shadow w-75 mt-4 mb-1" onClick={() => router.push(``)}>
                        Login
                    </Button>
                    <p className="fw-bold mt-5 text-secondary">Don&apos;t have an account?</p>
                    <Button className="rounded-3 btn-brown p-3 shadow w-75 mt-1 mb-5" onClick={() => router.push(``)}>
                        Sign Up Now
                    </Button>
                    <br></br>
                    <Link className="pointer" href="/">Back to Home Page</Link>
                </div>
            </main>
            <Footer></Footer>
        </>
    );
}