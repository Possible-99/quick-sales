import React from 'react';
import { List, Avatar, Typography, InputNumber } from 'antd';

function onChange(value) {
  console.log('changed', value);
}

const {Text} = Typography;

const data = [
    {
      title: 'Durex',
    },
    {
      title: 'Lapiz',
    },
    {
      title: 'Marcador',
    },
    {
      title: 'Goma',
    },
  ];

const SalesList = ({addedItems}) =>{

    return(
        <List
        itemLayout="horizontal"
        dataSource={addedItems}
        style ={{padding:"1rem"}}
        renderItem={item => (
        <List.Item>
            <InputNumber min={1} max={10} value={ item.cantidad}  onChange={onChange} bordered ={false}/>
            <List.Item.Meta
            title={<Text style ={{fontSize:"18px"}}>{item.descripcion}</Text>}
            
            />
            <Text strong ={true}>${item.precio_venta}</Text>
        </List.Item>
        )}
        />
    )
}
export default SalesList;