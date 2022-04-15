import React, { useEffect, useState, useCallback } from "react";
import { FlatList, View, Image } from "react-native";
import { Comic, Section, Text } from "@components";
import { getCharacterComics, getCharacterDetail } from "services/characters";
import Loading from "components/Loading";
import SectionAbout from "./components/SectionAbout";
import { getUrlFromThumbnail } from "utils/helpers";

const CharacterComics = ({ navigation, route }) => {
  //   const [character, setCharacter] = useState(route.params);
  const [character, setCharacter] = useState({
    id: 1017100,
    name: "A-Bomb (HAS)",
    description:
      "Rick Jones has been Hulk's best bud since day one, but now he's more than a friend...he's a teammate! Transformed by a Gamma energy explosion, A-Bomb's thick, armored skin is just as strong and powerful as it is blue. And when he curls into action, he uses it like a giant bowling ball of destruction! ",
    image: "http://i.annihil.us/u/prod/marvel/i/mg/3/20/5232158de5b16.jpg"
  });

  const [isLoading, setIsLoading] = useState(true);
  const [comics, setComics] = useState([]);
  let isMounted = true;
  useEffect(() => {
    // const initialize = async () => {};
    // initialize();
    if (character) {
      if (isMounted) {
        loadCharacterComics();
      }
    }
    return () => {
      isMounted = false;
    };
  }, []);

  const loadCharacterComics = useCallback(async () => {
    const response = await getCharacterComics(character.id);
    if (response) {
      const comics = response.map(({ id, title, thumbnail }) => {
        const imageUrl = getUrlFromThumbnail(thumbnail);
        return { id, title, imageUrl };
      });

      setComics(comics);
      setIsLoading(false);
    }
  }, []);

  const renderComic = ({ item }) => <Comic comic={item} />;

  return (
    <View style={{ flex: 1, paddingHorizontal: 15, paddingVertical: 10 }}>
      <FlatList
        data={comics}
        renderItem={renderComic}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: "space-evenly" }}
      />
    </View>
  );
};

export default CharacterComics;
