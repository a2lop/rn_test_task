import React from "react";
import Loading from "components/Loading";
import EmptyResultsMessage from "components/EmptyResultsMessage";

export const getUrlFromThumbnail = thumbnail => {
  if (!thumbnail) {
    return "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg";
  }
  const { path, extension } = thumbnail;
  return `${path}.${extension}`;
};

export const footerLoading = isLoading => (isLoading ? <Loading /> : <></>);

export const getEmptyComponent = (loading, label = "common.noResults") => {
  if (loading) {
    return <></>;
  }
  return <EmptyResultsMessage message={label} />;
};
