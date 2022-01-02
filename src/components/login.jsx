import { Button, Col, Row } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { FaLock, FaUserAlt } from "react-icons/fa";
import "../style/login.css"
import imagelogin from "./login.svg"

export default function Login () {
    return (
        <>
            <div className="biru">
                <Row>
                    <Col>
                        <div className="forms-container">
                            <Form>
                                <div className="signin-signup">
                                    <div className="sign-in-form">
                                        <h2 className="title1">Hai</h2><br/>
                                        <h2 className="title">Selamat Datang</h2>
                                        <div className="input-field">
                                            <div className="fa-user"><FaUserAlt ></FaUserAlt></div>
                                            <input type="email" placeholder="masukkan email anda" required />
                                        </div>
                                        <div className="input-field">
                                            <div className="fa-lock"><FaLock ></FaLock></div>
                                            <input type="email" placeholder="masukkan password anda" required />
                                        </div> <br />
                                        <button className="btn-masuk">Masuk</button>
                                    </div>
                                </div>
                            </Form>
                        </div>
                        <div className="panels-container">
                            <div className="panel left-panel">
                                <div className="content">
                                    <h2>Silahkan Mendaftar</h2>
                                    <p>Buat akun sekarang gratis dan cepat</p>
                                    <Button className="btn transparent">Daftar</Button>
                                </div>
                                {/* <img src="../img/login.svg" alt="" className="image" /> */}
                                <img src={imagelogin} alt="" className="image" />
                            </div>
                            {/* <div className="panel right-panel">
                                <div></div>
                            </div> */}
                        </div>
                    </Col>
                </Row>

                
            </div>
            
        </>
    )
}