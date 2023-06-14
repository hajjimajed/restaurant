import './home.styles.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserTie, faUtensils, faCartPlus, faHeadset, faCoffee, faHamburger, faPizzaSlice, } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faFacebook, faYoutube, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { useEffect, useState } from 'react';

const Home = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://api.lamamma.store/api/products/visible')
            .then((response) => response.json())
            .then((data) => {
                setProducts(data);
            })
            .catch((error) => {
                console.log(error);
            })
    }, [])



    return (
        <div id='home' className='home-container'>
            <div className="container-xxl py-5 bg-dark hero-header mb-5">
                <div className="container  py-5">
                    <div className="row align-items-center g-5">
                        <div className="col-lg-6 text-center text-lg-start">
                            <h1 className="display-3 text-white animated slideInLeft">Savourer Nos <br /> Délicieux Repas</h1>
                            <p className="text-white animated slideInLeft mb-4 pb-2">
                                Découvrez une expérience culinaire inoubliable en savourant nos délicieux repas. Chez nous, la satisfaction de vos papilles est notre priorité absolue.</p>
                            <a href="#reserve" className="btn btn-primary py-sm-3 px-sm-5 me-3 animated slideInLeft">Réserver</a>
                        </div>
                        <div className="col-lg-6 text-center text-lg-end overflow-hidden">
                            <img className="img-fluid spin-animation" src="https://i.ibb.co/744WKNZ/Untitled-1.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>

            <div id='service' className="container-xxl py-5">
                <div className="container">
                    <div className="row g-4">
                        <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="service-item rounded pt-3">
                                <div className="p-4">
                                    <FontAwesomeIcon icon={faUserTie} className="fa fa-3x fa-user-tie text-primary mb-2" />
                                    <h5>Maîtres cuisiniers</h5>
                                    <p>Notre équipe culinaire experte est composée de maîtres cuisiniers qui élaborent avec passion des plats exquis.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.3s">
                            <div className="service-item rounded pt-3">
                                <div className="p-4">
                                    <FontAwesomeIcon icon={faUtensils} className="fa fa-3x fa-utensils text-primary mb-2" />
                                    <h5>Nourriture de qualité</h5>
                                    <p>Nous sommes fiers de n'utiliser que les meilleurs ingrédients, provenant de sources locales et mondiales, pour garantir une qualité inégalée.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.5s">
                            <div className="service-item rounded pt-3">
                                <div className="p-4">
                                    <FontAwesomeIcon icon={faCartPlus} className="fa fa-3x fa-user-tie text-primary mb-2" />
                                    <h5>Commande par téléphone</h5>
                                    <p>grâce à notre système de commande par téléphone pratique, nous fournissons un service rapide et personnalisé.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.7s">
                            <div className="service-item rounded pt-3">
                                <div className="p-4">
                                    <FontAwesomeIcon icon={faHeadset} className="fa fa-3x fa-user-tie text-primary mb-2" />
                                    <h5>Service de qualité</h5>
                                    <p>Notre personnel dévoué s'engage à vous fournir un service exceptionnel.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>




            <div id='about' className="container-xxl py-5 about-container">
                <div className="container">
                    <div className="row g-5 align-items-center">
                        <div className="col-lg-6">
                            <div className="row g-3">
                                <div className="col-6 text-start">
                                    <img className="img-fluid rounded w-100 wow zoomIn" data-wow-delay="0.1s" src="https://i.ibb.co/YjcTXj7/Capture-d-cran-2023-06-06-152117.png" />
                                </div>
                                <div className="col-6 text-start">
                                    <img className="img-fluid rounded w-75 wow zoomIn" data-wow-delay="0.3s" src="https://i.ibb.co/yN2w0ms/Capture-d-cran-2023-06-06-152055.png" style={{ marginTop: '25%' }} />
                                </div>
                                <div className="col-6 text-end">
                                    <img className="img-fluid rounded w-75 wow zoomIn" data-wow-delay="0.5s" src="https://i.ibb.co/YXktvsH/Capture-d-cran-2023-06-06-152210.png" />
                                </div>
                                <div className="col-6 text-end">
                                    <img className="img-fluid rounded w-100 wow zoomIn" data-wow-delay="0.7s" src="https://i.ibb.co/6YtYLZN/Capture-d-cran-2023-06-06-152133.png" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <h5 className="section-title ff-secondary text-start text-primary fw-normal">À PROPOS</h5>
                            <h1 className="mb-4">Bienvenue au <i className="fa fa-utensils text-primary me-2"></i>Lamamma</h1>
                            <p className="mb-4">Que vous soyez amateurs de cuisine traditionnelle ou de nouvelles tendances gastronomiques, nous avons des options pour tous les goûts. </p>
                            <p className="mb-4">Nos ingrédients frais et de première qualité ajoutent une dimension supplémentaire à nos plats, garantissant une expérience gustative exceptionnelle à chaque fois que vous nous rendez visite. Venez savourer nos délicieux repas et laissez-nous vous offrir un moment culinaire mémorable.</p>
                            <div className="row g-4 mb-4">
                                <div className="col-sm-6">
                                    <div className="d-flex align-items-center border-start border-5 border-primary px-3">
                                        <h1 className="flex-shrink-0 display-5 text-primary mb-0" data-toggle="counter-up">15</h1>
                                        <div className="ps-4">
                                            <p className="mb-0">Ans</p>
                                            <h6 className="text-uppercase mb-0">Experience</h6>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="d-flex align-items-center border-start border-5 border-primary px-3">
                                        <h1 className="flex-shrink-0 display-5 text-primary mb-0" data-toggle="counter-up">5</h1>
                                        <div className="ps-4">
                                            <p className="mb-0">Populaire</p>
                                            <h6 className="text-uppercase mb-0">Maîtres cuisiniers</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <a className="btn btn-primary py-3 px-5 mt-2" href="">En Savoir Plus</a>
                        </div>
                    </div>
                </div>
            </div>






            {/* menu-section */}

            <div id='menu' className="container-xxl py-5">
                <div className="container menu-section">
                    <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                        <h5 className="section-title ff-secondary text-center text-primary fw-normal">Menu</h5>
                        <h1 className="mb-5">Nos Items Populaires</h1>
                    </div>
                    <div className="tab-class text-center wow fadeInUp" data-wow-delay="0.1s">
                        <ul className="nav nav-pills d-inline-flex justify-content-center border-bottom mb-5">
                            <li className="nav-item">
                                <a className="d-flex align-items-center text-start mx-3 ms-0 pb-3 active" data-bs-toggle="pill" href="#tab-1">

                                    <FontAwesomeIcon icon={faHamburger} className="fa fa-3x fa-user-tie text-primary" />
                                    <div className="ps-3">
                                        <small className="text-body">Populaire</small>
                                        <h6 className="mt-n1 mb-0">Sandwichs</h6>
                                    </div>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="d-flex align-items-center text-start mx-3 pb-3" data-bs-toggle="pill" href="#tab-2">
                                    <FontAwesomeIcon icon={faPizzaSlice} className="fa fa-3x fa-user-tie text-primary" />
                                    <div className="ps-3">
                                        <small className="text-body">Chaud</small>
                                        <h6 className="mt-n1 mb-0">Pizzas</h6>
                                    </div>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="d-flex align-items-center text-start mx-3 me-0 pb-3" data-bs-toggle="pill" href="#tab-3">
                                    <FontAwesomeIcon icon={faCoffee} className="fa fa-3x fa-user-tie text-primary" />
                                    <div className="ps-3">
                                        <small className="text-body">Rafraîchissant</small>
                                        <h6 className="mt-n1 mb-0">Boissons</h6>
                                    </div>
                                </a>
                            </li>
                        </ul>
                        <div className="tab-content">
                            <div id="tab-1" className="tab-pane fade show p-0 active">
                                <div className="row g-4">
                                    {
                                        products.map((product) => {
                                            if (product.category.category_Name === 'Sandwish') {
                                                return (
                                                    <div key={product.prod_Id} className="col-lg-6">
                                                        <div className="d-flex align-items-center">
                                                            <img className="flex-shrink-0 img-fluid rounded" src={product.prod_Image} alt="" style={{ width: '80px' }} />
                                                            <div className="w-100 d-flex flex-column text-start ps-4">
                                                                <h5 className="d-flex justify-content-between border-bottom pb-2">
                                                                    <span>{product.prod_Name}</span>
                                                                    <span className="text-primary">{product.prod_Price} Dt</span>
                                                                </h5>
                                                                <small className="fst-italic">{product.description}</small>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )
                                            }
                                        })
                                    }

                                </div>
                            </div>
                            <div id="tab-2" className="tab-pane fade show p-0">
                                <div className="row g-4">
                                    {
                                        products.map((product) => {
                                            if (product.category.category_Name === 'Pizza') {
                                                return (
                                                    <div key={product.prod_Id} className="col-lg-6">
                                                        <div className="d-flex align-items-center">
                                                            <img className="flex-shrink-0 img-fluid rounded" src={product.prod_Image} alt="" style={{ width: '80px' }} />
                                                            <div className="w-100 d-flex flex-column text-start ps-4">
                                                                <h5 className="d-flex justify-content-between border-bottom pb-2">
                                                                    <span>{product.prod_Name}</span>
                                                                    <span className="text-primary">{product.prod_Price} Dt</span>
                                                                </h5>
                                                                <small className="fst-italic">{product.description}</small>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )
                                            }
                                        })
                                    }
                                </div>
                            </div>
                            <div id="tab-3" className="tab-pane fade show p-0">
                                <div className="row g-4">
                                    {
                                        products.map((product) => {
                                            if (product.category.category_Name === 'Drink') {
                                                return (
                                                    <div key={product.prod_Id} className="col-lg-6">
                                                        <div className="d-flex align-items-center">
                                                            <img className="flex-shrink-0 img-fluid rounded" src={product.prod_Image} alt="" style={{ width: '80px' }} />
                                                            <div className="w-100 d-flex flex-column text-start ps-4">
                                                                <h5 className="d-flex justify-content-between border-bottom pb-2">
                                                                    <span>{product.prod_Name}</span>
                                                                    <span className="text-primary">{product.prod_Price} Dt</span>
                                                                </h5>
                                                                <small className="fst-italic">{product.description}</small>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )
                                            }
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>




            {/* reservation section */}

            <div id='reserve' className="container-xxl py-5 px-0 wow fadeInUp" data-wow-delay="0.1s">
                <div className="row g-0">
                    <div className="col-md-6">
                        <div className="reservation-img">
                            <img src="https://i.ibb.co/tM9pPsQ/Capture-d-cran-2023-06-06-161906.png" alt="" />
                        </div>
                    </div>
                    <div className="col-md-6 bg-dark d-flex align-items-center res-form">
                        <div className="p-5 wow fadeInUp reservation-form" data-wow-delay="0.2s">
                            <h5 className="section-title ff-secondary text-start text-primary fw-normal">Reservation</h5>
                            <h1 className="text-white mb-4">Appelez-nous</h1>
                            <h1 className="text-white mb-4">& Réservez une table maintenant</h1>
                            <h2 className="text-white mb-4">+216 98 235 744</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal fade" id="videoModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content rounded-0">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Youtube Video</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="ratio ratio-16x9">
                                <iframe className="embed-responsive-item" src="" id="video" allowFullScreen allowscriptaccess="always"
                                    allow="autoplay"></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            {/* footer container */}
            <div id='contact' className="container-fluid text-light footer footer-container pt-5 mt-5 wow fadeIn" data-wow-delay="0.1s">
                <div className="container py-5">
                    <div className="row g-5">
                        <div className="footer-link-menu col-lg-4 col-md-6">
                            <h4 className="section-title ff-secondary text-start text-primary fw-normal mb-4">Restaurant</h4>
                            <a className="footer-link mb-2" href="#about">À Propos Nous</a>
                            <a className="footer-link mb-2" href="#contact">Contacter Nous</a>
                            <a className="footer-link mb-2" href="#reserve">Réservation</a>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <h4 className="section-title ff-secondary text-start text-primary fw-normal mb-4">Contact</h4>
                            <p className="mb-2"><i className="fa fa-map-marker-alt me-3"></i>Rue Habib Bourguiba, Sidi Bouzid, Tunisie</p>
                            <p className="mb-2"><i className="fa fa-phone-alt me-3"></i>+216 98 235 744</p>
                            <div className="d-flex pt-2">

                                <a className="btn btn-outline-light btn-social" href="https://www.facebook.com/phonestoreee">
                                    <FontAwesomeIcon icon={faFacebook} className="fab fa-twitter" />
                                </a>

                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <h4 className="section-title ff-secondary text-start text-primary fw-normal mb-4">Horaire</h4>
                            <h5 className="text-light fw-normal mb-2">Lundi - Samedi</h5>
                            <p>11AM - 11PM</p>
                        </div>

                    </div>
                </div>
                <div className="container">
                    <div className="copyright">
                        <div className="row">
                            <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                                &copy; <a className="border-bottom" href="#">Lamamma</a>, Tous droits réservés.

                                Conçu par <a className="border-bottom" href="https://htmlcodex.com">VARWARE</a>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </div>

    )
}

export default Home;