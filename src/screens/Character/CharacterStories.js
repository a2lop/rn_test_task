import React, { useEffect, useState, useCallback } from "react";
import { FlatList, View } from "react-native";
import { Serie, ListItemSeparator } from "@components";
import { getCharacterStories } from "services/characters";
import { footerLoading, getUrlFromThumbnail } from "utils/helpers";

const CharacterStories = ({ navigation, route }) => {
  //   const [character, setCharacter] = useState(route.params);
  const [character, setCharacter] = useState({
    id: 1009368,
    name: "Iron Man",
    description:
      "Rick Jones has been Hulk's best bud since day one, but now he's more than a friend...he's a teammate! Transformed by a Gamma energy explosion, A-Bomb's thick, armored skin is just as strong and powerful as it is blue. And when he curls into action, he uses it like a giant bowling ball of destruction! ",
    image: "http://i.annihil.us/u/prod/marvel/i/mg/3/20/5232158de5b16.jpg"
  });

  const [isLoading, setIsLoading] = useState(true);
  const [stories, setStories] = useState([]);
  let isMounted = true;
  useEffect(() => {
    if (character) {
      if (isMounted) {
        loadCharacterStories();
      }
    }
    return () => {
      isMounted = false;
    };
  }, []);

  const loadCharacterStories = useCallback(async () => {
    const response = await getCharacterStories(character.id);
    if (response) {
      const stories = response.map(({ id, title, thumbnail, description }) => {
        const imageUrl = getUrlFromThumbnail(thumbnail);
        return { id, description, imageUrl, title };
      });
      setStories(stories);
      setIsLoading(false);
    }
  }, []);

  const renderSerie = ({ item }) => <Serie serie={item} />;

  return (
    <View style={{ flex: 1, paddingHorizontal: 15, paddingVertical: 10 }}>
      <FlatList
        data={stories}
        renderItem={renderSerie}
        ListFooterComponent={footerLoading(isLoading)}
        ItemSeparatorComponent={ListItemSeparator}
      />
    </View>
  );
};

export default CharacterStories;
