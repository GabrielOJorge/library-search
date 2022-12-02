export const fetchResults = async (q) => {
  try {
    const response = await fetch(`https://openlibrary.org/search.json?q=${q}`, {
      mode: 'cors',
    });

    if (!response.ok) {
      throw Error('Could not fetch data for that resource.');
    }

    return await response.json();
  } catch (err) {
    console.error(new Error(err.message));
  }
};
