import React from 'react'

function Footer() {
    return (
        <>
            <footer className="row">
                <div className="col-md-12">
                    <address className="footer p-3 mt-4 text-center bg-dark text-light">
                        <p>
                            Desenvolvido por: <span className="text-warning font-weight-normal">Marcos dos Santos Carvalho</span>
                        </p>
                        <p>Usando React, Redux e integração com API externa de filmes e series <a href="https://developers.themoviedb.org/3/getting-started/image-languages" target="_blank" rel="noopener noreferrer">TMDB</a>
                        </p>
                    </address>
                </div>
            </footer>
        </>
    )
}

export default Footer
