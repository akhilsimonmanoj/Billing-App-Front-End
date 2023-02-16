import {useSelector,useDispatch} from 'react-redux'
import { useState } from 'react'
import TextField from '@mui/material/TextField'
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button'
import FormHelperText from '@mui/material/FormHelperText';
import CartItems from './CartItems';
import BillsDialog from './BillsDialog';
import { asyncAddBills } from '../../actions/billActions'
import {getProduct} from '../../Selectors/productSelectors'
import { getCustomer } from '../../Selectors/CustomerSelectors'; 
import { Typography } from '@mui/material';

const BillsForm = (props) => { 
    const dispatch = useDispatch() 
    const[customerId,setCustomerId] = useState('')
    const [billDate,setBillDate] = useState('')
    const [productId,setProductId] = useState('')
    const[itemquantity,setItemQuantity] = useState('1')
    const [lineItems,setLineItems] = useState([])
    const[formErr,setFormErr] = useState({})
    const[cartItemErr,setCartItemErr] = useState({})
    const[generatedBill,setGeneratedBill] = useState({})
    const[open,setOpen] = useState(false)
    const err = {},cartErr={}

    const [customers, products] = useSelector((state) => {
        return [state.customers, state.products]
    })
 

    const handleClose = () => {
        setOpen(false);
      };


    const handleChange = (e) => {
        const attr = e.target.name
        if(attr === 'customer'){
            setCustomerId(e.target.value)
        }if(attr === 'billDate'){
            setBillDate(e.target.value)
        }if(attr === 'product'){
            setProductId(e.target.value)
        } if(attr === 'itemquantity'){
            setItemQuantity(e.target.value)
        }
    }
    const handleDecrement = (id) => {
        const arr = lineItems.map((lineItem) => {
            if(lineItem.id === id){
                return{...lineItem,quantity:Number(lineItem.quantity) - 1}
            }else{
                return{...lineItem}
            }
        })
        setLineItems(arr)
    }
    const handleIncrement = (id) => {
        const arr = lineItems.map((lineItem) => {
            if(lineItem.id === id){
                return{...lineItem,
                    quantity: Number(lineItem.quantity) + 1}
            }else{
                return{...lineItem}
            }
        })
        setLineItems(arr)
    }
    const generateCartItems = (lineItems,products) => {
        const arr = []
        for(const item of lineItems){
            for(const prod of products){
                if(item.product === prod._id){
                    const obj = {...item,name : prod.name}
                    arr.push(obj)
                }
            }
        }
        return arr
    }

    const validateCartItem = () => {
        if(productId.length === 0){
            cartErr.blankProduct = 'Product Name is Required' 
        }
        setCartItemErr(cartErr)
    }
    const validateForm = () => {
        if(billDate.length === 0){
            err.blankDate = 'Date is Required'
        } if(customerId.length === 0 ){
            err.blankCustomer = 'Customer is Required'
        } if(lineItems.length === 0){
            err.noProduct = 'Product is Required'
        }
        setFormErr(err)
    }
    const handleClick = (e) => {
        e.preventDefault()
        const newLineItems = [{id : Number(new Date()),product : productId,quantity:itemquantity},...lineItems]
        validateCartItem()
        if(Object.keys(cartErr).length === 0)
        {
            setLineItems(newLineItems)
            setProductId('')
            setItemQuantity('1')
        }
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        validateForm()
        if(Object.keys(err).length === 0)
        {
            const resetForm = () => {
                setBillDate('')
                setCustomerId('')
                setProductId('')
                setLineItems([])
            }
            const lineItemsWithoutId = lineItems.map(({id,...items}) => ({...items}))
            const formData = {
                date : billDate,
                customer : customerId,
                lineItems : lineItemsWithoutId
            }
            const getGeneratedBill = (billData) => {
                setGeneratedBill(billData)
                setOpen(true)
            }
            dispatch(asyncAddBills(formData,resetForm,getGeneratedBill))
        }
    }
    return(
            <div>
                <form onSubmit={handleSubmit}>
                    <Typography variant='h4'> Add Bill </Typography>
                    <InputLabel> Date </InputLabel>
                    <TextField
                     className='textfield'
                    type='date'
                    name='billDate'
                    value={billDate}
                    onChange={handleChange} 
                    helperText={formErr.blankDate}
                    /><br/>
                    <InputLabel>Customer</InputLabel>
                    <Select
                     className='textfield'
                        native
                        id="customer"
                        value={customerId} 
                        onChange={handleChange} 
                        name="customer"        
                    >
                        <option value="">select customer</option>
                        {
                            customers.map((customer) => {
                                return <option key={customer._id} value={customer._id}>{customer.name}</option>
                            })
                        }
                    </Select>
                    <FormHelperText>{formErr.blankCustomer}</FormHelperText><br/>
                        <InputLabel>Product</InputLabel>
                        <Select
                         className='textfield'
                        native
                        value={productId}
                        onChange={handleChange}
                        name="product"
                        error={Boolean(cartItemErr.blankProduct)}
                        >
                            <option value="">select product</option>
                            {
                                products.map((product) => {
                                    return <option key={product._id} value={product._id}>{product.name}</option>
                                })
                            }
                        </Select>
                        <FormHelperText>{cartItemErr.blankProduct || formErr.noProduct}</FormHelperText><br/>
                    <TextField
                     className='textfield' 
                        type="number" 
                        label="Quantity" 
                        name="itemquantity" 
                        value={itemquantity} 
                        onChange={handleChange}
                    /><br/>
                    <Button color="success" variant="contained" className="add-item" onClick={handleClick}>Add Item</Button><br/>
                    {
                        lineItems.length > 0 && <CartItems cartItems={generateCartItems(lineItems,products)} handleDecrement={handleDecrement} handleIncrement={handleIncrement}/>
                    } 
                    <Button color="primary" variant="contained" className="add-bill" type="submit">Add Bill</Button>       
                </form>
                {
                    open && <BillsDialog open={open} 
                            handleClose={handleClose} 
                            getProduct={getProduct} 
                            getCustomer={getCustomer} 
                            {...generatedBill} 
                            products={products}  
                            customers={customers} /> 
                }
            </div>
    )   
}
export default BillsForm

