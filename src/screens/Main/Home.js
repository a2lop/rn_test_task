import React, { useEffect, useState, useCallback } from "react";
import { FlatList, View } from "react-native";
import { CharacterListItem, ListItemSeparator } from "@components";
import { getCharacters } from "services/characters";
import { getUrlFromThumbnail } from "utils/helpers";
import Loading from "components/Loading";

const Home = ({ navigation }) => {
  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  useEffect(() => {
    loadCharacters();
  }, []);

  const loadCharacters = useCallback(async () => {
    if (!isLoading) {
      setIsLoading(true);

      const response = await getCharacters({ page });
      const fetchedCharacters = response.map(
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
      setCharacters([...characters, ...fetchedCharacters]);
      setIsLoading(false);
    }
  }, [page, isLoading]);

  const loadMore = () => {
    if (!isLoading) {
      setPage(page + 1);
    }
  };

  useEffect(() => {
    if (page > 1) {
      loadCharacters();
    }

    return () => {};
  }, [page]);

  const renderCharacter = ({ item }) => (
    <CharacterListItem character={item} navigation={navigation} />
  );

  const renderFooterComponent = () => {
    return isLoading ? <Loading /> : <></>;
  };

  return (
    <View style={{ flex: 1, paddingHorizontal: 15, paddingVertical: 10 }}>
      <FlatList
        data={characters}
        renderItem={renderCharacter}
        ItemSeparatorComponent={ListItemSeparator}
        ListFooterComponent={renderFooterComponent}
        onEndReachedThreshold={0.4}
        onEndReached={loadMore}
      />
    </View>
  );
};

export default Home;
