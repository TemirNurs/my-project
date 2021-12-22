import { Facebook, Instagram, Telegram, WhatsApp, YouTube } from "@mui/icons-material";
import React from "react";
import styled from "styled-components";
import MapsHomeWorkIcon from '@mui/icons-material/MapsHomeWork';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

const Container = styled.div`
  display: flex;
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;
const Logo = styled.h1`

`
const Description = styled.p`
    margin: 20px 0px;
`
const SocialContainer = styled.div`
    display: flex;
`
const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${props=>props.color};
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 20px;
`

const Center = styled.div`
  flex: 1;
  padding: 20px;
`;
const Title =styled.h3`
    margin-bottom: 30px;

`
const List =styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`
const ListItem =styled.li`
    width: 50%;
    margin-bottom: 10px;
`

const Right = styled.div`
  flex: 1;
  padding: 20px;
`;

const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`
const Payment = styled.img`
    width: 50%;
`

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>Sputnik Shop</Logo>
        <Description>
          Sputnik teams across the company have been working directly with
          affected employees and their families, as well as local, state, and
          national organizations. We want to share an update on some of the
          things we’ve been doing and how others can help. It will require a
          long-term effort, and we will work hard to support everyone who has
          been affected by these devastating storms.
        </Description>
        <SocialContainer>
            <SocialIcon color="3B5999">
                <Facebook />
            </SocialIcon>
            <SocialIcon color="E4405F">
                <Instagram />
            </SocialIcon>
            <SocialIcon color="E60023">
                <YouTube />
            </SocialIcon>
            <SocialIcon color="55ACEE">
                <Telegram />
            </SocialIcon>
            <SocialIcon color="075E54">
                <WhatsApp />
            </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
          <Title>
              Useful Links
          </Title>
          <List>
              <ListItem>Home</ListItem>
              <ListItem>Cart</ListItem>
              <ListItem>Man Fasion</ListItem>
              <ListItem>Woman Fasion</ListItem>
              <ListItem>Accessories</ListItem>
              <ListItem>My Account</ListItem>
              <ListItem>Order Tracking</ListItem>
              <ListItem>Wishlist</ListItem>
              <ListItem>Terms</ListItem>
          </List>
      </Center>
      <Right>
          <Title>
              Contact
          </Title>
          <ContactItem>
              <MapsHomeWorkIcon style={{marginRight: "10px"}}/>   169 Jaiyl-Baatyr, Bishkek, Kyrgyzstan 98336
          </ContactItem>
          <ContactItem>
              <PhoneIphoneIcon style={{marginRight: "10px"}}/> +996 555 11 09 97
          </ContactItem>
          <ContactItem>
              <MailOutlineIcon style={{marginRight: "10px"}}/> sputniknurs@gmail.com
          </ContactItem>
          <Payment src="https://www.rhodesgraduation.com/wp-content/uploads/cards.png"/>
      </Right>
    </Container>
  );
};

export default Footer;
