import React, { useContext, useEffect } from "react";
import "./publicLandingPage.css";
import StoryContext from "../context/story/storyContext";

const PublicLandingPage = () => {
    const storyContext = useContext(StoryContext)
    const {publishStoryPublic,  publishStoryPublicGenre, stories} = storyContext
  useEffect(() => {
    publishStoryPublic();
  }, []);

  return (

        <div className="PublicStories">
            <header className="header-publicStories"><h1 className="text-center">Story</h1></header>
            <div className="left-sidebar">Left Sidebar
                {
                    stories.map((story, id)=>(
                        <div key={story.id}>
                            {story.genre}
                        </div>
                    ))
                }
            
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
   {/*            <p>
                  <span key={id}>&nbsp;{emoji.character}</span>
                ))}
              </p>
            </div>
          );
        })}
      </main>
      <div class="right-sidebar">Right Sidebar</div>
    </div>
  );
};
export default PublicLandingPage;
 */}