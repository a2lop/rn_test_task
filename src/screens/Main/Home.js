import React, { useEffect, useState } from "react";
import { FlatList, View } from "react-native";
import { CharacterListItem, ListItemSeparator } from "@components";
import { getCharacters } from "services/characters";
import { getUrlFromThumbnail } from "utils/helpers";
import Loading from "components/Loading";

const Home = ({ navigation }) => {
  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const initialize = async () => {
      const response = await getCharacters();
      const characters = response.map(
        ({ id, name, description, thumbnail }) => {
          const imageUrl = getUrlFromThumbnail(thumbnail);
          return {
            id,
            name,
            description,
            imageUrl
          };
        }
      );
      setCharacters(characters);
      setIsLoading(false);
    };
    initialize(characters);
  }, []);

  const renderCharacter = ({ item }) => (
    <CharacterListItem character={item} navigation={navigation} />
  );

  return (
    <View style={{ flex: 1, paddingHorizontal: 15, paddingVertical: 10 }}>
      {isLoading && <Loading />}
      <FlatList
        data={characters}
        renderItem={renderCharacter}
        ItemSeparatorComponent={ListItemSeparator}
      />
    </View>
  );
};

export default Home;
