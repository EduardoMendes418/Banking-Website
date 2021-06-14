import React from 'react'
import { 
    Container, 
    Form, 
    FormButton, 
    FormContent,
    FormH1, 
    FormInput, 
    FormLabel, 
    FormWrap, 
    Icon, 
    Text 
} from './SigninElements'

const SignIn = () => {
    return (
        <>
        <Container>
            <FormWrap>
                <Icon to="/">Banking</Icon>
                <FormContent>
                    <Form>
                        <FormH1> Sign in to yout account</FormH1>
                        <FormLabel htmlFor='for'>Email</FormLabel>
                        <FormInput type='email'required></FormInput>
                        <FormLabel htmlFor='password'>Password</FormLabel>
                        <FormInput type='password'required></FormInput>
                        <FormButton type='submit'> Continue </FormButton>
                        <Text>Forgot password</Text>
                    </Form>
                </FormContent>
            </FormWrap>
        </Container>    
        </>
    )
}

export default SignIn
