import React, { useEffect, useState, useCallback } from "react";
import { FlatList, View } from "react-native";
import { Serie, ListItemSeparator } from "@components";
import { getCharacterSeries } from "services/characters";
import { footerLoading, getUrlFromThumbnail } from "utils/helpers";

const CharacterSeries = ({ navigation, _character }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [series, setSeries] = useState([]);
  let isMounted = true;
  useEffect(() => {
    if (_character) {
      if (isMounted) {
        loadCharacterSeries();
      }
    }
    return () => {
      isMounted = false;
    };
  }, []);

  const loadCharacterSeries = useCallback(async () => {
    const response = await getCharacterSeries(_character.id);
    if (response) {
      const series = response.map(({ id, title, thumbnail, description }) => {
        const imageUrl = getUrlFromThumbnail(thumbnail);
        return { id, description, imageUrl, title };
      });
      setSeries(series);
      setIsLoading(false);
    }
  }, []);

  const renderSerie = ({ item }) => <Serie serie={item} />;

  return (
    <View style={{ flex: 1, paddingHorizontal: 15, paddingVertical: 10 }}>
      <FlatList
        data={series}
        renderItem={renderSerie}
        ListFooterComponent={footerLoading(isLoading)}
        ItemSeparatorComponent={ListItemSeparator}
      />
    </View>
  );
};

export default CharacterSeries;
