import React from 'react'

function Nav({libraryStatus, setLibraryStatus}) {

  return (
    <nav>
      <h3>Geek for Geeks</h3>
      <button onClick={() => setLibraryStatus(!libraryStatus)}><h4>Library</h4></button>
    </nav>
  )
}

export default Nav
