import React from "react"

export default function NextandPrevPages({ previousPage, NextPage }) {
  return (
    <>
      {previousPage !== null && (
        <button onClick={previousPage}>Previous page</button>
      )}
      {NextPage !== null && <button onClick={NextPage}>Next page</button>}
    </>
  )
}
