import { FiMapPin } from 'react-icons/fi'
import { FiPhoneCall } from 'react-icons/fi'
import { FiMail } from 'react-icons/fi'

export const footerInformation = [
  {
    title_dictionary: 'footer.information.items.faq',
    icon: null,
    link: '/faq',
  },
  {
    title_dictionary: 'footer.information.items.about',
    icon: null,
    link: '/about',
  },
  {
    title_dictionary: 'footer.information.items.team',
    icon: null,
    link: '/about#teams',
  },
]

export const footerServices = [
  {
    title_dictionary: 'footer.services.items.hardware_supply',
    icon: null,
    link: '/solutions#it',
  },
  {
    title_dictionary: 'footer.services.items.cctv',
    icon: null,
    link: '/solutions#cctv',
  },
  {
    title_dictionary: 'footer.services.items.network_security',
    icon: null,
    link: '/solutions#network_security',
  },
  {
    title_dictionary: 'footer.services.items.mobile_app_development',
    icon: null,
    link: '/solutions#mobile_app_development',
  },
  {
    title_dictionary: 'footer.services.items.web_development',
    icon: null,
    link: '/solutions#web_development',
  },
  {
    title_dictionary: 'footer.services.items.iot',
    icon: null,
    link: '/solutions#iot',
  },
  {
    title_dictionary: 'footer.services.items.server_and_data_center',
    icon: null,
    link: '/solutions#server_and_data_center',
  },
  {
    title_dictionary: 'footer.services.items.others',
    icon: null,
    link: '/solutions',
  },
]

export const footerContactInfo = [
  {
    content:
      'Jl. Gondang No. 23 RT 002/005 Cimuning Kec Mustika Jaya Kota Bekasi.',
    id: 'address',
    link: 'https://goo.gl/maps/kNWQ1ekYq8obuGWRA',
    icon: FiMapPin,
  },
  {
    content: '+62 821 5813 3307',
    id: 'phone_number',
    link: 'https://wa.me/6282158133307?text=Hi%20Xtra%20team!',
    icon: FiPhoneCall,
  },
  {
    content: '+info@x-teknologi.com',
    id: 'phone_number',
    link: 'mailto:info@x-teknologi.com',
    icon: FiMail,
  },
]

export const footerSocialMedia = [
  {
    id: 'twitter',
    link: 'https://twitter.com/xtrateknologi',
    imgSrc: '/static/images/social-media/twitter.svg',
    imgAlt: 'twitter logo',
  },
  {
    id: 'facebook',
    link: 'https://facebook.com/xtrateknologi',
    imgSrc: '/static/images/social-media/facebook.svg',
    imgAlt: 'facebook logo',
  },
  {
    id: 'google+',
    link: 'https://google.com/xtrateknologi',
    imgSrc: '/static/images/social-media/google.svg',
    imgAlt: 'google+ logo',
  },
  {
    id: 'linkedin',
    link: 'https://linkedin.com/xtrateknologi',
    imgSrc: '/static/images/social-media/linkedin.svg',
    imgAlt: 'linkedin logo',
  },
  {
    id: 'instagram',
    link: 'https://instagram.com/xtrateknologi',
    imgSrc: '/static/images/social-media/instagram.svg',
    imgAlt: 'instagram logo',
  },
]
