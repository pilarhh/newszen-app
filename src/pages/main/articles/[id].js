/* eslint-disable react/jsx-key */
import Image from "next/image";
// import Link from "next/link";
import Navbar from "../../../components/module/Navbar";
import Footer from "../../../components/module/Footer";
import styles from "../../../styles/Articles.module.css";
import { articles } from "../../../data/article";
import { useRouter } from "next/router";
import back from "../../../assets/chevron-left.svg";
import share from "../../../assets/send.svg";
import thumb from "../../../assets/hand-thumbs-up.svg";


export default function Home() {
    const router = useRouter();
    const id = router.query.id

    return (
        <>
            <Navbar></Navbar>
            <main className="container mt-5">
                <div className="d-flex justify-content-between">
                    <div className="pointer d-flex" onClick={()=> router.push("/main/articles")}>
                        <Image className="mt-" src={back} alt='' height={25} width={25}></Image>
                        <p className="ms-3 mt-3 fw-bold">Back</p>
                    </div>
                    <p className="fw-bold mt-3">Article Viewer</p>
                    <Image className="" src={share} alt='' height={25} width={25}></Image>
                </div>
                {articles.map((item) => {
                    if (item.id == id)
                        return (
                            <div className="mt-5">
                                <Image src={item.imageArticle} alt='' ></Image>
                                {/* <Image src={item.imageArticle} alt='' width={555}></Image> */}
                                <div className="d-flex mt-3 justify-content-between">
                                    <div className="d-flex">
                                        <Image className="rounded-3" src={item.authorPicture} alt="" height={60} width={60}></Image>
                                        <p className="ms-4 mt-1 text-secondary">{item.author} - Author <br></br>
                                            {item.createdAt}
                                        </p>
                                    </div>
                                    <div className="d-flex">
                                        <Image className="" src={thumb} alt="thumb"></Image>
                                        <p className="mt-4 ms-2 ">2.1k</p>
                                    </div>
                                </div>
                                <p className="mt-3 fw-bold fs-1">{item.title}</p>
                                <p className="">{item.paragraph1}</p>
                                <p className="">{item.paragraph2}</p>
                                <p className="fs-5 fw-bold mt-5">Comments</p>
                            </div>
                        )
                })}
            </main>
            <Footer></Footer>

        </>
    );
}