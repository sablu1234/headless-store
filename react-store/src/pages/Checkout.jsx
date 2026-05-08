import { useState } from "react"

const Checkout = () => {

    const [checkoutData, setCheckoutData] = useState(
        {
            fristname: "",
            lastname: "",
            address: "",
            city: "",
            state: "",
            postcode: "",
            country: "",
            email: "",
            phone: "",
        }
    )

    const handleOnchangeInput = (event) => {

        const {name, value} = event.target
        setCheckoutData((prevFormData) => ({
            ...prevFormData,
            [name]: value
        }))
    }

    const handleCheckoutSubmit = (event) => {
        event.preventDefault()

        console.log(checkoutData)
        setCheckoutData({
            fristname: "",
            lastname: "",
            address: "",
            city: "",
            state: "",
            postcode: "",
            country: "",
            email: "",
            phone: "",
        })
    }

    return<>
        <div className="container mt-5">
            <h1 className="mb-4">Checkout</h1>
            <form onSubmit={ handleCheckoutSubmit }>
            <div className="row mb-3">
                <div className="col-12 col-md-6">
                <label htmlFor="first_name" className="form-label">First Name:</label>
                <input
                    type="text"
                    className="form-control"
                    name="firstname"
                    onChange={ handleOnchangeInput }
                    value={ checkoutData.fristname }
                />
                </div>
                <div className="col-12 col-md-6">
                <label htmlFor="last_name" className="form-label">Last Name:</label>
                <input
                    type="text"
                    className="form-control"
                    name="lastname"
                    onChange={ handleOnchangeInput }
                    value={ checkoutData.lastname }
                />
                </div>
            </div>
            <div className="row mb-3">
                <div className="col-12 col-md-6">
                <label htmlFor="address_1" className="form-label">Address:</label>
                <input
                    type="text"
                    className="form-control"
                    name="address"
                    onChange={ handleOnchangeInput }
                    value={ checkoutData.address }
                />
                </div>
                <div className="col-12 col-md-6">
                <label htmlFor="city" className="form-label">City:</label>
                <input
                    type="text"
                    className="form-control"
                    name="city"
                    onChange={ handleOnchangeInput }
                    value={ checkoutData.city }
                />
                </div>
            </div>
            <div className="row mb-3">
                <div className="col-12 col-md-6">
                <label htmlFor="state" className="form-label">State:</label>
                <input
                    type="text"
                    className="form-control"
                    name="state"
                    onChange={ handleOnchangeInput }
                    value={ checkoutData.state }
                />
                </div>
                <div className="col-12 col-md-6">
                <label htmlFor="postcode" className="form-label">Postcode:</label>
                <input
                    type="text"
                    className="form-control"
                    name="postcode"
                    onChange={ handleOnchangeInput }
                    value={ checkoutData.postcode }
                />
                </div>
            </div>
            <div className="row mb-3">
                <div className="col-12 col-md-6">
                <label htmlFor="country" className="form-label">Country:</label>
                <input
                    type="text"
                    className="form-control"
                    name="country"
                    onChange={ handleOnchangeInput }
                    value={ checkoutData.country }
                />
                </div>
                <div className="col-12 col-md-6">
                <label htmlFor="email" className="form-label">Email:</label>
                <input
                    type="email"
                    className="form-control"
                    name="email"
                    onChange={ handleOnchangeInput }
                    value={ checkoutData.email }
                />
                </div>
            </div>
            <div className="row mb-3">
                <div className="col-12 col-md-6">
                <label htmlFor="phone" className="form-label">Phone:</label>
                <input
                    type="text"
                    className="form-control"
                    name="phone"
                    onChange={ handleOnchangeInput }
                    value={ checkoutData.phone }
                />
                </div>
            </div>
            <div className="text-center">
                <button type="submit" className="btn btn-primary">Place Order</button>
            </div>
            </form>
        </div>
  
    </>
}

export default Checkout