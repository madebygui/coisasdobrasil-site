interface Categories {
  id: string;
  nome: string;
  slug: string;
}

export const getCategories = async (): Promise<Categories[]> => {
  const url = process.env.NEXT_PUBLIC_HYGRAPH_ENDPOINT as string;

  try {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: `query MyQuery {
          categorias(first: 100) {
            id
            nome
            slug
          }
        }`,
      }),
    };

    const response = await fetch(url, options);

    const json = await response.json();

    return json.data.categorias;
  } catch (error) {
    console.log('ERROR', error);
    throw error;
  }
};
