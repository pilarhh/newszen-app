/* eslint-disable react/jsx-key */
import Image from "next/image";
// import Link from "next/link";
import Navbar from "../../../components/module/Navbar";
import Footer from "../../../components/module/Footer";
import Input from "../../../components/Input";
import Button from "../../../components/Button";
import styles from "../../../styles/Post.module.css"
import { useRouter } from "next/router";
import back from "../../../assets/chevron-left.svg";

export default function PostArticle() {
    const router = useRouter();

    return (
        <>
            <Navbar></Navbar>
            <main className="container mt-5 mb-5">
                <div className="d-flex justify-content-between">
                    <div className="pointer d-flex" onClick={() => router.back()}>
                        <Image className="mt-1" src={back} alt='' height={30} width={30}></Image>
                        <p className="ms-3 mt-4 fw-bold">Back</p>
                    </div>
                    <p className="fw-bold mt-3 fs-5">Write Article</p>
                    <p className="fw-bold mt-3 fs-6">Save as draft</p>
                </div>
                <div className="d-flex mt-5">
                    <Input className={`${styles.inputBox} border border-warning p-1 rounded-3 me-2 text-center`} placeholder="Add photo"></Input>
                    <div className="d-flex flex-column ms-2">
                        <div className="d-flex">
                            <Input className={`${styles.inputBox} border border-warning p-2 ps-3 rounded-3 me-3`} placeholder="Article Title"></Input>
                            <select className={`${styles.inputBox} border-warning p-2 ps-3 text-secondary rounded-3`} placeholder="Article Category">
                            <option value="Nation">Nation</option>
                                <option selected>Article Category</option>
                                <option value="World">World</option>
                                <option value="Regions">Regions</option>
                                <option value="Life">Life</option>
                                <option value="Health">Health</option>
                                <option value="Tech">Tech</option>
                            </select>
                        </div>
                        <Input className={`${styles.inputBoxType} border border-warning p-2 w-100 rounded-3 my-3 text-center`} placeholder="Type the article"></Input>
                        <Button className="rounded-3 btn-orange p-2 w-100 mt-2" onClick={() => router.push()}>
                            Request Publish Article
                        </Button>
                    </div>
                </div>
            </main>
            <Footer></Footer>

        </>
    );
}