import styled from 'styled-components';
import Input from '../components/Input';
import { useForm } from 'react-hook-form';
import * as yup from 'yup'
import {yupResolver} from '@hookform/resolvers/yup'
import { Navigate, useNavigate } from 'react-router-dom';
import axios from 'axios';

const SignupPage = () => {
    const navigate = useNavigate();

    const schema = yup.object().shape({
        email : yup
            .string()
            .email('이메일 형식이 올바르지 않습니다.')
            .required('이메일을 입력해주세요.'),
        password : yup
            .string()
            .min(8, '비밀번호는 8글자 이상이어야합니다.')
            .max(16,'비밀번호는 16자 이하이어야 합니다.')
            .required('비밀번호를 입력해주세요.'),
        passwordCheck : yup
            .string()
            .required('비밀번호를 다시 입력해주세요.')
            .oneOf([yup.ref('password'),null],'비밀번호가 일치하지 않습니다.')
    })

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver : yupResolver(schema)
    });


    const onSubmit = async (data) => {
        try {
            console.log('폼 제출시 출력되는 문장입니다.');
            console.log(data); // data 받았는지 테스트용
            const response = await axios.post('http://localhost:3000/auth/register', { // 워크북에서 제공된 be서버 가동 후 사용 가능
                email: data.email,
                password: data.password,
                passwordCheck: data.passwordCheck
            });
            
            console.log('회원가입 성공:', response.data);
            navigate('/login');
        } catch (error) {
            console.error('회원가입 실패:', error.response ? error.response.data : error.message);
            // navigate('/login') // 테스트용
        }
    };

    return (
        <FormDiv>
            <h1>회원가입</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Input 
                    type = "email"
                    placeholder='이메일을 입력해주세요'
                    error={errors.email?.message}
                    register={register("email")}
                />
                <Input 
                    type = "password"
                    placeholder='비밀번호를 입력해주세요'
                    error={errors.password?.message}
                    register={register("password")}
                />
                <Input 
                    type = "password"
                    placeholder='비밀번호를 다시 입력해주세요'
                    error={errors.passwordCheck?.message}
                    register={register("passwordCheck")}
                />
                <StyledInput type = "submit" value = "제출"/>
            </form>
        </FormDiv>
    );
}

export default SignupPage;

const FormDiv = styled.div`
    margin-top : 100px;
    flex-direction : column;
    display : flex;
    text-align : center;
    align-items : center;
    justify-content : center;
    
`
const StyledInput = styled.input`
    &[type="submit"]{
        background-color : #FF5675;
        color : #FFF;
        width : 425px;
        height : 50px;
        border-radius : 10px;
        padding: 4px 12px;
        &:hover{
            background-color : #0064FF;
        }
    }
`