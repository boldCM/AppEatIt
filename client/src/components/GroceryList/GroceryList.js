import React from "react";
import styled from "styled-components/macro";
import IconButton from "../BottomNav/IconButton";
import Checkbox from "../../assets/checkbox.svg";
import CheckboxChecked from "../../assets/checkboxChecked.svg";

const ContainerGroceries = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
`;

const ListItem = styled.p`
  display: inline-flex;
  margin: 0;
`;

const GroceryList = () => {
  return (
    <ContainerGroceries>
      <ListItem>
        <IconButton iconSrc={Checkbox} iconAlt="Checkbox" />
        Kaffee
      </ListItem>
      <ListItem>
        <IconButton iconSrc={CheckboxChecked} iconAlt="Checkbox" />
        Klopapier
      </ListItem>
      <ListItem>
        <IconButton iconSrc={CheckboxChecked} iconAlt="Checkbox" />
        Klopapier
      </ListItem>
      <ListItem>
        <IconButton iconSrc={CheckboxChecked} iconAlt="Checkbox" />
        Klopapier
      </ListItem>
      <ListItem>
        <IconButton iconSrc={CheckboxChecked} iconAlt="Checkbox" />
        Klopapier
      </ListItem>
      <ListItem>
        <IconButton iconSrc={CheckboxChecked} iconAlt="Checkbox" />
        Klopapier
      </ListItem>
      <ListItem>
        <IconButton iconSrc={CheckboxChecked} iconAlt="Checkbox" />
        Klopapier
      </ListItem>
      <ListItem>
        <IconButton iconSrc={CheckboxChecked} iconAlt="Checkbox" />
        Klopapier
      </ListItem>
      <ListItem>
        <IconButton iconSrc={CheckboxChecked} iconAlt="Checkbox" />
        Klopapier
      </ListItem>
      <ListItem>
        <IconButton iconSrc={CheckboxChecked} iconAlt="Checkbox" />
        Klopapier
      </ListItem>
      <ListItem>
        <IconButton iconSrc={CheckboxChecked} iconAlt="Checkbox" />
        Klopapier
      </ListItem>
      <ListItem>
        <IconButton iconSrc={CheckboxChecked} iconAlt="Checkbox" />
        Klopapier
      </ListItem>
      <ListItem>
        <IconButton iconSrc={CheckboxChecked} iconAlt="Checkbox" />
        Klopapier
      </ListItem>
      <ListItem>
        <IconButton iconSrc={CheckboxChecked} iconAlt="Checkbox" />
        Klopapier
      </ListItem>
      <ListItem>
        <IconButton iconSrc={CheckboxChecked} iconAlt="Checkbox" />
        Klopapier
      </ListItem>
      <ListItem>
        <IconButton iconSrc={CheckboxChecked} iconAlt="Checkbox" />
        Klopapier
      </ListItem>
      <ListItem>
        <IconButton iconSrc={CheckboxChecked} iconAlt="Checkbox" />
        Klopapier
      </ListItem>
      <ListItem>
        <IconButton iconSrc={CheckboxChecked} iconAlt="Checkbox" />
        Klopapier
      </ListItem>
      <ListItem>
        <IconButton iconSrc={CheckboxChecked} iconAlt="Checkbox" />
        Klopapier
      </ListItem>
      <ListItem>
        <IconButton iconSrc={CheckboxChecked} iconAlt="Checkbox" />
        Klopapier
      </ListItem>
      <ListItem>
        <IconButton iconSrc={CheckboxChecked} iconAlt="Checkbox" />
        Klopapier
      </ListItem>
    </ContainerGroceries>
  );
};

export default GroceryList;
