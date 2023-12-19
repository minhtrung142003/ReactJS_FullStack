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
    
}from "react-admin";
export const listFeedback=(props)=>(
    <List {...props}>
        <Datagrid style={{ overflowX: "auto"}}>
            <TextField source="id"/>
            <TextField source="firstname"/>
            <TextField source="lastname"/>
            <TextField source="email"/>
            <TextField source="phone_number"/>
            <TextField source="subject_name"/>
            <TextField source="note"/>
            <TextField source="status"/>
            <TextField source="created_at"/>
            <TextField source="updated_at"/>
            <EditButton/>
        </Datagrid>
    </List>
);
export const editFeedback = (props)=>(
    <Edit {...props}>
        <SimpleForm>
            <TextInput source="firstname"/>
            <TextInput source="lastname"/>
            <TextInput source="email"/>
            <NumberInput source="phone_number"/>
            <TextInput source="subject_name"/>
            <TextInput source="note"/>
            <NumberInput source="status"/>
            <DateInput source="created_at"/>
            <DateInput source="updated_at"/>
        
        </SimpleForm>
    </Edit>
);
export const createFeedback = (props)=>(
    <Create {...props}>
        <SimpleForm>
            <TextInput source="firstname"/>
            <TextInput source="lastname"/>
            <TextInput source="email"/>
            <NumberInput source="phone_number"/>
            <TextInput source="subject_name"/>
            <TextInput source="note"/>
            <NumberInput source="status"/>
            <DateInput source="created_at"/>
            <DateInput source="updated_at"/>
        
        </SimpleForm>
    </Create>
);

