import React, { useContext, useEffect } from "react";
import "./publicLandingPage.css";
import StoryContext from "../context/story/storyContext";

const PublicLandingPage = () => {
  const storyContext = useContext(StoryContext);
  const { publishStoryPublic, stories } = storyContext;

  useEffect(() => {
    publishStoryPublic();
  }, []);

 



    return (
        <div className="PublicStories">
            <header className="header-publicStories"><h1 className="text-center">Story</h1></header>
            <div className="left-sidebar">Left Sidebar</div>
                <main>{
                    stories.map((story)=>{
                        return(
                            <div className="mainStories" key={story._id}>
                                <p>
                                    {story.title}
                                </p>
                                <p>
                                    {story.text}
                                </p>
                                <p>
                                   createdBy: {story.user.username}
                                </p>
                                <p>
                                    {story.comments.length}
                                </p>
                                <p>
                                    {story.likes.length}
                                </p>
                                <p>
                                  {story.createdAt}
                                      
                                </p>
                              
                                <p>
                                    {
                                        story.emojis.map((emoji,id)=>(
                                            
                                            <span key={id}>&nbsp;{emoji.character}</span>
                                        ))
                                    }
                                </p>
                            </div>
                        )
                    })              
                }</main>
            <div className="right-sidebar">Right Sidebar</div>

        </div>
    )
}
export default PublicLandingPage

