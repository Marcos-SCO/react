import Head from 'next/head';
import Menu from '../components/Menu';
import { Jumbotron, Container } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
library.add(fas);

function HomePage() {
    return (
        <>
            <Head>
                <title>Home</title>
                <meta name='description' content='React with Next class' />
                <meta name='author' content='Marcos dos Santos Carvalho' />
            </Head>
            <Menu />
            <Jumbotron fluid className="services">
                <style>
                    {`
                        .services {
                            padding-top:80px;
                            padding-bottom:80px;
                            background-color:#000;
                            color:#fff;
                            margin-bottom: 0!important
                        }
                        .circulo{
                            width:140px;
                            height: 140px;
                            background-color: #fed136;
                            font-size: 52px;
                            padding-top: 24px;
                        }
                        .centralizar{
                            margin: 0 auto !important;
                            float: none !important;
                        }
                    `}
                </style>
                <Container className='text-center'>
                    <div>
                        <h1 className='display-4'>Serviços da Empresa</h1>
                        <p className='lead pb-4'>Temos a solução que a sua empresa precisa!</p>
                    </div>
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="rounded-circle circulo centralizar">
                                <FontAwesomeIcon icon='dolly' />
                            </div>
                            <h2 className='mt-4 mb-4'>Serviços 1</h2>
                            <p>Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna.</p>
                        </div>
                        <div className="col-lg-4">
                            <div className="rounded-circle circulo centralizar">
                                <FontAwesomeIcon icon="project-diagram" />
                            </div>
                            <h2 className='mt-4 mb-4'>Serviços 2</h2>
                            <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh.</p>
                        </div>
                        <div className="col-lg-4">
                            <div className="rounded-circle circulo centralizar">
                                <FontAwesomeIcon icon="dolly-flatbed" />
                            </div>
                            <h2 className='mt-4 mb-4'>Serviços 3</h2>
                            <p>Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
                        </div>
                    </div>
                </Container>
            </Jumbotron>
            <h1>Home page</h1>
        </>
    );
}

export default HomePage;