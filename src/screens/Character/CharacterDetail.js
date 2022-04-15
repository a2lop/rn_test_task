import React, { useEffect, useState, useCallback } from "react";
import { FlatList, View, Image } from "react-native";
import { Section, Text } from "@components";
import { getCharacterDetail } from "services/characters";
import Loading from "components/Loading";
import SectionAbout from "./components/SectionAbout";

const CharacterDetail = ({ navigation, route }) => {
  //   const [character, setCharacter] = useState(route.params);
  const [character, setCharacter] = useState({
    id: 1017100,
    name: "A-Bomb (HAS)",
    description:
      "Rick Jones has been Hulk's best bud since day one, but now he's more than a friend...he's a teammate! Transformed by a Gamma energy explosion, A-Bomb's thick, armored skin is just as strong and powerful as it is blue. And when he curls into action, he uses it like a giant bowling ball of destruction! ",
    image: "http://i.annihil.us/u/prod/marvel/i/mg/3/20/5232158de5b16.jpg"
  });

  const [isLoading, setIsLoading] = useState(true);
  let isMounted = true;
  useEffect(() => {
    // const initialize = async () => {};
    // initialize();
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

  //   const renderCharacter = ({ item }) => <CharacterListItem character={item} />;

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

      {/* <Section title="characterListItem.about" /> */}

      {isLoading ? <Loading /> : <SectionAbout character={character} />}
    </View>
  );
};

export default CharacterDetail;
