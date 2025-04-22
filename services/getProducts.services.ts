interface Products {
  id: string;
  nome: string;
  thumbnail: { url: string };
  texto: { html: string };
  categoria: { nome: string };
  banner: { url: string };
}

export const getProducts = async (category_id: string): Promise<Products[]> => {
  const url = process.env.NEXT_PUBLIC_HYGRAPH_ENDPOINT as string;

  try {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: `query ProductsQuery {
          produtos(where: {categoria: {id: "${category_id}"}}, first: 100) {
            id
            nome
            thumbnail {
              url
            }
            texto {
              html
            }
            categoria {
              nome
            }
            banner {
              url
            }
          }
        }`,
      }),
    };

    const response = await fetch(url, options);

    const json = await response.json();

    return json.data.produtos;
  } catch (error) {
    console.log('ERROR', error);
    throw error;
  }
};
