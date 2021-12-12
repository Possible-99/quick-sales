import React from 'react';
import axios from 'axios';
import MainLayout from '../../components/MainLayout/MainLayout.component';
import { Form, Input, Button,Typography, Space, message } from 'antd';
import { formatCountdown } from 'antd/lib/statistic/utils';
const {Title , Text} = Typography


const Client = () =>{
    const [form] = Form.useForm();
    const submitRegister = (values) => {
        
        var url = "/api/client"
        var data = values;
        axios.post(url , data)
        .then(response =>{
            message.success("Se registro exitosamente")
        })
        .catch(error =>{
            message.error("Intentalo mas tarde")
        })
        .finally(() =>{
            form.resetFields();
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
                form={form}
            >
                <Form.Item
                label="Nombre"
                name="name"
                rules={[{ required: true, message: 'Porfavor introduce tu nombre' }]}
                >
                <Input maxLength={40} />
                </Form.Item>
                <Form.Item
                label="Apellido P."
                name="lastName"
                rules={[{ required: true, message: 'Porfavor introduce tu apellido paterno' }]}
                >
                <Input maxLength={40} />
                </Form.Item>

                <Form.Item
                label="Apelldio M."
                name="lastName2"
                rules={[{ required: false, message: 'Porfavor introduce tu apellido materno' }]}
                >
                <Input maxLength={40}/>
                </Form.Item>

                <Form.Item
                label="RFC"
                name="rfc"
                rules={[{ required: true, message: 'Porfavor introduce tu apellido materno'  }]}
                >
                <Input maxLength={13} />
                </Form.Item>

                
                <Form.Item
                label="Calle"
                name="street"
                rules={[{ required: true, message: 'Introduce tu calle' }]}
                >
                <Input maxLength={40} />
                </Form.Item>

                <Form.Item
                label="Colonia"
                name="colony"
                rules={[{ required: true, message: 'Introduce tu calle' }]}
                >
                <Input maxLength={30} />
                </Form.Item>

                <Form.Item
                label="Estado"
                name="state"
                rules={[{ required: true, message: 'Introduce el Estado' }]}
                >
                <Input maxLength={20} />
                </Form.Item>

                <Form.Item
                label="Código P."
                name="cp"
                rules={[{ required: true, message: 'Introduce tu código postal' }]}
                >
                <Input maxLength={5}/>
                </Form.Item>

                <Form.Item
                label="Numero"
                name="number"
                rules={[{ required: true, message: 'Introduce tu numero celular' }]}
                >
                <Input maxLength={10}/>
                </Form.Item>

                <Form.Item
                label="Correo"
                name="mail"
                rules={[{ required: true, message: 'Introduce tu numero correo', type :'email', }]}
                >
                <Input maxLength={30}/>
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