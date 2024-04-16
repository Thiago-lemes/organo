import React from 'react';
import './RodaPe.css';

const Rodape = () => {
    return (
        <footer className="footer">
            <section>
                <ul className="social-icons">
                    <li>
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                            <img src="/imagens/fb.png" alt="Facebook" />
                        </a>
                    </li>
                    <li>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                            <img src="/imagens/tw.png" alt="Twitter" />
                        </a>
                    </li>
                    <li>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                            <img src="/imagens/ig.png" alt="Instagram" />
                        </a>
                    </li>
                </ul>
            </section>
            <section>
                <img src="/imagens/logo.png" alt="Logo" />
            </section>
            <section>
                <p>
                    Desenvolvido por Thiago Lemes.
                </p>
            </section>
        </footer>
    );
}

export default Rodape;
