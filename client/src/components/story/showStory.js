import React, {useEffect,useState} from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import './showStory.css'

function showStory() {

    const [story,setStory] = useState({
        title:"",
        text:""
    })

    const { id } = useParams()

    useEffect(()=>{
        
        axios.get('/user/story/show/'+id)
        .then((res)=>{
            setStory(res.data)
        }).catch(err=>{
            console.log(err)
        })
    },[id])





    return (
       
        <div className="showStory">
            <div className="storyContainer">
            <h2 className="text-center">{story.title}</h2>
            <br />
            <p>{story.text}</p>
            </div>
        </div>
    )
}

export default showStory
