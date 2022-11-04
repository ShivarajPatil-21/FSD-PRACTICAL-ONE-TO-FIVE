import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useHistory } from 'react-router-dom';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

const Login = () => {

    const history = useHistory();

    const [inpval, setInpval] = useState({
        email: "",
        password: ""
    });

    const [data, setData] = useState([]);
    console.log(inpval);

    const getdata = (e) => {
        // console.log(e.target.value);


        const { value, name } = e.target;
        // console.log(value,name);


        setInpval(() => {
            return {
                ...inpval,
                [name]: value
            };
        });

    };

    const addData = (e) => {
        e.preventDefault();

        const getuserArr = localStorage.getItem("index");
        console.log(getuserArr);

        const { email, password } = inpval;
        if (email === "") {
            alert('email field is requred');
        } else if (!email.includes("@")) {
            alert('plz enter valid email addres');
        } else if (password === "") {
            alert('password field is requred');
        } else if (password.length < 5) {
            alert('password length greater five');
        } else {

            if (getuserArr && getuserArr.length) {
                const userdata = JSON.parse(getuserArr);
                const userlogin = userdata.filter((el, k) => {
                    return el.email === email && el.password === password;
                });

                if (userlogin.length === 0) {
                    alert("invalid details");
                } else {
                    console.log("user login succesfulyy");

                    localStorage.setItem("user_login", JSON.stringify(userlogin));

                    // history.push("/extrapage")
                    history.push("/home");
                }
            }
        }

    };

    return (
        <>
            <div className="container mt-3">
                <section className='d-flex justify-content-between'>
                    <div className="left_data mt-3 p-3" style={{ width: "100%" }}>
                        <h4 style={{ color: "red", fontWeight: "bold", textAlign: "center" }}>20CS016 Vatsal Ghoghari</h4>
                        <h3 className='text-center col-lg-6'>Sign IN</h3>
                        <Form >

                            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">

                                <Form.Control type="email" name='email' onChange={getdata} placeholder="Enter email" />
                            </Form.Group>

                            <Form.Group className="mb-3 col-lg-6" controlId="formBasicPassword">

                                <Form.Control type="password" name='password' onChange={getdata} placeholder="Password" />
                            </Form.Group>
                            <Button variant="primary" className='col-lg-6' onClick={addData} style={{ background: "orange" }} type="submit">
                                Submit
                            </Button>
                        </Form>
                        <p className='mt-3'>Already Have an Account <span>SignIn</span> </p>
                    </div>

                </section>
                {/* <ToastContainer /> */}
            </div>
        </>
    );
};

export default Login;