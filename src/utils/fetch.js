const JSON_HEADERS = {
  Accept: 'application/json',
};

const jsonFetch = async (url) => {
  const response = await fetch(url, { JSON_HEADERS });
  const json = await response.json();
  return json;
};

export default jsonFetch;
