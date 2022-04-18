import React, { useEffect, useState, useCallback } from "react";
import { View, Image } from "react-native";
import { Section, Text } from "@components";
import { getCharacterDetail } from "services/characters";
import Loading from "components/Loading";
import SectionAbout from "./components/SectionAbout";

const CharacterDetail = ({ navigation, _character }) => {
  const [character, setCharacter] = useState(_character);

  const [isLoading, setIsLoading] = useState(true);
  let isMounted = true;
  useEffect(() => {
    if (character) {
      if (isMounted) {
        loadCharacter();
      }
    }
    return () => {
      isMounted = false;
    };
  }, []);

  const loadCharacter = useCallback(async () => {
    const response = await getCharacterDetail(character.id);
    if (response) {
      setCharacter(response);
      setIsLoading(false);
    }
  }, []);

  return (
    <View style={{ flex: 1, paddingHorizontal: 15, paddingVertical: 10 }}>
      <Section>
        <>
          {character.thumbnail && (
            <View style={{ width: 150, alignSelf: "center" }}>
              <Image
                source={{
                  uri: `${character.thumbnail.path}.${character.thumbnail.extension}`
                }}
                resizeMode={"contain"}
                style={{
                  aspectRatio: 1
                }}
              />
            </View>
          )}

          <Text type="title">{character.name}</Text>
          <Text type="longText">{character.description}</Text>
        </>
      </Section>

      {isLoading ? (
        <Loading />
      ) : (
        <SectionAbout character={character} navigation={navigation} />
      )}
    </View>
  );
};

export default CharacterDetail;
