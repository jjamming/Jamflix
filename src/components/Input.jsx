import { useForm } from 'react-hook-form';
import * as yup from 'yup'
import {yupResolver} from '@hookform/resolvers/yup'
import styled from 'styled-components';

const Input = (props) => {
    const {type, placeholder, error, register, value} = props;
    
    return (
        <div style = {{marginBottom : '15px'}}>
            <StyledInput type={type} placeholder={placeholder}{...register}/>
            {error && <FormError>{error}</FormError>}
        </div>
        
    )

}

export default Input;

const StyledInput = styled.input`
    width : 400px;
    height : 40px;
    border-radius : 10px;
    padding: 4px 12px;
    //margin-top : 15px;
    &[type="submit"]{
        background-color : #FF5675;
        color : #FFF;
        width : 425px;
        height : 50px;
    }
`

const FormError = styled.p`
    color : red;
    text-align : left;
    font-size : 14px;
    margin-top : 8px;
`