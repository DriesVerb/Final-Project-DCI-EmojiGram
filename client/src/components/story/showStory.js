import React, {useEffect,useContext, Fragment} from 'react'
import { useParams } from 'react-router-dom'
import './showStory.css'
import { Button} from 'react-bootstrap';
import StoryContext  from '../../context/story/storyContext';
function showStory(props) {

    const storyContext = useContext(StoryContext)
    const { singleStory ,deleteStory,showStory,stories, storyToEdit,setEditedStory  } = storyContext;
    // const { _id} = stories;
  /*   const [story,setStory] = useState({
        title:"",
        text:""
    }) */

    const { id } = useParams()

   useEffect(() => {
        showStory(id) 
       
    }, [])
    
    
 
    const onDelete = () => {
        deleteStory(singleStory._id);
        props.history.push("/yourstories");
      
    };
    const onEdit = () => {
        setEditedStory(singleStory);
        console.log(storyToEdit)
        props.history.push("/writestory");
      
      };


// onClick = {onDelete(story._id)} 

    return (
        <Fragment>
            {singleStory &&
        <div className="showStory">
            
            <div className="storyContainer">
            <h2 className="text-center">{singleStory.title && singleStory.title.charAt(0).toUpperCase() + singleStory.title.slice(1)}</h2>
            <br />
            <p>{singleStory.text}</p>
            </div>

            <Button variant="info" className="pl-3 pr-4 ml-2" onClick={onEdit}   >Edit</Button>
            <Button variant="dark" className="ml-1" onClick={onDelete} >Delete</Button>
            </div>}
        </Fragment>
    )
}

export default showStory
