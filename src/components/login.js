import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import FingerprintIcon from '@mui/icons-material/Fingerprint';
import {Button, Card, CardActions, CardContent, Container, CssBaseline, InputAdornment, TextField} from "@mui/material";


const Login = ({chanFunc, connect}) => {
    return (
        <div>
            <CssBaseline />
            <Container maxWidth="sm">
                <Card sx={{ maxWidth: 845 }} variant="outlined" style={{backgroundColor: "#cbcfd2"}}>
                    <div>
                        <CardContent>
                            <TextField
                                id="outlined-basic"
                                label="Ваше имя"
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <PersonOutlineIcon color={"primary"}/>
                                        </InputAdornment>
                                    ),
                                }}
                                variant="outlined"
                                onChange={(e) => chanFunc(e.target.value)}
                            />
                        </CardContent>
                        <CardActions>
                            <Button
                                size="large"
                                className="mx-auto"
                                variant={"outlined"}
                                startIcon={<FingerprintIcon/>}
                                onClick={connect}
                            >Войти</Button>
                        </CardActions>
                    </div>
                </Card>
            </Container>
        </div>
    )
}

export default Login
