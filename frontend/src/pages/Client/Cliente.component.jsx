import React from 'react';
import axios from 'axios';
import MainLayout from '../../components/MainLayout/MainLayout.component';
import { Form, Input, Button,Typography, Space } from 'antd';
const {Title , Text} = Typography


const Client = () =>{

    const submitRegister = (values) => {
        
        console.log(values);
        var url = "/api/client"
        var data = {};
        axios.post(url , data)
        .then(respnse =>{
            // setSaleItems(respnse.data);
        })
        .catch(error =>{
            console.error(error);
        })
        .finally(() =>{
            
        })
    };
    


    return(
        <MainLayout menuKey = "2">
            <Title level ={2}>Cliente</Title>
            <Text>Ingresa los datos siguientes</Text>
            <br/>
            <br/>
            <Space align = "end">
            <Form
                name="basic"
                onFinish ={submitRegister}
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                initialValues={{ remember: true }}
                autoComplete="on"
            >
                <Form.Item
                label="Nombre"
                name="name"
                rules={[{ required: true, message: 'Porfavor introduce tu nombre' }]}
                >
                <Input />
                </Form.Item>
                <Form.Item
                label="Apellido P."
                name="lastname"
                rules={[{ required: true, message: 'Porfavor introduce tu apellido' }]}
                >
                <Input />
                </Form.Item>

                <Form.Item
                label="Apelldio M."
                name="lastanme2"
                rules={[{ required: false, message: 'Please input your username!' }]}
                >
                <Input />
                </Form.Item>

                <Form.Item
                label="Email"
                name="email"
                rules={[{ required: true, message: 'Email invalido',type:"email" }]}
                >
                <Input />
                </Form.Item>

                
                <Form.Item
                label="Calle"
                name="street"
                rules={[{ required: true, message: 'Introduce tu calle' }]}
                >
                <Input />
                </Form.Item>

                <Form.Item
                label="Código P."
                name="cp"
                rules={[{ required: true, message: 'Introduce tu código postal' }]}
                >
                <Input />
                </Form.Item>

                <Form.Item
                label="Password"
                name="password"
                rules={[{ required: true, message: 'Introduce tu contraseña' }]}
                >
                <Input.Password />
                </Form.Item>


                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Button type="primary" htmlType="submit">
                    Registrar
                </Button>
                </Form.Item>
            </Form>
            </Space>
        </MainLayout>
    )
}

export default Client