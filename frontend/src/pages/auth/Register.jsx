import { useState } from "react";

import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import FormGroup from "@mui/material/FormGroup";

const Register = () => {
    const [formRegister, setFormRegister] = useState({
        username_register: "",
        password_register: "",
    });

    const handleInput = (e) => {
        setFormRegister({
            ...formRegister,
            [e.target.name]: e.target.value,
        });
    };

    const submitRegister = () => {
        fetch("http://localhost:8000/api/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username: formRegister.username_register,
                password: formRegister.password_register
            }),
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.status === 500) {
                    return alert(data.message);
                }
                
                return window.location = "/login";
            });
    };

    return (
        <Box sx={{ width: "50%", margin: "auto" }}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <FormGroup>
                        <TextField
                            label="Username"
                            name="username_register"
                            value={formRegister.username}
                            onChange={handleInput}
                            autoComplete="false"
                        />
                    </FormGroup>
                </Grid>
                <Grid item xs={12}>
                    <FormGroup>
                        <TextField
                            label="Password"
                            name="password_register"
                            type="password"
                            value={formRegister.password}
                            onChange={handleInput}
                            autoComplete="false"
                        />
                    </FormGroup>
                </Grid>
                <Grid item xs={12}>
                    <Button variant="contained" onClick={submitRegister}>
                        Register
                    </Button>
                </Grid>
            </Grid>
        </Box>
    );
}

export default Register;