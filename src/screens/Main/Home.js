import React, { useEffect, useState } from "react";
import { FlatList, View } from "react-native";
import { CharacterListItem, ListItemSeparator } from "@components";
import { getCharacters } from "services/characters";

const Home = ({ navigation }) => {
  const [characters, setCharacters] = useState([]);
  useEffect(() => {
    const initialize = async () => {
      const response = await getCharacters();
      const characters = response.map(
        ({ id, name, description, thumbnail }) => ({
          id,
          name,
          description,
          image: `${thumbnail.path}.${thumbnail.extension}`
        })
      );
      setCharacters(characters);
    };
    initialize(characters);
  }, []);

  const renderCharacter = ({ item }) => (
    <CharacterListItem character={item} navigation={navigation} />
  );

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={characters}
        renderItem={renderCharacter}
        ItemSeparatorComponent={ListItemSeparator}
      />
    </View>
  );
};

export default Home;
