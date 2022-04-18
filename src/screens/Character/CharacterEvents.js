import React, { useEffect, useState, useCallback } from "react";
import { FlatList, View } from "react-native";
import { Event, ListItemSeparator } from "@components";
import { getCharacterEvents } from "services/characters";
import { footerLoading, getEmptyComponent, getUrlFromThumbnail } from "utils/helpers";

const CharacterEvents = ({ navigation, _character }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [events, setEvents] = useState([]);
  let isMounted = true;
  useEffect(() => {
    if (_character) {
      if (isMounted) {
        loadCharacterEvents();
      }
    }
    return () => {
      isMounted = false;
    };
  }, []);

  const loadCharacterEvents = useCallback(async () => {
    const response = await getCharacterEvents(_character.id);
    if (response) {
      const events = response.map(({ id, title, thumbnail, description }) => {
        const imageUrl = getUrlFromThumbnail(thumbnail);
        return { id, description, imageUrl, title };
      });
      setEvents(events);
      setIsLoading(false);
    }
  }, []);

  const renderEvent = ({ item }) => <Event event={item} />;

  return (
    <View style={{ flex: 1, paddingHorizontal: 15, paddingVertical: 10 }}>
      <FlatList
        data={events}
        renderItem={renderEvent}
        ListFooterComponent={footerLoading(isLoading)}
        ItemSeparatorComponent={ListItemSeparator}
        ListEmptyComponent={getEmptyComponent(isLoading)}
      />
    </View>
  );
};

export default CharacterEvents;
