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
import clock from "../../../assets/clock.svg"

export default function Home() {
    const router = useRouter();

    return (
        <>
            <Navbar></Navbar>
            <header className={`${styles.headerPic} p-5`}>
                <div className="p-4 text-white">
                    <p className='fs-1 fw-bold lh-sm'>Start Writing an <br></br> Article</p>
                    <p className="mt-3">You can be an author by being active in reading articles <br></br>
                        in a month or you can request to be an author if you <br></br>
                        have been a member for three months..</p>
                    <Button className="mt-4 rounded-3 btn-orange p-2 w-20" onClick={() => router.push("")}>
                        Start Writing
                    </Button>
                </div>
            </header>
            <main className="mx-5">
                {articles.map((item) => {
                    return (
                        <div className="bg-orange d-flex justify-content-between mb-4 w-100 p-2 rounded-3 pointer shadow">
                            <div className="d-flex w-50">
                                <Image className="rounded-3" src={item.imageArticle} alt="image" width="500px" height="10px" />
                                <div className="ms-3">
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
                            <Button className="h-25 rounded-3 btn-brown p-3 shadow-sm me-5 mt-5 w-20" onClick={() => router.push("")}>
                                Read Now
                            </Button>
                        </div>
                    )
                })};
            </main>
            <Footer></Footer>

        </>
    );
}