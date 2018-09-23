import React from 'react'

const SearchBox = props => {
  return (
    <div className="mt-5">
      <input
        type="text"
        onInput={props.onSearch}
        className="form-control"
      />
    </div>
    )
}

export default SearchBox
