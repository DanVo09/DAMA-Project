import React from 'react'
import { PayPalButtons } from '@paypal/react-paypal-js'

export default function Paypalcheckoutbutton(props) {
    const {product} = props;
    console.log(product)

    return (
        
        <PayPalButtons
            style={{
                shape: "pill",
                color: "blue",
                label: "checkout",
                tagline: "false"
            }}
            createOrder={(data, actions) => {
                return actions.order.create({
                    purchase_units: [
                        {
                            
                            description: product.courseDescription,
                            amount: {
                                value: product.price
                            }
                        }
                    ]
                })
            }}
        />
            
    )
}
