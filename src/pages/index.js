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
import React from 'react'
import ReactPlayer from 'react-player'
import nation from "../assets/united-nations.png"
import world from "../assets/worldwide.png"
import regions from "../assets/map-point.png"
import life from "../assets/life-insurance.png"
import health from "../assets/first-aid-kit.png"
import tech from "../assets/project-management.png"

export default function Home() {
    const router = useRouter();

    const tags = [
        { tag: 'covid' }, { tag: 'election' }, { tag: 'president' }, { tag: 'infection' }, { tag: 'government' }, { tag: 'cases' }, { tag: 'country' }, { tag: 'suspects' }
    ]

    const categories = [
        { cat: 'Nation', pic: nation },
        { cat: 'World', pic: world },
        { cat: 'Regions', pic: regions },
        { cat: 'Life', pic: life },
        { cat: 'Health', pic: health },
        { cat: 'Tech', pic: tech },
    ]

    return (
        <>
            <Navbar></Navbar>
            <header className={`${styles.headerPic} p-5`}>
                <div className="p-5 text-white">
                    <p className='fs-1 fw-bold lh-sm font-header'>Share Information <br></br> and Educate People</p>
                    <p className="mt-3 font-header">Everyone has their point of view of something, but just <br></br>
                        don’t be afraid to express the facts. Be an author and <br></br>
                        share you prespective of something to the world.</p>
                    <Button className="mt-2 rounded-2 btn-orange p-2 w-20 font-header" onClick={() => router.push("/main/articles")}>
                        Start Exploring!
                    </Button>
                </div>
            </header>
            <main className="container">
                <p className="fs-5 fw-bold mt-5">Tags</p>
                <div className="d-flex">
                    {tags.map((item) => {
                        return (
                            <div className="pointer btn-orange w-10 rounded-3 shadow-sm p-1 me-3 text-center mb-2">#{item.tag}</div>
                        )
                    })}
                </div>
                <p className="fs-5 fw-bold mt-5">Category</p>
                <div className="d-flex over">
                    {categories.map((item) => {
                        return (
                            <div className={`text-center mt-3 pointer w-20 ${styles.category}`}>
                                <Image className="rounded-2 category" src={item.pic} alt="image" width="80px" height="80px" />
                                <p className="rounded-3 fw-bold mt-2 text-brown">{item.cat}</p>
                            </div>
                        )
                    })}
                </div>
                <p className="mt-5 fw-bold fs-5">Recommended</p>
                <div className="d-flex row row-cols-2">
                    {articles.map((item) => {
                        if (item.id === 4 || item.id === 5 || item.id === 6)
                            return (
                                <div className="container bg-orange col mb-4 w-30 p-2 rounded-3 pointer shadow" onClick={() => router.push(`/main/articleDetail/${item.id}`)}>
                                    {/* <Image className="rounded-3" src={item.imageArticle} alt="image" width="500px" height="300px" /> */}
                                    <div className="ms-3 d-flex flex-column justify-content-between mt-2">
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
                <div className="p-5 d-flex justify-content-between">
                    <div className="">
                        <p className='fs-2 fw-bold lh-sm font-header'>Will Smith slaps and swears at <br></br>
                            Chris Rock on stage at the Oscars</p>
                        <p className="mt-3 font-header">Will Smith appeared to slap presenter Chris Rock for joking about his wife, Jada Pinkett Smith, at the Oscars.</p>
                        <Button className="mt-2 rounded-2 bg-orange p-2 w-20 font-header" onClick={() => router.push('/main/articles')}>
                            Read Now
                        </Button>
                    </div>
                    <ReactPlayer url='https://www.youtube.com/watch?v=myjEoDypUD8' height={300} />
                </div>
            </div>
            <main className="container">
                <p className="mt-5 fw-bold fs-5">Latest News</p>
                <div className="d-flex row row-cols-2">
                    {articles.map((item) => {
                        return (
                            <div className="container bg-orange col mb-4 w-30 p-2 rounded-3 pointer shadow" onClick={() => router.push(`/main/articleDetail/${item.id}`)}>
                                <Image className="rounded-3" src={item.imageArticle} alt="image" width="500px" height="300px" />
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
                        )
                    })};
                </div>
                <p className="text-secondary text-center">No article left</p>
            </main>
            <Footer></Footer>

        </>
    );
}