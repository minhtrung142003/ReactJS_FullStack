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
    DateInput,
    ReferenceInput,
    SelectInput,
}from 'react-admin';
export const listToken=(props)=>(
    <List {...props}>
        <Datagrid>
            <TextField source="id"/>
            <TextField source="token"/>
            <TextField source="created_at"/>
            <EditButton/>
        </Datagrid>
    </List>
);
export const editToken = (props)=>(
    <Edit {...props}>
        <SimpleForm>
            <TextInput source="token"/>
            <DateInput source="created_at"/>
            <ReferenceInput
                label="Users"
               source="user.id"
                reference="users"
            >
                <SelectInput optionText="fullname" />
            </ReferenceInput>
        </SimpleForm>
    </Edit>
);
export const createToken = (props)=>(
    <Create {...props}>
        <SimpleForm>
            <TextInput source="token"/>
            <DateInput source="created_at"/>
            <ReferenceInput
                label="Users"
               source="user.id"
                reference="users"
            >
                <SelectInput optionText="fullname" />
            </ReferenceInput>
        </SimpleForm>
    </Create>
);
