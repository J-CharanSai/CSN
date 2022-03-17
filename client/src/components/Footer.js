import React from "react";
import {
    Box,
    Container,
    Row,
    Column,
    FooterLink,
    Heading,
} from "./FooterStyles";

const Footer = () => {
    return (
        <Box>
            <Container>
                <Row>
                    <Column>
                        <Heading>About Us</Heading>
                        <FooterLink href="#">Aim</FooterLink>
                        <FooterLink href="#">Vision</FooterLink>
                    </Column>
                    <Column>
                        <Heading>Contact Us</Heading>
                        <FooterLink href="#">Contact Us</FooterLink>
                    </Column>
                    <Column>
                        <Heading>Social Media</Heading>
                        <FooterLink href="#" >
                            <img src="https://cdn.exclaimer.com/Handbook%20Images/facebook-icon_32x32.png" />
                        </FooterLink>
                        <FooterLink href="#" >
                            <img src="https://cdn.exclaimer.com/Handbook%20Images/twitter-icon_32x32.png" />
                        </FooterLink>
                        <FooterLink href="#" >
                            <img src="https://cdn.exclaimer.com/Handbook%20Images/instagram-icon_32x32.png" />
                        </FooterLink>
                    </Column>
                </Row>
            </Container>
        </Box>
    );
};
export default Footer;