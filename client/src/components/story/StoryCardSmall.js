// import React, { Fragment } from "react";
// import "../mostLikes.css";
// import { useHistory } from "react-router-dom";
// import EmojiChar from "./EmojiChar";

// const StoryCardSmall = ({ story, amount, title }) => {
//   let history = useHistory();
//   const storyDetailsPublic = (id) => {
//     history.push(`/readpublicstory/${id}`);
//   };

//   return (
//     <Fragment>
//       <h3 className="story-card-small__title">{title}</h3>
//       {story.slice(0, amount).map((story, id) => {
//         return (
//           <div
//             className="story-card-small"
//             key={id}
//             onClick={() => storyDetailsPublic(story._id)}
//           >
//             <div className="story-card-small__emojis">
//               {story.emojis.map((emoji, id) => {
//                 return <EmojiChar key={id} emoji={emoji} size="small" />;
//               })}
//             </div>
//             <div className="story-card-small__info">
//               <span className="story-card-small__info--bold">
//                 {story.title}{" "}
//               </span>{" "}
//               <span> by - {story.user.username}</span>
//             </div>
//           </div>
//         );
//       })}
//     </Fragment>
//   );
// };

// export default StoryCardSmall;
