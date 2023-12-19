import React from "react";
import{
    List,
    Datagrid,
    TextField,
    Edit,
    SimpleForm,
    EditButton,
    TextInput,
    NumberInput,
    DateInput,
    Create,
    ReferenceInput,
    SelectInput,
}from "react-admin";
export const listUser=(props)=>(
    <List {...props}>
        <Datagrid style={{ overflowX: "auto"}}>
            <TextField source="id"/>
            <TextField source="fullname"/>
            <TextField source="email"/>
            <TextField source="phone_number"/>
            <TextField source="address"/>
            <TextField source="password"/>
            <TextField source="created_at"/>
            <TextField source="updated_at"/>
            <TextField source="deleted"/>
            <TextField source="role.name"/>
            <EditButton/>
        </Datagrid>
    </List>
);
export const editUser = (props)=>(
    <Edit {...props}>
        <SimpleForm>
            <TextInput source="fullname"/>
            <TextInput source="email"/>
            <NumberInput source="phone-number"/>
            <TextInput source="address"/>
            <NumberInput source="password"/>
            <DateInput source="created_at"/>
            <DateInput source="updated_at"/>
            <NumberInput source="deleted"/>
            <ReferenceInput
                label="Role"
               source="role.id"
                reference="roles"
            >
                <SelectInput optionText="name" />
            </ReferenceInput>
            
        </SimpleForm>
    </Edit>
);
export const createUser = (props)=>(
    <Create {...props}>
        <SimpleForm>
            <TextInput source="address"/>
            <TextInput source="email"/>
            <TextInput source="fullname"/>
            <NumberInput source="password"/>
            <NumberInput source="phone-number"/>
            <DateInput source="created_at"/>
            <DateInput source="updated_at"/>
            <NumberInput source="deleted"/>
            <ReferenceInput
                label="Role"
                source="role.id"
                reference="roles"
            >
                <SelectInput optionText="name"/>
                </ReferenceInput> 
         
        </SimpleForm>
    </Create>
);

