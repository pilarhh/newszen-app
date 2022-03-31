/* eslint-disable react/jsx-key */
import Image from "next/image";
// import Link from "next/link";
import Navbar from "../../../components/module/Navbar";
import Footer from "../../../components/module/Footer";
import Button from "../../../components/Button";
import styles from "../../../styles/Articles.module.css";
import { articles } from "../../../data/article";
import { useRouter } from "next/router";
import thumb from "../../../assets/hand-thumbs-up.svg";
import clock from "../../../assets/clock.svg";

export default function Articles() {
    const router = useRouter();

    return (
        <>
            <Navbar></Navbar>
            <header className={`${styles.headerPic} p-5`}>
                <div className="p-5 text-white">
                    <p className='fs-1 fw-bold lh-sm font-header'>Start Writing an <br></br> Article</p>
                    <p className="mt-3 font-header">You can be an author by being active in reading articles <br></br>
                        in a month or you can request to be an author if you <br></br>
                        have been a member for three months..</p>
                    <Button className="mt-4 rounded-3 btn-orange p-2 w-20 font-header" onClick={() => router.push("")}>
                        Start Writing
                    </Button>
                </div>
            </header>
            <main className="mx-5 mt-5">
                {articles.map((item) => {
                    return (
                        <>
                        <div className="d-flex justify-content-between my-4 w-100 p-2 rounded-3">
                            <div className="d-flex w-50">
                                <Image className="rounded-3" src={item.imageArticle} alt="image"  />
                                <div className="ms-3 d-flex flex-column justify-content-between">
                                    <p className="fs-6 fw-bold">{item.title}</p>
                                    <p className="fs-7">{item.description}</p>
                                    <div className="d-flex">
                                        <Image className="" src={thumb} alt="thumb"></Image>
                                        <p className="mt-3 ms-2 me-4">2.1k</p>
                                        <Image className="" src={clock} alt="clock"></Image>
                                        <p className="mt-3 ms-2">{item.createdAt}</p>
                                    </div>
                                </div>
                            </div>
                            <Button className="h-25 rounded-3 btn-brown btn-read p-3 shadow me-5 mt-5 w-20 text-white" onClick={() => router.push(`/main/articles/${item.id}`)}>
                                Read Now
                            </Button>
                        </div>
                            <div className="border-bottom"></div>
                        </>
                    )
                })};
            </main>
            <Footer></Footer>

        </>
    );
}