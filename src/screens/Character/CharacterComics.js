import React, { useEffect, useState, useCallback } from "react";
import { FlatList, View, Image } from "react-native";
import { Comic, Section, Text } from "@components";
import { getCharacterComics, getCharacterDetail } from "services/characters";
import Loading from "components/Loading";
import SectionAbout from "./components/SectionAbout";
import { footerLoading, getEmptyComponent, getUrlFromThumbnail } from "utils/helpers";

const CharacterComics = ({ navigation, _character }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [comics, setComics] = useState([]);
  let isMounted = true;
  useEffect(() => {
    if (_character) {
      if (isMounted) {
        loadCharacterComics();
      }
    }
    return () => {
      isMounted = false;
    };
  }, []);

  const loadCharacterComics = useCallback(async () => {
    const response = await getCharacterComics(_character.id);
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
        ListFooterComponent={footerLoading(isLoading)}
        ListEmptyComponent={getEmptyComponent(isLoading)}
      />
    </View>
  );
};

export default CharacterComics;
