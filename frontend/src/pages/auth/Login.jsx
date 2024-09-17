import { useState } from "react";

import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import FormGroup from "@mui/material/FormGroup";
import { Link } from "@mui/material";

const Login = () => {
    const [formLogin, setFormLogin] = useState({
        username: "",
        password: "",
    });

    const handleInput = (e) => {
        setFormLogin({
            ...formLogin,
            [e.target.name]: e.target.value,
        });
    };

    const submitLogin = () => {
        if (!formLogin.username || !formLogin.password) {
            return alert("Please fill all fields");
        }

        fetch("http://localhost:8000/api/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formLogin),
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.status === 401) {
                    return alert(data.message);
                }
                localStorage.setItem("token", data.token);
                return window.location = "/tasks";
            });
    };

    return (
        <Box sx={{ width: "50%", margin: "auto" }}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <FormGroup>
                        <TextField
                            label="Username"
                            name="username"
                            value={formLogin.email}
                            onChange={handleInput}
                            autoComplete="false"
                        />
                    </FormGroup>
                </Grid>
                <Grid item xs={12}>
                    <FormGroup>
                        <TextField
                            label="Password"
                            name="password"
                            type="password"
                            value={formLogin.password}
                            autoComplete="false"
                            onChange={handleInput}
                        />
                    </FormGroup>
                </Grid>
                <Grid item xs={12}>
                    <Link href="/register">
                        Do not have an account? Register
                    </Link>
                </Grid>
                <Grid item xs={12}>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={submitLogin}
                    >
                        Login
                    </Button>
                </Grid>
            </Grid>
        </Box>
    );
}

export default Login;