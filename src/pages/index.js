/* eslint-disable react/jsx-key */
import Image from "next/image";
import Navbar from "../components/module/Navbar";
import Footer from "../components/module/Footer";
import Button from "../components/Button";
import styles from "../styles/Home.module.css";
import { articles } from "../data/article";
import { useRouter } from "next/router";
import thumb from "../assets/hand-thumbs-up.svg";
import clock from "../assets/clock.svg"

export default function Home() {
    const router = useRouter();

    const tags = [
        { tag: 'covid' }, { tag: 'election' }, { tag: 'president' }, { tag: 'infection' }, { tag: 'government' }, { tag: 'cases' }, { tag: 'country' }, { tag: 'suspects' }
    ]

    const categories = [
        { cat: 'Nation' },

    ]

    return (
        <>
            <Navbar></Navbar>
            <header className={`${styles.headerPic} p-5`}>
                <div className="p-4">
                    <p className='fs-1 fw-bold lh-sm'>Share Information <br></br> and Educate People</p>
                    <p className="mt-3">Everyone has their point of view of something, but just <br></br>
                        don’t be afraid to express the facts. Be an author and <br></br>
                        share you prespective of something to the world.</p>
                    <Button className="mt-4 rounded-3 btn-orange p-2 w-20" onClick={() => router.push("/main/articles")}>
                        Start Exploring!
                    </Button>
                </div>
            </header>
            <main className="container">
                <p className="fs-5 fw-bold mt-3">Tags</p>
                <div className="d-flex">
                    {tags.map((item) => {
                        return (
                            <div className="pointer btn-orange w-10 rounded-3 shadow-sm p-1 me-3 text-center">#{item.tag}</div>
                        )
                    })}
                </div>
                <p className="fs-5 fw-bold mt-3">Category</p>
                <div className="d-flex">
                    {categories.map((item) => {
                        return (
                            <div className="pointer btn-orange w-10 rounded-3 shadow-sm p-1 me-3 text-center">#{item.cat}</div>
                        )
                    })}
                </div>
                <p className="mt-3 fw-bold fs-5">Recommended</p>
                <div className="d-flex row row-cols-2">
                    {articles.map((item) => {
                        if (item.id === 4 || item.id === 5 || item.id === 6)
                            return (
                                <div className="container bg-orange d-flex col mb-4 w-30 p-2 rounded-3 pointer shadow">
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
                            )
                    })};
                </div>
            </main>
            <div className="bg-brown p-5 mt-5">
            <div className="p-4">
                    <p className='fs-1 fw-bold lh-sm'>Share Information <br></br> and Educate People</p>
                    <p className="mt-3">Everyone has their point of view of something, but just <br></br>
                        don’t be afraid to express the facts. Be an author and <br></br>
                        share you prespective of something to the world.</p>
                    <Button className="mt-4 rounded-3 btn-orange p-2 w-20" onClick={() => router.push('/main/articles')}>
                        Start Exploring!
                    </Button>
                </div>
            </div>
            <main className="container">
                <p className="mt-5 fw-bold fs-5">Recommended</p>
                <div className="d-flex row row-cols-2">
                    {articles.map((item) => {
                            return (
                                <div className="container bg-orange d-flex col mb-4 w-30 p-2 rounded-3 pointer shadow">
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
                            )
                    })};
                </div>
                <p className="text-secondary text-center">no article left</p>
            </main>
            <Footer></Footer>

        </>
    );
}