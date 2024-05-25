import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Cards from './Cards';

const Trending = () => {

  const [color, setColor] = useState('home')
  const handleclick = (linkedId) => {
    setColor(linkedId);
  }
  const [products, setProducts] = useState({
    men: null,
    women: null,
    women2: null,
    kids: null,
    men2: []

  });
  const [mensProducts, setMensProducts] = useState([]);
  const [womenProducts, setWomenProducts] = useState([]);
  const [kidsProducts, setKidsProducts] = useState([]);


  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://65deedf0ff5e305f32a0e22a.mockapi.io/shivam');
        const menProducts = response.data.filter(product => product.category === 'men');
        const womenProducts = response.data.filter(product => product.category === 'women');
        const kidsProducts = response.data.filter(product => product.category === 'kids');
        const men2 = menProducts.slice(0, 4);
        setMensProducts(men2);
        const women2 = womenProducts.slice(0, 4);
        setWomenProducts(women2);
        const kids2 = kidsProducts.slice(0, 4);
        setKidsProducts(kids2);

        setProducts({
          men: menProducts[1] || null,
          women: womenProducts[1] || null,
          women2: womenProducts[3] || null,
          kids: kidsProducts[1] || null,
        });
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);


  return (
    <>
      <div className="container-fluid my-5" >
        <div className="container text-center fw-bold">
          <h1 className='mb-5 fs-1 fw-bold'>

            Trending
          </h1>
          <div className="row ">
            <ul class="nav nav-pills mb-3 d-flex justify-content-center " id="pills-tab" role="tablist">
              <li className="nav-item active" role="presentation">
                <button className="nav-link  active rounded-pill px-5 me-3" style={{ backgroundColor: color === 'home' ? 'orangered' : '', color: color === 'home' ? 'white' : 'black' }} id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true" onClick={() => handleclick('home')}>All</button>
              </li>
              <li className="nav-item" role="presentation">
                <button className="nav-link rounded-pill px-5 me-3" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false" onClick={() => handleclick('men')} style={{ backgroundColor: color === 'men' ? 'orangered' : 'white', color: color === 'men' ? 'white' : 'black' }}>Men</button>
              </li>
              <li className="nav-item" role="presentation">
                <button className="nav-link rounded-pill px-5 me-3" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false" onClick={() => handleclick('women')} style={{ backgroundColor: color === 'women' ? 'orangered' : 'white', color: color === 'women' ? 'white' : 'black' }}>Women</button>
              </li>
              <li className="nav-item" role="presentation">
                <button className="nav-link rounded-pill px-5 me-3" id="pills-disabled-tab" data-bs-toggle="pill" data-bs-target="#pills-disabled" type="button" role="tab" aria-controls="pills-disabled" aria-selected="false" onClick={() => handleclick('kids')} style={{ backgroundColor: color === 'kids' ? 'orangered' : 'white', color: color === 'kids' ? 'white' : 'black' }}>Kids</button>
              </li>
            </ul>
            <div className="tab-content" id="pills-tabContent">
              <div className="tab-pane fade show active " id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab" tabindex="0">
                <div>
                  <div className="container-fluid bg-light mt-4">
                    <div className="container">
                      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4">
                        {products.men && (
                          <div className="col py-5 "  >
                            <Cards product={products.men}/>
                          </div>
                        )}
                        {products.women && (
                          <div className="col py-5 " > 
                            <Cards product={products.women}/>
                          </div>
                        )}
                        {products.kids && (
                          <div className="col py-5 "  >
                            <Cards product={products.kids} />
                          </div>
                        )}
                        {products.women2 && (
                          <div className="col py-5 "  >
                            <Cards product={products.women2} />

                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                </div>
              </div>
              <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab" tabindex="0">
                <div>
                  <div className="container-fluid bg-light mt-4">
                    <div className="container">
                      <div className="row row-cols-1  row-cols-md-2 row-cols-lg-4 ">
                        {mensProducts.map(product => (
                          <div className="col py-5 ">
                            <Cards product={product} />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                </div>
              </div>
              <div className="tab-pane fade " id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab" tabindex="0">
                <div className="container-fluid bg-light mt-4">
                  <div className="container">
                    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4">
                      {womenProducts.map(product => (
                        <div className="col py-5">
                          <Cards product={product} />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

              </div>
              <div className="tab-pane fade" id="pills-disabled" role="tabpanel" aria-labelledby="pills-disabled-tab" tabindex="0">
                <div className="container-fluid bg-light mt-4">
                  <div className="container">
                    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4">
                      {kidsProducts.map(product => (
                        <div className="col py-5">
                          <Cards product={product} />
                        </div>
                      ))}
                 
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Trending