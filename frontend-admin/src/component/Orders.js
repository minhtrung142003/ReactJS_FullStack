import React from "react";
import {
    List,
    Datagrid,
    TextField,
    Edit,SimpleForm,
    EditButton,
    TextInput,
    NumberInput,
    DateInput,
    ReferenceInput,
    SelectInput,
    Create,
} from "react-admin";
export const listOrders =(props)=>(
    <List {...props}>
        <Datagrid style={{overflowX: "auto"}}>
        <TextField source="id" />
            <TextField source="fullname" />
            <TextField source="email" />
            <TextField source="phone_number" />
            <TextField source="address" />
            <TextField source="note" />
            {/* <TextField source="order_data" /> */}
            <TextField source="status" />
            <TextField source="total_money" />
            <TextField source="user.fullname" />
            <EditButton/>
        </Datagrid>
    </List>
);
export const editOrders =(props)=>(
    <Edit {...props}>
         <SimpleForm style={{overflowX: "auto"}}>
   
            <TextInput source="fullname" />
            <NumberInput source="phone_number" />
            <NumberInput source="discount" />
            <TextInput source="fullname" />
            <TextInput source="address" />
            <TextInput source="note" />
            <TextInput source="email" />
            <DateInput source="order_data" />
            <TextInput source="status" />
            <NumberInput source="total_money" />
            
            <ReferenceInput
                lable="User"
                source="user.id"
                reference="users"
                >
                <SelectInput optionText="fullname"/>
            </ReferenceInput>
            
          
        </SimpleForm>
    </Edit>
);
export const createOrders =(props)=>(
    <Create {...props}>
        <SimpleForm style={{overflowX: "auto"}}>
        {/* <TextInput source="id" /> */}
            <TextInput source="fullname" />
            <NumberInput source="phone_number" />
            <NumberInput source="discount" />
            <TextInput source="fullname" />
            <TextInput source="address" />
            <TextInput source="note" />
            <TextInput source="email" />
            <DateInput source="order_data" />
            <TextInput source="status" />
            <NumberInput source="total_money" />
            <ReferenceInput
                lable="User"
                source="user.id"
                reference="users"
                >
                <SelectInput optionText="fullname"/>
            </ReferenceInput>
            
          
        </SimpleForm>
    </Create>
)