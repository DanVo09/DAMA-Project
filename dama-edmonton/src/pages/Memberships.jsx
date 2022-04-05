import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import CartContext from '../context/cart/CartContext';


class Memberships extends React.Component {
  // State of your application
  state = {
    indimemberships: [],
    corpmemberships: [],
    error: null,
  };

  

  // Fetch your memberships immediately after the component is mounted
  componentDidMount = async () => {
    try {
      const response1 = await axios.get('http://localhost:1337/api/individual-memberships');
      const response2 = await axios.get('http://localhost:1337/api/corporate-memberships');
      this.setState({ indimemberships: response1.data.data,  corpmemberships: response2.data.data});
    } catch (error) {
      this.setState({ error });
    }
  };

  

  render() {
    const { error, membership } = this.state;
    
    

    // Print errors if any
    if (error) {
      return <div>An error occured: {error.message}</div>;
    }

    return (
      <div className='memberships-page'>
        <div className="memberships-wrapper">
          <section>
            <h2>Why Become a Member</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit nam assumenda, odit, corrupti, vitae eveniet tenetur nobis libero consequatur pariatur quas ullam perferendis rem fuga repellat inventore maxime beatae delectus.</p>
          </section>
          <section className="individual-memberships memberships">
            <h2>individual membership options</h2>
            <div className='membership-cards'>
              {this.state.indimemberships.map(membership => (
                <div className='membership-card' key={membership.id}>
                  <div>
                    <h3>{membership.attributes.title}</h3>
                    <p>${membership.attributes.price}</p>
                  </div>
                  <p className='membership-description'>{membership.attributes.description}</p>
                  <div className='purchase'>
                    <Link to="#" className='purchase-membership'>PURCHASE</Link>
                  </div>
                </div>
              ))}
            </div>
          </section>
          
          <section className="corporate-memberships memberships">
            <h2>corporate membership options</h2>
            <div className='membership-cards'>
              {this.state.corpmemberships.map(membership => (
                <div className='membership-card' key={membership.id}>
                  <div>
                    <h3>{membership.attributes.title}</h3>
                    <p>${membership.attributes.price}</p>
                  </div>
                  <p className='membership-description'>{membership.attributes.description}</p>
                  <div className='purchase'>
                    <Link to="#" className='purchase-membership'>PURCHASE</Link>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default Memberships;