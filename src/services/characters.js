import { ITEMS_PER_SEARCH } from "utils/constants";
import { fetcher } from "../utils/fetcher";

export async function getCharacters({
  nameStartsWith,
  page = 1,
  limit = ITEMS_PER_SEARCH
}) {
  const offset = (page - 1) * ITEMS_PER_SEARCH;

  const response = await fetcher({
    action: "characters",
    additionalParams: { nameStartsWith, offset, limit }
  });
  if (response.code === 200) {
    return response.data.results;
  }
}

export async function getCharacterDetail(id) {
  const response = await fetcher({ action: `characters/${id}` });
  if (response.code === 200) {
    if (response.data.results?.length > 0) {
      return response.data.results[0];
    }
    return undefined;
  }
}

export async function getCharacterComics(id) {
  const response = await fetcher({ action: `characters/${id}/comics` });
  if (response.code === 200) {
    return response.data.results;
  }
}

export async function getCharacterEvents(id) {
  const response = await fetcher({ action: `characters/${id}/events` });
  if (response.code === 200) {
    return response.data.results;
  }
}

export async function getCharacterSeries(id) {
  const response = await fetcher({ action: `characters/${id}/series` });
  if (response.code === 200) {
    return response.data.results;
  }
}

export async function getCharacterStories(id) {
  const response = await fetcher({ action: `characters/${id}/stories` });
  if (response.code === 200) {
    return response.data.results;
  }
}
