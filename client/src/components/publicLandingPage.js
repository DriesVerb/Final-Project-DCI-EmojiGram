import React, {useContext,useState,useEffect} from 'react'
/* import './publicLandingPage.css' */
import StoryContext from '../context/story/storyContext'

 const PublicLandingPage = () => {

    const storyContext = useContext(StoryContext)
    const {publishStoryPublic, stories} = storyContext


    useEffect(()=>{
        publishStoryPublic()
        console.log(stories)
    },[])


    return (
        <div className="PublicStories">
{/*             <h1>
                {
                    stories.map((story)=>{
                        return(
                            <div key={story._id}>
                                <p>
                                    {story.title}
                                </p>
                                <p>
                                    {story.text}
                                </p>
                            </div>
                        )
                    })
                }
            </h1> */}
            <header><h1 contenteditable>Header.com</h1></header>
<div class="left-sidebar" contenteditable>Left Sidebar</div>
<main contenteditable></main>
<div class="right-sidebar" contenteditable>Right Sidebar</div>
<footer contenteditable>Footer Content — Header.com 2020</footer>
        </div>
    )
}
export default PublicLandingPage