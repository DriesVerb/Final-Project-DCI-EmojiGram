import React, { useContext, useEffect, useState } from "react";
import Moment from 'react-moment'
import "./publicLandingPage.css";
import StoryContext from "../context/story/storyContext";
import {NavDropdown, Nav} from 'react-bootstrap'
import MostLikes from "./mostLikes";



const PublicLandingPage = () => {
    const storyContext = useContext(StoryContext)
    const {publishStoryPublic,  publishStoryPublicLikes ,publishStoryPublicGenre, publishStoryPublicAlpha, topStories, stories} = storyContext

    
    const [sort,setSort] = useState("Latest")
    const [views, setViews] = useState(0)
  
  useEffect(() => {
   if(sort === "Latest") publishStoryPublic();
   else if(sort === "Alphabet") publishStoryPublicAlpha()
   else if(sort === "Most liked") publishStoryPublicLikes()
   else if(sort) publishStoryPublicGenre(sort);
   
  }, [sort]);


  const onChange = (e) => {
    setSort(
     
      e.target.innerText,
    );
  };

 


  return (

        <div className="PublicStories">
            <header className="header-publicStories"><h1 className="text-center">Story</h1></header>
            <div className="left-sidebar">
            <div className="left-sidbar__menu">
          <Nav.Link href="#">Home</Nav.Link>
          <Nav.Link href="#">something</Nav.Link>
          <NavDropdown title="Sorted by" id="basic-nav-dropdown">
        <NavDropdown.Item onClick={onChange}>Latest</NavDropdown.Item>
        <NavDropdown.Item onClick={onChange}>Alphabet</NavDropdown.Item>
        <NavDropdown.Item onClick={onChange}>Most liked</NavDropdown.Item>
        <NavDropdown.Item onClick={onChange}>Most views</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item onClick={onChange}>Fantasy</NavDropdown.Item>
        <NavDropdown.Item onClick={onChange}>Romance</NavDropdown.Item>
        <NavDropdown.Item onClick={onChange}>Mystery</NavDropdown.Item>
        <NavDropdown.Item onClick={onChange}>Horror</NavDropdown.Item>
        <NavDropdown.Item onClick={onChange}>Thriller</NavDropdown.Item>
        <NavDropdown.Item onClick={onChange}>Western</NavDropdown.Item>
        <NavDropdown.Item onClick={onChange}>SciFi</NavDropdown.Item>
        </NavDropdown>
           </div>
           <div className="left-sidbar__footer">
              <p>Footer</p>
              <br />
              <p>Facebook</p>
              <br />
              <p>Twitter</p>
           </div>
            </div>
                <main className="main-publicStories">{
                    (sort === "Most liked"? topStories:stories).map((story)=>{
                        return(
                            <div className="mainStories" key={story._id}>
                                <span className="emojisTag">
                                    {
                                        story.emojis.map((emoji,id)=>(
                                            
                                            <span className="Tag" key={id}>{emoji.character}</span>
                                        ))
                                    }
                                </span>
                                <div className="infoContainer">
                                    <p className="title_Author">
                                    "{story.title}"&nbsp;<span className="author">by {story.user.username}</span>
                                    </p>
                                    <p className="genre">
                                        {story.genre}
                                    </p>
                                    <p className="datePublicStory">
                                    <Moment format="YYYY/MM/DD">{story.createdAt}</Moment>
                                    </p>
                                    <p>
                                        <button className="readMore">Read</button>
                                    </p>
                      
                              
                                </div>
                            </div>
                        )
                    })              
                }</main>
            <div className="right-sidebar">
             <MostLikes/>
            </div>

        </div>
    )
}
export default PublicLandingPage

