import React, { useState, useEffect } from "react";
import { CharacterListItem, Input, ListItemSeparator } from "@components";
import { View, FlatList } from "react-native";
import { getCharacters } from "services/characters";
import { getEmptyComponent, getUrlFromThumbnail } from "utils/helpers";
import Loading from "components/Loading";

let to;
const Search = ({ navigation }) => {
  const [txtSearch, setTxtSearch] = useState("");
  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    to = setTimeout(() => {
      if (txtSearch.length > 0) {
        searchCharacters();
      } else {
        setCharacters([]);
      }
    }, 300);
    return () => {
      clearTimeout(to);
    };
  }, [txtSearch]);

  const searchCharacters = async () => {
    setIsLoading(true);
    const response = await getCharacters(txtSearch);

    if (response) {
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
    }
  };

  const renderCharacter = ({ item }) => (
    <CharacterListItem character={item} navigation={navigation} />
  );

  return (
    <View style={{ paddingHorizontal: 15, paddingVertical: 10 }}>
      <View style={{ marginBottom: 10 }}>
        <Input
          value={txtSearch}
          setValue={setTxtSearch}
          placeholder="search.placeholderTextSearch"
        />
      </View>
      {isLoading ? (
        <Loading />
      ) : (
        <FlatList
          data={characters}
          ListEmptyComponent={getEmptyComponent(isLoading)}
          renderItem={renderCharacter}
          ItemSeparatorComponent={ListItemSeparator}
        />
      )}
    </View>
  );
};

export default Search;
