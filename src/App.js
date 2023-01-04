import axios from "axios"
import React, { useEffect, useState } from "react"
import NextandPrevPages from "./NextandPrevPages"
import PokemonList from "./PokemonList"
import "./style.css"
export default function App() {
  const [pokemon, setPokemon] = useState([])
  const [prevPage, setPrevPage] = useState()
  const [currentPage, setCourrentPage] = useState(
    "https://pokeapi.co/api/v2/pokemon"
  )
  const [nextPage, setNextPage] = useState()
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    let Cancel
    setLoading(true)
    axios
      .get(currentPage, {
        cancelToken: new axios.CancelToken((c) => (Cancel = c)),
      })
      .then((res) => {
        setPokemon(
          res.data.results.map((poke) => {
            return poke.name
          })
        )
        setNextPage(res.data.next)
        setPrevPage(res.data.previous)
        setLoading(false)
        return () => Cancel()
      })
  }, [currentPage])
  function previousPage() {
    setCourrentPage(prevPage)
  }
  function NextPage() {
    setCourrentPage(nextPage)
  }

  if (loading) return  <div className="loading">Loading</div>
  return (
    <>
      <div>
        <PokemonList pokemon={pokemon} />
        <NextandPrevPages
          previousPage={prevPage ? previousPage : null}
          NextPage={nextPage ? NextPage : null}
        />
      </div>
    </>
  )
}
