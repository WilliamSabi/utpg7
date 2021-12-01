import React,{useState, useEffect} from 'react'
import {Navbar, Container,Nav,NavDropdown,Form, Button, Offcanvas, FormControl} from 'react-bootstrap'
import {Link} from 'react-router-dom';

export default function Barra() {

    const [show,setShow]= useState(true)
    const [RegistrarAdmin,setRegistrarAdmin]= useState(false)
    const [menu,setMenu]= useState(false)

    useEffect(() => {
        
        if(sessionStorage.getItem('token')){
            setMenu(true)
            setShow(false)
            setRegistrarAdmin(true)
        }
        
    }, []);

    const salir= ()=>{
        sessionStorage.clear()
        window.location.href="/"
    }


    return (
        <div>
            <Navbar bg="dark" variant="dark" expand={show}>
                <Container fluid>
                    <Navbar.Brand href="#">
                    <img
                            src="./logo_utpg7.png"
                            width="136"
                            height="46"
                            className="d-inline-block align-top"
                            alt="App logo" />

                    </Navbar.Brand>
                    <Link hidden={RegistrarAdmin} style={{ color:'#FFF', textDecoration:'none' }} to="/crearAdmin"> <i className="register_icon" class="uil uil-user-plus"></i> <Navbar.Brand>   Registrarse </Navbar.Brand> </Link>
                    <Navbar.Brand hidden={show} href="#" onClick={()=>salir()} to="/" className="cerrar_sesion"><i class="uil uil-signout"></i>  Cerrar sesión </Navbar.Brand>
                    <Navbar.Toggle aria-controls="offcanvasNavbar" />
                    <Navbar.Offcanvas
                    id="offcanvasNavbar"
                    aria-labelledby="offcanvasNavbarLabel"
                    placement="end"
                   
                    >
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title hidden={show} id="offcanvasNavbarLabel">Bienvenido, {sessionStorage.getItem('nombre')}</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <Nav className="justify-content-end flex-grow-1 pe-3">
                            <ul>
                            <Nav.Link href="/verSolicitudes"><li href="/verSolicitudes"><i class="uil uil-clipboard-notes"></i> Ver solicitudes</li></Nav.Link>
                            </ul>
                        <NavDropdown title="Acciones" id="offcanvasNavbarDropdown">
                            <NavDropdown.Item href="/verSolicitudes"><i class="uil uil-clipboard-notes"></i> Ver solicitudes</NavDropdown.Item>
                            
                        </NavDropdown>

                        </Nav>
                        
                    </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
        </div>
    )
}
