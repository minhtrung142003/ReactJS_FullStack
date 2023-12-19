import React from 'react';
import{
    List,
    Datagrid,
    TextField,
    Edit,
    SimpleForm,
    EditButton,
    TextInput,
    Create,
}from 'react-admin';
export const listRole=(props)=>(
    <List {...props}>
        <Datagrid>
            <TextField source="id"/>
            <TextField source="name"/>
            <EditButton/>
        </Datagrid>
    </List>
);
export const editRole = (props)=>(
    <Edit {...props}>
        <SimpleForm>
            <TextInput source="name"/>
        </SimpleForm>
    </Edit>
);
export const createRole = (props)=>(
    <Create {...props}>
        <SimpleForm>
            <TextInput source="name"/>
        </SimpleForm>
    </Create>
);
