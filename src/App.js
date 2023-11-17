import Table from "./Table"
import Form from "./Form"
import { getData, postData, putData, deleteData } from "./Api"
import { useEffect, useState } from "react"

function App() {
  let [productsList, setProductsList] = useState([])
  let [showForm, setShowForm] = useState(false)
  let [formData, setFormData] = useState({
    name:'', price:'', category: ''
  })
  let [edit, setEdit] = useState(false)

  useEffect(
    () => {
      getProductsList()
    }, []
  )

  let openForm = () => {
    setShowForm(true)
  }

  let closeForm = () => {
    setShowForm(false)
  }

  let getProductsList = async () => {
    let res = await getData()
    setProductsList(res.data)
  }

  let addProduct = async (data) => {
    let product = {
      name: data.name,
      price: data.price,
      category: data.category
    }
    if(edit)
      await putData(data.id, product)
    else
      await postData(product)
    getProductsList()
    closeForm()
  }

  let editProduct = (product) => {
    setFormData(product)
    openForm()
    setEdit(true)
  }

  let deleteProduct = async (id) => {
    await deleteData(id)
    getProductsList()
  }

  return(
    <div className="wrapper m-5 w-50">
      <h2 className="text-primary text-center">CRUD Operations with React</h2>
      <button className="btn btn-primary float-end" onClick={() => {
        setFormData({name:'', price:'', category: ''})
        openForm()
      }}>Add Product</button>
      <Table productsList={productsList} editProduct={editProduct} deleteProduct={deleteProduct}/>
      {
        showForm && <Form closeForm={closeForm} formData={formData} addProduct={addProduct}/>
      }
    </div>
  )
}

export default App