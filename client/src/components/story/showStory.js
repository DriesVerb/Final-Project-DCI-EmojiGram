import React, { useEffect, useState, useContext, Fragment } from "react";
// import axios from 'axios'
import { useParams } from "react-router-dom";
// import './showStory.css'
import { Button } from "react-bootstrap";
import StoryContext from "../../context/story/storyContext";
import CommentForm from "./CommentForm";
import { Link } from "react-router-dom";

function showStory(props) {
  const storyContext = useContext(StoryContext);
  const {
    singleStory,
    deleteStory,
    storyToEdit,
    setEditedStory,
    addLike,
    removeLike,
    deleteComment,
    // addComment,
  } = storyContext;
  // const { _id} = stories;
  // const [story,setStory] = useState({
  //     title:"",
  //     text:""
  // })

  // liked was used before it was defined set to false
  const [liked, setLiked] = useState(false);

  const { id } = useParams();

  useEffect(() => {
    showStory(id);
    // axios.get('/user/story/show/'+id)
    // .then((res)=>{
    //     setStory(res.data)
    // }).catch(err=>{
    //     console.log(err)
    // console.log(singleStory.comments)

    // })
  }, [liked]);

  // console.log(singleStory)

  // const [like, setLike]=useState(props.liked)

  const onDelete = () => {
    deleteStory(singleStory._id);
    props.history.push("/yourstories");
  };
  const onEdit = () => {
    setEditedStory(singleStory);
    console.log(storyToEdit);
    props.history.push("/writestory");
  };

  const onLike = (e) => {
    e.preventDefault();
    if (liked) {
      addLike(singleStory._id);
      setLiked(false);
      console.log(liked);
    } else {
      removeLike(singleStory._id);
      setLiked(true);

      console.log(liked);
    }
  };

  // onClick = {onDelete(story._id)}

  return (
    <Fragment>
      {singleStory && (
        <div className="showStory">
          <div className="storyContainer">
            <h2 className="text-center">
              {singleStory.title &&
                singleStory.title.charAt(0).toUpperCase() +
                  singleStory.title.slice(1)}
            </h2>
            <br />
            <p>{singleStory.text}</p>

            <span className="like">
              <i className="fa fa-thumbs-up" onClick={onLike} />
              {singleStory.likes && (
                <span>&nbsp;{singleStory.likes.length}</span>
              )}
            </span>

            <span>
              <i className="fas fa-comment" />
              {singleStory.comments && (
                <span> &nbsp;{singleStory.comments.length}</span>
              )}{" "}
            </span>
            <span className="emojisClass">
              <i className="far fa-smile-beam" /> :{" "}
              {singleStory.emojis && (
                <span>
                  {" "}
                  &nbsp;
                  {singleStory.emojis.map((emoj, id) => (
                    <span key={id}>&nbsp;{emoj.character} </span>
                  ))}{" "}
                </span>
              )}
            </span>

            <CommentForm />
            <div>
              {singleStory.comments && (
                <div>
                  {singleStory.comments.map((comment) => (
                    <div className="post bg-white p-1 my-1">
                      <div>
                        <Link to={`/profile/`}>
                          <img
                            className="round-img"
                            src={comment.avatar}
                            alt=""
                          />
                          <h4>{comment.user}</h4>
                        </Link>
                      </div>
                      <div>
                        <p className="text-dark">{comment.text}</p>
                        <p className="post-date">
                          Posted on{" "}
                          {new Intl.DateTimeFormat().format(
                            new Date(comment.date)
                          )}
                        </p>
                        {/* {!auth.loading && user === auth.user._id && ( */}
                        <button
                          onClick={() =>
                            deleteComment(singleStory._id, comment._id)
                          }
                          type="button"
                          className="btn btn-dark btn-sm"
                        >
                          <i className="fas fa-times" />
                        </button>
                        {/* // )} */}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
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
