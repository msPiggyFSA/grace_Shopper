import React from 'react'

const DeleteProduct=(props)=> {
    const product = props.props
    console.log(product, 'this is product')
  return (
    <div>
        <button>
            Delete
        </button>
    </div>
  )
}

export default DeleteProduct;