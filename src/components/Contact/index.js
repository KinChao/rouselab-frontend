import React from 'react'
import './contact.css'
import { layoutGenerator } from 'react-break';
import ContactPage0 from './mobile'
import ContactPage1 from './pc'



const layout = layoutGenerator({
  mobile: 0,
  phablet: 1014,
  tablet: 1015,
  desktop: 1016,
});

const OnAtLeastTablet = layout.isAtLeast('tablet');
const OnAtMostPhablet = layout.isAtMost('phablet');

const ContactPage = () => (
  <div>
  
    <OnAtMostPhablet>
      <ContactPage0/>
    </OnAtMostPhablet>

    <OnAtLeastTablet>
      <ContactPage1/>
    </OnAtLeastTablet>

  </div>
);

export default ContactPage
