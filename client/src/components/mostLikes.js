import React, { useContext, useEffect } from "react";

const MostLikes = () => {
  const storyContext = useContext(StoryContext);
  const { publishStoryPublicLikes, topStories } = storyContext;

  const test = publishStoryPublicLikes;

  useEffect(() => {
    test();
  }, []);

  console.log(topStories);

  return (
    <div>
      {topStories.map((sto, id) => {
        return (
          <div className="mostLikes__container" key={id}>
            <p>
              {" "}
              <span className="span-genre">{sto.genre} /</span> {sto.title}
            </p>{" "}
            <span>{sto.likes.length}</span>
          </div>
        );
      })}
    </div>
  );
};

export default MostLikes;
