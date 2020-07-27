import React from 'react';
import '../style/Home.css';

import CardPhilosophy from '../components/CardPhilosophy/CardPhilosophy';
import VideoYoutube from '../components/VideoYoutube/VideoYoutube';
import BlogCard from '../components/BlogCard/BlogCard';
import Button from '../components/Button/Button';
import Footer from '../components/Footer/Footer';

const Home = () => {
    const dataCard = [
        {
        buttonName: "READ ABOUT OUR CULTURE",
        classCard : "bg-white mt-5 d-flex",
        title : "Freedom and Responsibility",
        desc  : "Our core philosophy is people over process. Our culture has been instrumental to our success and has helped us attract and retain stunning colleagues, making work here more satisfying.",
        position1 : "float-left",
        src : "https://images.ctfassets.net/i5wc420v2vd1/6482BfPUYgw9GqcnxeKXUr/b7bd0b29262020a078b615d7af8eb328/Web-7187.jpg?w=600",
        redhr :  <div className="redhr">
                </div>
        },
        {
        buttonName: "SEE WHAT'S NEXT",
        classCard : "bg-dark text-white mt-5 d-flex flex-row-reverse",
        title : "Internet entertainment. Global original content. Product personalization.",
        desc  : "Our first original series debuted in 2013. Over the following decades, Internet TV will replace linear, and we hope to keep leading by offering an amazing entertainment experience.",
        position1 : "float-right",
        src : "https://images.ctfassets.net/i5wc420v2vd1/3YsX6dKHzyaCWsMcoMEYWC/911cfbb7b1dba8c8d92a1ce215a694ac/reed.jpg",
        widthimg: "600px"
        }
    ];

    const video = [
        {
            title : "Netflix Culture: Allyship",
            src : "https://www.youtube.com/embed/0hJknn4NVBY"
        },
        {
            title : "WeAreNetflix Podcast: Interactive Storytelling",
            src : "https://www.youtube.com/embed/QxUj1p-kR1Y"
        },
        {
            title : "Netflix Culture: Taking Risks, Making Bets",
            src : "https://www.youtube.com/embed/PDD5dt7GJ9I"
        }
    ];

    const blogCardData = [
        {
            category : "TECH BLOG",
            title : "Machine Learning for a Better Developer Experience",
            writer : <div><a href="/">Stanislav Kirdey</a>, <a href="/">William High</a></div>, 
            desc : ` Imagine having to go through 2.5GB of log entries from a 
                    failed software build — 3 million lines — to search for a bug or a regression 
                    that happened on line 1M. It’s probably not even doable manually! However, 
                    one smart approach to make it tractable might be to diff lines against a 
                    recent successful build, with the hope that the bug produc...`
        },
        {
            category : "COMPANY BLOG",
            title : "Ted Sarandos appointed co-CEO of Netflix",
        }
    ];

    return(
        <>
            <main>
                <header>
                    <div className="overlay" />
                    <video playsInline="playsinline" autoPlay="autoplay" muted="muted" loop="loop">
                        <source src="http://videos.ctfassets.net/i5wc420v2vd1/3ST3WLEGpWUu2Ymg8WoEMs/06ee7becf93cce3083b115d2feb63a8b/Netflix-MainHero-V2.mp4" type="video/mp4" />
                    </video>
                    <div className="container h-100">
                        <div className="d-flex h-100 align-items-center text-video">
                            <div className="w-100 text-white">
                                <div className="col">
                                    <h1 className="display-5">A great workplace combines exceptional colleagues and hard problems.</h1>
                                    <div className="test">
                                        <form action="search.html" method="get">
                                            <input type="text" className="nav-link d-inline-block" id="search" placeholder="Search jobs by keyword" title="Search Jobs" />
                                            <div className="btn-search">
                                                <button type="submit" className="btn"><i className="fa fa-search fa-2x"></i></button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>

                <div className="container mb-5">
                    {
                    dataCard.map((data) => (
                        <CardPhilosophy
                        buttonName={data.buttonName}
                        classCard={data.classCard} 
                        title={data.title}
                        desc={data.desc}
                        position1={data.position1}
                        src={data.src}
                        redhr= {
                            data.redhr
                        }
                        widthimg={data.widthimg}
                        />
                    ))
                    }
                </div>
                <VideoYoutube 
                    video={
                        video.map((data) => 
                            <iframe 
                                className="mr-1"
                                title={data.title}
                                width={305} 
                                height={245} 
                                src={data.src} 
                                frameBorder={0} 
                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                                allowFullScreen 
                            />
                        )
                    }
                />
                <BlogCard 
                    isiCard= {
                        blogCardData.map((data) => 
                            <div className="BlogCard p-4 bg-white mr-2">
                                <h4 className="categoryCard">{data.category}</h4>
                                <h3>{data.title}</h3>
                                <p> {data.writer}
                                    {data.desc}
                                </p>
                                <Button buttonName="READ MORE"/>
                            </div>
                        )
                    }
                />
            </main>
            <Footer />
        </>
    );
}

export default Home;