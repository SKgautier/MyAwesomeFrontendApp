import { Button, Divider, TextField, Stack,Link} from '@mui/material';
import {Google, Microsoft} from '@mui/icons-material';

const SignInComponent = () => {
    return (
        <>
            <Stack direction={'column'}>
                <h4>Sign in</h4>
                <p>Welcome user, please sign in to continue</p>
            </Stack>
            <Stack spacing={2} direction={'row'}>
                <Button variant='outlined' startIcon={<Google/>}>Sign In with Google</Button>
                <Button variant='outlined' startIcon={<Microsoft/>}>Sign In with Microsoft</Button>
            </Stack>
            <br/>
            <Stack spacing={3} direction={'column'}>
                <TextField 
                label="Email Address"
                required={true}
                type={'email'}
                />
                <TextField 
                    label="Password"
                    required={true}
                    type={'password'}
                />
            </Stack>
            <Stack direction={'row-reverse'}>
                <Link href="#">Forgot your password?</Link>
            </Stack>

            <Divider>or</Divider>
            <Stack>
                <Button variant='contained'> Sign In</Button>
                <p>Don't have an account yet <Link>sign up</Link> now!</p>
            </Stack>
        </>
    );
}

export default SignInComponent;