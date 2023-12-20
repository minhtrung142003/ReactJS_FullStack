import React from "react";
import {
    Create,
    Datagrid,
    DeleteButton,
    Edit,
    EditButton,
    List,
    ReferenceInput,
    SelectInput,
    SimpleForm,
    TextField,
    TextInput,
} from "react-admin";
export const listUser=(props)=>(
    <List {...props}>
        <Datagrid style={{ overflowX: "auto"}}>
            <TextField source="id"/>
            <TextField source="username" />     
            <TextField source="fullname" />
            <TextField source="password" />
            <TextField source="role.name" />
            <EditButton/>
            <DeleteButton/>
        </Datagrid>
    </List>
);
export const editUser = (props)=>(
    <Edit {...props}>
        <SimpleForm>
             <TextInput source="username"/>
            <TextInput source="fullname"/>
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
            <TextInput source="username"/>
            <TextInput source="fullname"/>
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

