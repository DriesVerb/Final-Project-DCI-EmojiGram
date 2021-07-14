import React, { Fragment, useEffect, useState } from "react";

// store
import { storyStore } from "../../store";

const StoryEditorSubGenre = ({ genre }) => {
  const [currentGenre, setCurrentGenre] = useState("");
  const [currentSubGenre, setCurrentSubGenre] = useState("");
  const [currentList, setCurrentList] = useState([]);

  const getSubGenre = storyStore((state) => state.getSubGenre);

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
    Romance: [
      "Comedy",
      "Billionaires",
      "Contemporary",
      "Fantasy Romance",
      "Gothic",
      "Historical",
      "Holidays",
      "Inspirational",
      "Military",
      "Paranormal",
      "Regency",
      "Romantic Suspense",
      "Science Fiction Romance",
      "Sports",
      "Time Travel",
      "Western Romance",
      "Young Adult",
    ],
    SciFi: [
      "Aliens",
      "Alternate History",
      "Alternate Universe",
      "Apocalyptic",
      "Biopunk",
      "Children's Story",
      "Colonization",
      "Comedy",
      "Cyberpunk",
      "Dying Earth",
      "Dystopia",
      "Galactic Empire",
      "Generation Ship",
      "Hard Science Fiction",
      "Immortality",
      "Lost Worlds",
      "Military",
      "Mind Transfer",
      "Mundane Science Fiction",
      "Mythic",
      "Nanopunk",
      "Post-Apocalyptic",
      "Robots/A.I.",
      "Science Fantasy",
      "Science Horror",
      "Slipstream",
      "Soft Science Fiction",
      "Space Exploration",
      "Space Opera",
      "SpyFi",
      "Steampunk",
      "Time Travel",
      "Utopia",
      "Young Adult",
    ],
    Thriller: [
      "Action",
      "Comedy",
      "Conspiracy",
      "Crime",
      "Disaster",
      "Espionage",
      "Forensic",
      "Historical",
      "Legal",
      "Medical",
      "Military",
      "Mystery Thriller",
      "Paranormal",
      "Political",
      "Psychological",
      "Religious",
      "Technothriller",
      "Young Adult",
    ],
    Western: [
      "Bounty Hunters",
      "Cattle Drive",
      "Children's Story",
      "Comedy",
      "Gold Rush",
      "Gunfighters",
      "Land Rush",
      "Lawmen",
      "Mountain Men",
      "Outlaws",
      "Prairie Settlement",
      "Revenge",
      "Wagon Train",
      "Young Adult",
    ],
  };

  const matchPropToObj = (input) => {
    for (const [key, value] of Object.entries(subGenres)) {
      if (key === input) {
        setCurrentGenre(key);
        setCurrentList(value);
      }
    }
  };

  const onChange = (e) => {
    setCurrentSubGenre(e.target.value);
    getSubGenre(e.target.value);
  };

  useEffect(() => {
    if (currentGenre !== genre) matchPropToObj(genre);
  }, [currentGenre, genre]);

  return (
    <Fragment>
      {currentGenre === genre ? (
        <Fragment>
          <label htmlFor="subGenre">Sub Genre</label>
          <select
            name="genre"
            value={currentSubGenre}
            onChange={(e) => {
              onChange(e);
            }}
          >
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
