import { useState } from "react"

function Form(props) {
    let [product, setProduct] = useState(props.formData)
    let [submitted, setSubmitted] = useState(false)

    let changeFormData = (event) => {
        let {name, value} = event.target
        setProduct({...product, [name]:value})
    }

    return(
        <div className="form-overlay">
            <form>
                <div className="form-group mt-2">
                    <label>Name: </label>
                    <input type="text" className="form-control mt-1" value={product.name} name="name"
                        onChange={changeFormData} placeholder="Enter product name"/>
                    {
                        submitted && product.name === '' && <span className="text-danger">Product name is required</span>
                    }
                </div>

                <div className="form-group mt-2">
                    <label>Price: </label>
                    <input type="number" className="form-control mt-1" value={product.price} 
                        onChange={changeFormData} name="price" placeholder="Enter price"/>
                    {
                        submitted && product.price === '' && <span className="text-danger">Product price is required</span>
                    }
                </div>

                <div className="form-group mt-2">
                    <label>Category: </label>
                    <select className="form-control mt-1" onChange={changeFormData} value={product.category} name="category">
                        <option value={-1}>--Select Category--</option>
                        <option value={'Mobiles'}>Mobiles</option>
                        <option value={'Laptops'}>Laptops</option>
                        <option value={'TVs'}>TVs</option>
                    </select>
                    {
                        submitted && product.category === '' && <span className="text-danger">Product category is required</span>
                    }
                </div>

                <button className="btn btn-primary float-end" onClick={(e) => {
                    setSubmitted(true)
                    e.preventDefault()
                    if(!!product.name && !!product.price && !!product.category)
                        props.addProduct(product)
                }}>Submit</button>
                <button className="btn btn-danger float-end" onClick={(e) => {
                    e.preventDefault()
                    props.closeForm()
                }}>Cancel</button>
            </form>

        </div>
    )
}

export default Form