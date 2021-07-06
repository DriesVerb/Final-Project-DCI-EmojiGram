import React, { useEffect, useContext, Fragment } from "react";
import { useParams } from "react-router-dom";

import { Button } from "react-bootstrap";
import StoryContext from "../../context/story/storyContext";
function showStory(props) {
  const storyContext = useContext(StoryContext);
  const { singleStory, deleteStory, showStory, storyToEdit, setEditedStory } =
    storyContext;
  // const { _id} = stories;

  const { id } = useParams();

  useEffect(() => {
    showStory(id);
    // axios.get('/user/story/show/'+id)
    // .then((res)=>{
    //     setStory(res.data)
    // }).catch(err=>{
    //     console.log(err)
    // })
  }, []);

  // console.log(singleStory)

  const onDelete = () => {
    deleteStory(singleStory._id);
    props.history.push("/yourstories");
  };
  const onEdit = () => {
    setEditedStory(singleStory);
    console.log(storyToEdit);
    props.history.push("/writestory");
  };

  // onClick = {onDelete(story._id)}

  return (
    <Fragment>
      {singleStory && (
        <div className="show-story">
          <div className="show-story__Container">
            <h2 className="text-center">
              {singleStory.title &&
                singleStory.title.charAt(0).toUpperCase() +
                  singleStory.title.slice(1)}
            </h2>
            <br />
            <p>{singleStory.text}</p>
          </div>

          <Button variant="info" className="pl-3 pr-4 ml-2" onClick={onEdit}>
            Edit
          </Button>
          <Button variant="dark" className="ml-1" onClick={onDelete}>
            Delete
          </Button>
        </div>
      )}
    </Fragment>
  );
}

export default showStory;
