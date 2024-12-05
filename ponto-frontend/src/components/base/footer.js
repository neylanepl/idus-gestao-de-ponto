import React from 'react';
import { Container} from 'react-bootstrap';

const Footer = () => {
    return ( 
        <div className="py-0" style={{backgroundColor: '#2793ee'}}>
            <Container>
                <div className="row justify-content-md-center pb-2 pt-2">
                    <div className="col-md-auto text-white">
                        <p className="fs-6 my-2">
                            Copyright © 2024 &nbsp;|&nbsp; Todos os direitos reservados
                        </p>
                    </div>
                </div>
            </Container>
        </div>
    );
}

export default Footer;