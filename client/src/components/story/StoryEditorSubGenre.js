import React, { Fragment, useEffect, useState } from "react";

const StoryEditorSubGenre = ({ genre }) => {
  const [currentSubGenre, setCurrentSubGenre] = useState("");
  const [currentList, setCurrentList] = useState([]);

  const subGenres = {
    Fantasy: [
      "Alternate History",
      "Children's Story",
      "Comedy",
      "Contemporary",
      "Dark Fantasy",
      "Fairy Tale",
      "Fantasy of Manners",
      "Heroic",
      "High Fantasy",
      "Historical",
      "Low Fantasy",
      "Magical Realism",
      "Mythic",
      "Superhero",
      "Sword and Sorcery",
      "Urban",
      "Young Adult",
    ],
    Horror: [
      "Body Horror",
      "Comedy",
      "Creepy Kids",
      "Extreme Horror",
      "Gothic",
      "Hauntings",
      "Historical",
      "Lovecraftian",
      "Man-Made",
      "Monsters",
      "Mythic",
      "Occult",
      "Psychic Abilities",
      "Psychological",
      "Quiet Horror",
      "Young Adult",
    ],
    Mystery: [
      "Amateur Sleuth",
      "Bumbling Detective",
      "Caper",
      "Child in Peril",
      "Children's Story",
      "Cozy",
      "Culinary",
      "Disabled",
      "Doctor Detective",
      "Furry Sleuth",
      "Hardboiled",
      "Historical",
      "Howdunit",
      "Legal",
      "Locked Room",
      "Multicultural and Diverse",
      "Paranormal",
      "Police Procedural",
      "Private Detective",
      "Whodunit",
      "Woman in Peril",
      "Young Adult",
    ],
  };

  const matchPropToObj = (input) => {
    for (const [key, value] of Object.entries(subGenres)) {
      if (key === input) {
        setCurrentSubGenre(key);
        setCurrentList(value);
      }
    }
  };

  useEffect(() => {
    if (currentSubGenre !== genre) matchPropToObj(genre);
  }, [currentSubGenre, genre]);

  return (
    <Fragment>
      {currentSubGenre === genre ? (
        <Fragment>
          <label htmlFor="subGenre">Sub Genre</label>
          <select name="genre">
            <option value="default">- Choose a sub genre -</option>
            {currentList.map((subGen, id) => {
              return (
                <option key={id} value={subGen}>
                  {subGen}
                </option>
              );
            })}
          </select>
        </Fragment>
      ) : (
        <div>false</div>
      )}
    </Fragment>
  );
};

export default StoryEditorSubGenre;
