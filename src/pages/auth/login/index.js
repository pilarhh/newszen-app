/* eslint-disable react/jsx-key */
import Image from "next/image";
// import Link from "next/link";
import Footer from "../../../components/module/Footer";
import Button from "../../../components/Button";
import Input from "../../../components/Input";
import styles from "../../../styles/Login.module.css";
import { useRouter } from "next/router";
import header from "../../../assets/a94826add678c8ad2ef1990fd32535cb.jpg"

export default function Login() {
    const router = useRouter();

    return (
        <>
            <main className="row">
                <div className="col">
                    <Image src={header} alt="" height='1100'></Image>
                </div>
                <div className="col p-5">
                    <p className="fw-bold fs-3">Login</p>
                    <p className="fw-bold mt-5">Email Adress :</p>
                    <Input className='border-orange p-3 rounded-3 w-75' placeholder="Enter your email adress"></Input>
                    <p className="fw-bold mt-3">Password :</p>
                    <Input className='border-orange p-3 rounded-3 w-75' placeholder="Enter your email adress"></Input>
                    <Button className="rounded-3 btn-orange p-3 shadow w-75 mt-4" onClick={() => router.push(``)}>
                        Login
                    </Button>
                    <p className="fw-bold mt-5 text-center"></p>
                </div>
            </main>
            <Footer></Footer>
        </>
    );
}