import React from "react"

export default function PokemonList({ pokemon }) {
  return (
    <div>
      {pokemon.map((p) => {
        return (
          <div className="container">
            <div className="pokemon" key={p}>
              {p}
            </div>
          </div>
        )
      })}
    </div>
  )
}
