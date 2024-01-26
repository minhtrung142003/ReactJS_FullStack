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
            <TextField source="address"/>
           
            <TextField source="password"/>        
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
            <TextInput source="address"/>
            <TextInput source="password"/>
          
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
        <TextInput source="fullname"/>
            <TextInput source="email"/>          
            <TextInput source="address"/>
            <TextInput source="password"/>
           
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

