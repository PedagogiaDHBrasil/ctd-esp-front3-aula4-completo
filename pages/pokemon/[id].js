import React from "react";

export default function Pokemon({ pokemon }) {
  return (
    <div>
      <h1>{pokemon.name}</h1>
      <img src={pokemon.sprites.front_default} alt="Imagem de um pokémon" />
    </div>
  );
}

export async function getStaticProps({ params }) {
  const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.id}`)
    .then((respostaDoServer) => {
      if (respostaDoServer.ok) {
        return respostaDoServer.json();
      }
    })
    .then((respostaEmObjeto) => respostaEmObjeto);

  return {
    props: {
      pokemon,
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: [
      {
        params: {
          id: "1",
        },
      },
      {
        params: {
          id: "2",
        },
      },
      {
        params: {
          id: "3",
        },
      },
      {
        params: {
          id: "4",
        },
      },
      {
        params: {
          id: "5",
        },
      },
    ],
    fallback: false,
  };
}
