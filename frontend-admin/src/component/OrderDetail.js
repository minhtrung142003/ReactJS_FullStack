import React from 'react';
import{
    List,
    Datagrid,
    TextField,
    Edit,
    SimpleForm,
    EditButton,
    Create,
    ReferenceInput,
    SelectInput,
    NumberInput,
}from 'react-admin';
export const listOrderDetail=(props)=>(
    <List {...props}>
        <Datagrid>
            <TextField source="id"/>
            <TextField source="price"/>
            <TextField source="num"/>
            <TextField source="total_money"/>
            <TextField source="product.title"/>
            <TextField source="orders.fullname"/>

            <EditButton/>
        </Datagrid>
    </List>
);
export const editOrderDetail = (props)=>(
    <Edit {...props}>
        <SimpleForm>
            <NumberInput source="price"/>
            <NumberInput source="num"/>
            <NumberInput source="total_money"/>
            <ReferenceInput
                label="product"
               source="product.id"
                reference="products"
            >
                <SelectInput optionText="title" />
            </ReferenceInput>
            <ReferenceInput
                label="orders"
               source="orders.id"
                reference="orderss"
            >
                <SelectInput optionText="fullname" />
            </ReferenceInput>
        </SimpleForm>
    </Edit>
);
export const createOrderDetail = (props)=>(
    <Create {...props}>
        <SimpleForm>
            <NumberInput source="price"/>
            <NumberInput source="num"/>
            <NumberInput source="total_money"/>
            <ReferenceInput
                label="product"
               source="product.id"
                reference="products"
            >
                <SelectInput optionText="title" />
            </ReferenceInput>
            <ReferenceInput
                label="orders"
               source="orders.id"
                reference="orderss"
            >
                <SelectInput optionText="fullname" />
            </ReferenceInput>
         
        </SimpleForm>
    </Create>
);
