import React from "react";
import Link from "next/link";

export async function getStaticProps() {
  const pokemons = await fetch("https://pokeapi.co/api/v2/pokedex/2/")
    .then((respostaDoServer) => {
      if (respostaDoServer.ok) {
        return respostaDoServer.json();
      }
    })
    .then((respostaEmObjeto) => respostaEmObjeto.pokemon_entries);

  return {
    props: {
      pokemons,
    },
  };
}

export default function Home(props) {
  const { pokemons } = props;

  return (
    <ul>
      {pokemons.map((pokemon) => (
        <li key={pokemon.entry_number}>
          <Link href={`/pokemon/${pokemon.entry_number}`}>
            <a>{pokemon.pokemon_species.name}</a>
          </Link>
        </li>
      ))}
    </ul>
  );
}
