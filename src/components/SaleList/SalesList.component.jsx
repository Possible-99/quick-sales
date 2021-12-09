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

const SalesList = () =>{

    return(
        <List
        itemLayout="horizontal"
        dataSource={data}
        style ={{padding:"1rem"}}
        renderItem={item => (
        <List.Item>
            <InputNumber min={1} max={10} defaultValue={3} onChange={onChange} bordered ={false}/>
            <List.Item.Meta
            title={<Text style ={{fontSize:"18px"}}>{item.title}</Text>}
            
            />
            <Text strong ={true}>$200</Text>
        </List.Item>
        )}
        />
    )
}
export default SalesList;