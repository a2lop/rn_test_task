import React from "react";

import { LabelKeyValue, Section } from "@components";

const SectionAbout = ({ character, navigation }) => {
  const { comics, series, stories, events } = character;

  const handleOnPress = screen => {
    navigation.navigate(`Character${screen}`);
  };

  return (
    <Section title="characterDetail.about">
      <LabelKeyValue
        onPress={() => {
          handleOnPress("Comics");
        }}
        icon="book-open-variant"
        label="characterDetail.comics"
        value={comics.available}
      />
      <LabelKeyValue
        onPress={() => {
          handleOnPress("Events");
        }}
        icon="calendar"
        label="characterDetail.events"
        value={events.available}
      />
      <LabelKeyValue
        onPress={() => {
          handleOnPress("Series");
        }}
        icon="television"
        label="characterDetail.series"
        value={series.available}
      />
      <LabelKeyValue
        onPress={() => {
          handleOnPress("Stories");
        }}
        icon="history"
        label="characterDetail.stories"
        value={stories.available}
      />
    </Section>
  );
};

export default SectionAbout;
