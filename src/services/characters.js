import { fetcher } from "../utils/fetcher";

export async function getCharacters() {
  const response = await fetcher({ action: "characters" });
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
