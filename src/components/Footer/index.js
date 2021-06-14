import React from 'react'
import { animateScroll as scroll} from 'react-scroll';
import {
    FaFacebook,
    FaInstagram,
    FaTwitter,
    FaYoutube,
    FaLinkedin
} from 'react-icons/fa'
import { 
    FooterContainer, 
    FooterWrap,
    FooterLinksContainer, 
    FooterLinkWrapper, 
    FooterLinkItems, 
    FooterLinkTitle, 
    FooterLink,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    WebSiteRights,
    SocialIcons,
    SocialIconLink
} from './FooterElements' 

const Footer = () => {

    const toggleHome = () =>{
        scroll.scrollToTop();
    };


    return (
       <FooterContainer>
           <FooterWrap>
               <FooterLinksContainer>
                   <FooterLinkWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>About us</FooterLinkTitle>
                            <FooterLink to="/">About us</FooterLink>
                            <FooterLink to="/">How it works</FooterLink>
                            <FooterLink to="/">New</FooterLink>
                            <FooterLink to="/">Careers</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle> Contact Us</FooterLinkTitle>
                            <FooterLink to="/">Contact</FooterLink>
                            <FooterLink to="/">Support</FooterLink>
                            <FooterLink to="/">Destinations</FooterLink>
                            <FooterLink to="/">Sponsorships</FooterLink>
                        </FooterLinkItems>
                   </FooterLinkWrapper>
                   <FooterLinkWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>Videos</FooterLinkTitle>
                            <FooterLink to="/">Submit Video</FooterLink>
                            <FooterLink to="/">Ambassadors</FooterLink>
                            <FooterLink to="/">Agency</FooterLink>
                            <FooterLink to="/">Influencer</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>About us</FooterLinkTitle>
                            <FooterLink to="/">Instagran</FooterLink>
                            <FooterLink to="/">Facebook</FooterLink>
                            <FooterLink to="/">Youtube</FooterLink>
                            <FooterLink to="/">Twitter</FooterLink>
                        </FooterLinkItems>
                   </FooterLinkWrapper>
               </FooterLinksContainer>
                <SocialMedia>
                    
                    <SocialMediaWrap>
                        <SocialLogo to='/' onClick={toggleHome}> Banking </SocialLogo>
                        <WebSiteRights> 
                            Banking {new Date().getFullYear()} all rights reserved    
                        </WebSiteRights>
                        <SocialIcons> 
                            <SocialIconLink href="/" target="_blank" aria-label=" facebook">
                                    <FaFacebook />
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria-label="Instagram">
                                    <FaInstagram />
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria-label="Twitter">
                                    <FaTwitter />
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria-label="Youtube">
                                    <FaYoutube />
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria-label="Linkedin">
                                    <FaLinkedin />
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
           </FooterWrap>    
       </FooterContainer>
    )
}

export default Footer

