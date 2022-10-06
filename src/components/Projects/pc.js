import React from 'react'
import { Typography, Col, Row, Layout } from 'antd'
import './project.css'
import AppHeader from '../Common/header'
import { Helmet } from 'react-helmet';
import ayush1 from './images/ayush1.jpg'
import ayush2 from './images/ayush2.jpg'



const {  Text} = Typography;
const { Header, Content, Footer } = Layout;


const ProjectPage1 = () => {

  return (
  <Layout>
    <Helmet>
        <title>Projects | RouseLab</title>
    </Helmet>

    <div>
      <Header style={{background: '#bfbfbf'}}>
        <AppHeader />
      </Header>
    </div>

    
    <Content>
    <Row>
      <Col xs={{ span: 2 }} sm={{ span: 3 }} md={{ span: 3 }}></Col>
      <Col xs={{ span: 20 }} sm={{ span: 18 }} md={{ span: 18 }}>

      <div style={{ fontSize: '25px', textAlign: 'center', marginTop:'40px', marginBottom:'10px' }}>Please find below a list of project summaries written by the students to get an idea of what the research is like inside the lab!</div>

      </Col>
      <Col xs={{ span: 2 }} sm={{ span: 3 }} md={{ span: 3 }}></Col>
    </Row>

    <div className="workout-details4">

    <Row>
      <Col xs={{ span: 1 }} sm={{ span: 5 }} md={{ span: 2 }}></Col>
      <Col xs={{ span: 22 }} sm={{ span: 5 }} md={{ span: 20 }}>
      <div style={{ fontSize: '25px', textAlign: 'center', marginTop:'30px' }}>Using Cryo-EM to improve Adenovirus manufacturing - Ayush</div>
      </Col>
      <Col xs={{ span: 1 }} sm={{ span: 5 }} md={{ span: 2 }}></Col>

      <Col xs={{ span: 1 }} sm={{ span: 2 }} md={{ span: 2 }}></Col>
      <Col xs={{ span: 22 }} sm={{ span: 20 }} md={{ span: 20 }}>

      <div style={{fontSize: '18px',textAlign: 'left', marginTop:'20px'}}>Adenoviruses (AdV) are a major viral vector platform. Most popularly, chimpanzee adenovirus has been used in Oxford AstraZeneca’s vaccine against COVID-19, Vaxzevria. AdVs are non-enveloped DNA viruses with icosahedral symmetry. With 252 capsomere units, the outer shell is primarily composed of 3 subunits termed hexons, pentons and fiber proteins. The efficiency of the virus is measured by its ability to infect host cells.</div>
      

      
      </Col>
      <Col xs={{ span: 1 }} sm={{ span: 2 }} md={{ span: 2 }}></Col>



      


      <Col xs={{ span: 1 }} sm={{ span: 2 }} md={{ span: 2 }}></Col>
      <Col xs={{ span: 22 }} sm={{ span: 20 }} md={{ span: 20 }}>
        
      <div style={{fontSize: '18px',textAlign: 'left', marginTop:'20px'}}>It has been empirically observed that the quality of the virion derived from large manufacturing units is poorer when compared to their laboratory counterparts. Notably, several nonstructural and structural proteins are present as incomplete assemblies, oligomers, and monomers. We believe that the differences between quality of manufacturing and laboratory grade viruses stem from the choice of downstream purification method. While laboratories use two cycle CsCl density gradient ultracentrifugation for small scale preparation, industry utilizes anion exchange based (AEX) techniques to scale up production. We validated the decline in particle quality before and after lab based AEX method.</div>
      </Col>
      <Col xs={{ span: 1 }} sm={{ span: 2 }} md={{ span: 2 }}></Col>


      <Col xs={{ span: 0 }} sm={{ span: 3 }} md={{ span: 3}}></Col>
      <Col xs={{ span: 24 }} sm={{ span: 8 }} md={{ span: 8 }}>

        <div style={{marginTop:'25px'}}>
          <img alt=""
          src={ayush1}/>
        </div>
        <div style={{fontSize: '12px',textAlign: 'center', marginTop:'20px', marginLeft:'-90px'}}>Fig1 : Adenovirus and the fiber protein</div>

      </Col>

      <Col xs={{ span: 24 }} sm={{ span: 10 }} md={{ span: 10 }}>
        <div>
          <img alt=""
          src={ayush2}/>
        </div>
        <div style={{fontSize: '12px',textAlign: 'center', marginTop:'10px'}}>Fig2: Decline in quality of particle after purification using Anion exchange chromatography</div>

      </Col>
      <Col xs={{ span: 0 }} sm={{ span: 3 }} md={{ span: 3}}></Col>

      


      <Col xs={{ span: 1 }} sm={{ span: 2 }} md={{ span: 2 }}></Col>
      <Col xs={{ span: 22 }} sm={{ span: 20 }} md={{ span: 20 }}>
      <div style={{fontSize: '18px',textAlign: 'left', marginTop:'40px'}}>Subsequently, we compare it with density gradient purified particles. The AEX sample showed characteristic morphology, riddled with incomplete and broken capsids, particle clumping and a large background of protein impurities. Interestingly, we observed a unique thread-like background particle to be abundant in AEX purified samples. We reconstructed this using automated picking from cryoEM micrographs to derive a low resolution structure. While the resolution was too low to conclusively identify the nature of the particle, the signal density displayed a high degree of overlap with the crystal structure of viral fiber protein. This might suggest shedding of fiber protein during the purification process. The infectivity of the virus is strongly associated with the fiber protein and could possibly be the reason behind decline in particle quality. That said, this lead is being pursued with more data.</div>
      </Col>
      <Col xs={{ span: 1 }} sm={{ span: 2 }} md={{ span: 2}}></Col>


      


      <Col xs={{ span: 1 }} sm={{ span: 2 }} md={{ span: 2 }}></Col>
      <Col xs={{ span: 22 }} sm={{ span: 20 }} md={{ span: 20 }}>

      <div style={{fontSize: '18px',textAlign: 'left', marginTop:'20px', marginBottom:'20px'}}>Our research will assist instrumentation designers in developing more robust manufacturing pipelines and equipment.</div>

      </Col>
      <Col xs={{ span: 1 }} sm={{ span: 2 }} md={{ span: 2 }}></Col>


      <Col xs={{ span: 1 }} sm={{ span: 2 }} md={{ span: 2 }}></Col>
      <Col xs={{ span: 22 }} sm={{ span: 20 }} md={{ span: 20 }}>
      <div style={{fontSize: '24px',textAlign: 'left',}} >Reference:</div>
      
      <div><Text underline><a rel="noreferrer noopener noreferrer" href="https://www.mdpi.com/1999-4915/6/11/4536" target="_blank">1. https://www.mdpi.com/1999-4915/6/11/4536</a></Text></div>
      <div><Text underline><a rel="noreferrer noopener noreferrer" href="https://elifesciences.org/articles/78513#s3" target="_blank">2. https://elifesciences.org/articles/78513#s3</a></Text></div>
      <div><Text underline><a rel="noreferrer noopener noreferrer" href="https://www.sciencedirect.com/science/article/pii/S0264410X19305328?via%3Dihub" target="_blank">3. https://www.sciencedirect.com/science/article/pii/S0264410X19305328?via%3Dihub</a></Text></div>
      <div style={{marginBottom:'40px'}}><Text underline><a rel="noreferrer noopener noreferrer" href="https://europepmc.org/articles/pmc8653296/bin/bit-119-48-s001.docx" target="_blank">4. https://europepmc.org/articles/pmc8653296/bin/bit-119-48-s001.docx</a></Text></div>

      </Col>
      <Col xs={{ span: 1 }} sm={{ span: 2 }} md={{ span: 2 }}></Col>

    </Row>
    
    </div>


    <p style={{color:'#f0f2f5'}}>1</p>

    
    </Content>
    <Footer
      style={{
        textAlign: 'center',
      }}
    >
      ©2022 ROUSELAB
    </Footer>
  </Layout>

)}

export default ProjectPage1
