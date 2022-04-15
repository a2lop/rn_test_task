import React from "react";

import { LabelKeyValue, Section } from "@components";

const SectionAbout = ({ character, navigation }) => {
  const { comics, series, stories, events } = character;
  console.log("XXX", character);
  return (
    <Section title="characterListItem.about">
      <LabelKeyValue
        icon="book-open-variant"
        label="characterListItem.comics"
        value={comics.available}
      />
      <LabelKeyValue
        icon="calendar"
        label="characterListItem.events"
        value={events.available}
      />
      <LabelKeyValue
        icon="television"
        label="characterListItem.series"
        value={series.available}
      />
      <LabelKeyValue
        icon="history"
        label="characterListItem.stories"
        value={stories.available}
      />
    </Section>
  );
};

export default SectionAbout;
