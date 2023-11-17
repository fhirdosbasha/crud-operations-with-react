function Table(props) {
    return(
            <table className="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Category</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.productsList.map(
                            (product) => (
                                    <tr key={product.id}>
                                        <td>{product.id}</td>
                                        <td>{product.name}</td>
                                        <td>{product.price}</td>
                                        <td>{product.category}</td>
                                        <td>
                                            <button className="btn btn-primary m-2" onClick={
                                                () => {
                                                    props.editProduct(product)
                                                }
                                            }>Edit</button>
                                            <button className="btn btn-danger m-2" onClick={
                                                () => {
                                                    props.deleteProduct(product.id)
                                                }
                                            }>Delete</button>
                                        </td>
                                    </tr>
                                )
                        )
                    }
                </tbody>
            </table>
    )

}

export default Table