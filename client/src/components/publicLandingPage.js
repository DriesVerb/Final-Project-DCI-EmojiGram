import React, { useContext, useEffect, useState } from "react";
import Moment from 'react-moment'
import "./publicLandingPage.css";
import StoryContext from "../context/story/storyContext";
import {NavDropdown, Nav} from 'react-bootstrap'




const PublicLandingPage = () => {
    const storyContext = useContext(StoryContext)
    const {publishStoryPublic,  publishStoryPublicGenre, stories} = storyContext

    
    const [genre,setGenre] = useState("Latest")




  useEffect(() => {
      console.log(genre)
  if (genre === "Latest") publishStoryPublic();
   if(genre) publishStoryPublicGenre(genre);
   
  }, [genre]);


  const onChange = (e) => {
      console.log(genre)
    setGenre(
     
      e.target.innerText,
    );
  };



  return (

        <div className="PublicStories">
            <header className="header-publicStories"><h1 className="text-center">Story</h1></header>
            <div className="left-sidebar">

      {/*       <Navbar bg="light" expand="lg">
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto"> */}
          <Nav.Link href="#">Home</Nav.Link>
          <Nav.Link href="#">Link</Nav.Link>
          <NavDropdown title="Sorted by" id="basic-nav-dropdown">
        <NavDropdown.Item onClick={onChange}>Latest</NavDropdown.Item>
        <NavDropdown.Item onClick={onChange}>Alphabet</NavDropdown.Item>
        <NavDropdown.Item onClick={onChange}>Most liked</NavDropdown.Item>
        <NavDropdown.Item onClick={onChange}>Most comments</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item onClick={onChange}>Fantasy</NavDropdown.Item>
        <NavDropdown.Item onClick={onChange}>Romance</NavDropdown.Item>
        <NavDropdown.Item onClick={onChange}>Mystery</NavDropdown.Item>
        <NavDropdown.Item onClick={onChange}>Horror</NavDropdown.Item>
        <NavDropdown.Item onClick={onChange}>Thriller</NavDropdown.Item>
        <NavDropdown.Item onClick={onChange}>Western</NavDropdown.Item>
        <NavDropdown.Item onClick={onChange}>SciFi</NavDropdown.Item>
        </NavDropdown>
     {/*    </Nav>
          </Navbar.Collapse>
        </Navbar> */}

            {/* <div>
            <label htmlFor="genre">Genre</label>
            <select
              name="genre"
              defaultValue="date"
              onChange={(e) => onChange(e)}
            >
              <option value="date">Newest Stories</option>
              <label>Genre</label>
              <option value="Fantasy">Fantasy</option>
              <option value="Horror">Horror</option>
              <option value="Mystery">Mystery</option>
              <option value="Romance">Romance</option>
              <option value="SciFi">SciFi</option>
              <option value="Thriller">Thriller</option>
              <option value="Western">Western</option>
              <option value="date">date</option>
            </select>
           
            </div> */}


            </div>
                <main className="main-publicStories">{
                    stories.map((story)=>{
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
            <div className="right-sidebar">Right Sidebar</div>

        </div>
    )
}
export default PublicLandingPage



