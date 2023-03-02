import React from 'react'
import { Typography, Col, Row, Layout } from 'antd'
import './project.css'
import { Helmet } from 'react-helmet';
import ayush1 from './images/ayush1.jpg'
import ayush2 from './images/ayush2.jpg'
import AppHeader2 from '../Common/header2';
import Banner from '../Common/bannerM';
import Kin1 from './images/Kin4.png'
import Kin2 from './images/Kin3.JPG'


const {  Text} = Typography;
const { Header, Content, Footer } = Layout;


const ProjectPage0 = () => {

  return (
  <Layout>
    <Helmet>
        <title>Projects | RouseLab</title>
    </Helmet>

    <div>
      <Header style={{background: '#bfbfbf'}}>
        <AppHeader2 />
      </Header>
    </div>

    
    <Content>
    <Banner/>
    <Row>
      <Col xs={{ span: 2 }} sm={{ span: 3 }} md={{ span: 3 }}></Col>
      <Col xs={{ span: 20 }} sm={{ span: 18 }} md={{ span: 18 }}>

      <div style={{ fontSize: '16px', textAlign: 'left', marginTop:'40px', marginBottom:'30px'}}>Please find below a list of project summaries written by the students to get an idea of what the research is like inside the lab!</div>

      </Col>
      <Col xs={{ span: 2 }} sm={{ span: 3 }} md={{ span: 3 }}></Col>
    </Row>

    <div className="workout-details5">

    <Row>
      <Col xs={{ span: 1 }} sm={{ span: 5 }} md={{ span: 2 }}></Col>
      <Col xs={{ span: 22 }} sm={{ span: 5 }} md={{ span: 20 }}>
      <div style={{ fontSize: '20px', textAlign: 'center', marginTop:'30px'}}>Using Cryo-EM to improve Adenovirus manufacturing</div>
      <div style={{ fontSize: '20px', textAlign: 'center' }}>Ayush</div>
      </Col>
      <Col xs={{ span: 1 }} sm={{ span: 5 }} md={{ span: 2 }}></Col>

      <Col xs={{ span: 1 }} sm={{ span: 2 }} md={{ span: 2 }}></Col>
      <Col xs={{ span: 22 }} sm={{ span: 20 }} md={{ span: 20 }}>

      <div style={{fontSize: '14px',textAlign: 'left' , marginTop:'30px', marginBottom:'20px'}}>Adenoviruses (AdV) are a major viral vector platform. Most popularly, chimpanzee adenovirus has been used in Oxford AstraZeneca’s vaccine against COVID-19, Vaxzevria. AdVs are non-enveloped DNA viruses with icosahedral symmetry. With 252 capsomere units, the outer shell is primarily composed of 3 subunits termed hexons, pentons and fiber proteins. The efficiency of the virus is measured by its ability to infect host cells.</div>
      

      
      </Col>
      <Col xs={{ span: 1 }} sm={{ span: 2 }} md={{ span: 2 }}></Col>



      


      <Col xs={{ span: 1 }} sm={{ span: 2 }} md={{ span: 2 }}></Col>
      <Col xs={{ span: 22 }} sm={{ span: 20 }} md={{ span: 20 }}>
        
      <div style={{fontSize: '14px',textAlign: 'left'}}>It has been empirically observed that the quality of the virion derived from large manufacturing units is poorer when compared to their laboratory counterparts. Notably, several nonstructural and structural proteins are present as incomplete assemblies, oligomers, and monomers. We believe that the differences between quality of manufacturing and laboratory grade viruses stem from the choice of downstream purification method. While laboratories use two cycle CsCl density gradient ultracentrifugation for small scale preparation, industry utilizes anion exchange based (AEX) techniques to scale up production. We validated the decline in particle quality before and after lab based AEX method.</div>
      </Col>
      <Col xs={{ span: 1 }} sm={{ span: 2 }} md={{ span: 2 }}></Col>


      <Col xs={{ span: 0 }} sm={{ span: 3 }} md={{ span: 3}}></Col>
      <Col xs={{ span: 24 }} sm={{ span: 8 }} md={{ span: 8 }}>

        <div>
          <img alt=""
          src={ayush1}/>
        </div>
        <div style={{fontSize: '10px',textAlign: 'center'}}>Fig1 : Adenovirus and the fiber protein</div>

      </Col>

      <Col xs={{ span: 24 }} sm={{ span: 10 }} md={{ span: 10 }}>
        <div>
          <img alt=""
          src={ayush2}/>
        </div>
        <div style={{fontSize: '10px',textAlign: 'center'}}>Fig2: Decline in quality of particle after purification using Anion exchange chromatography</div>

      </Col>
      <Col xs={{ span: 0 }} sm={{ span: 3 }} md={{ span: 3}}></Col>

      


      <Col xs={{ span: 1 }} sm={{ span: 2 }} md={{ span: 2 }}></Col>
      <Col xs={{ span: 22 }} sm={{ span: 20 }} md={{ span: 20 }}>
      <div style={{fontSize: '14px',textAlign: 'left', marginTop:'30px'}}>Subsequently, we compare it with density gradient purified particles. The AEX sample showed characteristic morphology, riddled with incomplete and broken capsids, particle clumping and a large background of protein impurities. Interestingly, we observed a unique thread-like background particle to be abundant in AEX purified samples. We reconstructed this using automated picking from cryoEM micrographs to derive a low resolution structure. While the resolution was too low to conclusively identify the nature of the particle, the signal density displayed a high degree of overlap with the crystal structure of viral fiber protein. This might suggest shedding of fiber protein during the purification process. The infectivity of the virus is strongly associated with the fiber protein and could possibly be the reason behind decline in particle quality. That said, this lead is being pursued with more data.</div>
      </Col>
      <Col xs={{ span: 1 }} sm={{ span: 2 }} md={{ span: 2}}></Col>


      


      <Col xs={{ span: 1 }} sm={{ span: 2 }} md={{ span: 2 }}></Col>
      <Col xs={{ span: 22 }} sm={{ span: 20 }} md={{ span: 20 }}>

      <div style={{fontSize: '14px',textAlign: 'left', marginTop:'20px', marginBottom:'30px'}}>Our research will assist instrumentation designers in developing more robust manufacturing pipelines and equipment.</div>

      </Col>
      <Col xs={{ span: 1 }} sm={{ span: 2 }} md={{ span: 2 }}></Col>






      <Col xs={{ span: 1 }} sm={{ span: 2 }} md={{ span: 2 }}></Col>
      <Col xs={{ span: 22 }} sm={{ span: 20 }} md={{ span: 20 }}>
      <div style={{fontSize: '20px',textAlign: 'left',}} >Reference:</div> 
      </Col>
      <Col xs={{ span: 1 }} sm={{ span: 2 }} md={{ span: 2 }}></Col>

      <Col xs={{ span: 1 }} sm={{ span: 2 }} md={{ span: 2 }}></Col>
      <Col xs={{ span: 1 }} sm={{ span: 1 }} md={{ span: 1 }}><div style={{fontSize: '12px',textAlign: 'left'}}>1.</div></Col>
      <Col xs={{ span: 21 }} sm={{ span: 19 }} md={{ span: 19 }}> 
      <div style={{fontSize: '12px',textAlign: 'left'}}><Text underline ><a rel="noreferrer noopener noreferrer" href="https://www.mdpi.com/1999-4915/6/11/4536" target="_blank">https://www.mdpi.com/1999-4915/6/11/4536</a></Text></div>
      </Col>
      <Col xs={{ span: 1 }} sm={{ span: 2 }} md={{ span: 2 }}></Col>


      <Col xs={{ span: 1 }} sm={{ span: 2 }} md={{ span: 2 }}></Col>
      <Col xs={{ span: 1 }} sm={{ span: 1 }} md={{ span: 1 }}><div style={{fontSize: '12px',textAlign: 'left'}}>2.</div></Col>
      <Col xs={{ span: 21 }} sm={{ span: 19 }} md={{ span: 19 }}> 
      <div style={{fontSize: '12px',textAlign: 'left'}}><Text underline ><a rel="noreferrer noopener noreferrer" href="https://elifesciences.org/articles/78513#s3" target="_blank">https://elifesciences.org/articles/78513#s3</a></Text></div>
      </Col>
      <Col xs={{ span: 1 }} sm={{ span: 2 }} md={{ span: 2 }}></Col>


      <Col xs={{ span: 1 }} sm={{ span: 2 }} md={{ span: 2 }}></Col>
      <Col xs={{ span: 1 }} sm={{ span: 1 }} md={{ span: 1 }}><div style={{fontSize: '12px',textAlign: 'left'}}>3.</div></Col>
      <Col xs={{ span: 21 }} sm={{ span: 19 }} md={{ span: 19 }}> 
      <div style={{fontSize: '12px',textAlign: 'left'}}><Text underline ><a rel="noreferrer noopener noreferrer" href="https://www.sciencedirect.com/science/article/pii/S0264410X19305328?via%3Dihub" target="_blank">https://www.sciencedirect.com/science/article/pii/S0264410X19305328?via%3Dihub</a></Text></div>
      </Col>
      <Col xs={{ span: 1 }} sm={{ span: 2 }} md={{ span: 2 }}></Col>

      <Col xs={{ span: 1 }} sm={{ span: 2 }} md={{ span: 2 }}></Col>
      <Col xs={{ span: 1 }} sm={{ span: 1 }} md={{ span: 1 }}><div style={{fontSize: '12px',textAlign: 'left'}}>4.</div></Col>
      <Col xs={{ span: 21 }} sm={{ span: 19 }} md={{ span: 19 }}> 
      <div style={{fontSize: '12px',textAlign: 'left', marginBottom:'20px'}}><Text underline ><a rel="noreferrer noopener noreferrer" href="https://europepmc.org/articles/pmc8653296/bin/bit-119-48-s001.docx" target="_blank">https://europepmc.org/articles/pmc8653296/bin/bit-119-48-s001.docx</a></Text></div>
      </Col>
      <Col xs={{ span: 1 }} sm={{ span: 2 }} md={{ span: 2 }}></Col>


    </Row>


    
    
    </div>

    <div style={{marginTop:'20px'}}></div>
    <div className="workout-details5">

<Row>
  <Col xs={{ span: 1 }} sm={{ span: 5 }} md={{ span: 2 }}></Col>
  <Col xs={{ span: 22 }} sm={{ span: 5 }} md={{ span: 20 }}>
  <div style={{ fontSize: '20px', textAlign: 'center', marginTop:'30px'}}>A multiscale simulation approach to characterise the glidesome-associated connector (GAC) from <i>Toxoplasma gondii</i></div>
  <div style={{ fontSize: '20px', textAlign: 'center' }}>Kin</div>
  </Col>
  <Col xs={{ span: 1 }} sm={{ span: 5 }} md={{ span: 2 }}></Col>

  <Col xs={{ span: 1 }} sm={{ span: 2 }} md={{ span: 2 }}></Col>
  <Col xs={{ span: 22 }} sm={{ span: 20 }} md={{ span: 20 }}>

  <div style={{fontSize: '14px',textAlign: 'left' , marginTop:'30px', marginBottom:'20px'}}>Apicomplexan parasite is a phylum of parasites which causes a range of diseases in humans and animals, with the most significant being malaria from Plasmodium falciparum (Pf) and toxoplasmosis from Toxoplasma gondii (Tg). These parasites employ a unique form of substrate-dependent locomotion known as gliding motility to invade host cells, egress from the infected cells and cross biological barriers. Gliding motility is powered by an actin-myosin based motor assembly known as glidesome and a proper connection between F-actin within the glidesome and transmembrane surface adhesins is crucial for the process.</div>
  

  
  </Col>
  <Col xs={{ span: 1 }} sm={{ span: 2 }} md={{ span: 2 }}></Col>



  


  <Col xs={{ span: 1 }} sm={{ span: 2 }} md={{ span: 2 }}></Col>
  <Col xs={{ span: 22 }} sm={{ span: 20 }} md={{ span: 20 }}>
    
  <div style={{fontSize: '14px',textAlign: 'left'}}>A new protein, termed the glidesome-associated connector (GAC) has been recently discovered which represents the key molecular link that establish the proper connection needed for the gliding motility. GAC is a highly conserved across the entire Apicomplexa phylum and previous low-resolution small-angle X-ray scattering (SAXS) study of TgGAC presented it as a ~27 nm club-shaped molecule that forms complexes with three binding partners (PA lipid, F-actin and surface adhesin) through different motifs [1]. </div>
  </Col>
  <Col xs={{ span: 1 }} sm={{ span: 2 }} md={{ span: 2 }}></Col>


  <Col xs={{ span: 0 }} sm={{ span: 3 }} md={{ span: 3}}></Col>

  <Col xs={{ span: 3 }} sm={{ span: 3 }} md={{ span: 3}}></Col>
  <Col xs={{ span: 18 }} sm={{ span: 8 }} md={{ span: 8 }}>

    <div style={{marginTop:'10px'}}>
      <img alt=""
      src={Kin1}/>
    </div>
    <div style={{fontSize: '10px',textAlign: 'center'}}>Fig1 : Typical cgMD setup</div>

  </Col>
  <Col xs={{ span: 3 }} sm={{ span: 3 }} md={{ span: 3}}></Col>


  <Col xs={{ span: 0 }} sm={{ span: 3 }} md={{ span: 3}}></Col>
  <Col xs={{ span: 23 }} sm={{ span: 10 }} md={{ span: 10 }}>
  <div style={{marginTop:'30px'}}>
      <img alt=""
      src={Kin2}/>
    </div>
    <div style={{fontSize: '10px',textAlign: 'center', marginTop:'8px'}}>Fig2: cgMD trajectory analysis showing GAC binds PA membrane</div>

  </Col>
  <Col xs={{ span: 1 }} sm={{ span: 3 }} md={{ span: 3}}></Col>
  <Col xs={{ span: 0 }} sm={{ span: 3 }} md={{ span: 3}}></Col>

  


  <Col xs={{ span: 1 }} sm={{ span: 2 }} md={{ span: 2 }}></Col>
  <Col xs={{ span: 22 }} sm={{ span: 20 }} md={{ span: 20 }}>
  <div style={{fontSize: '14px',textAlign: 'left', marginTop:'30px'}}>We have recently obtained a new high resolution crystal structure of TgGAC [2]* which represents a new closed form of GAC. This unexpected closed state poses new questions about how GAC carries out its role. To help answer the question, we used coarse-grained MD (cgMD) and comparative analysis to gain further insight into the closed form of GAC. We also used steered MD, cg2at backmapping and atomistic MD (atMD) to model the open form, which allowed us to fit the SAXS data better. Overall, our result showed that the closed form could be an important functional state.</div>
  </Col>
  <Col xs={{ span: 1 }} sm={{ span: 2 }} md={{ span: 2}}></Col>


  


  <Col xs={{ span: 1 }} sm={{ span: 2 }} md={{ span: 2 }}></Col>
  <Col xs={{ span: 22 }} sm={{ span: 20 }} md={{ span: 20 }}>

  <div style={{fontSize: '14px',textAlign: 'left', marginTop:'20px', marginBottom:'30px'}}>Kin will be presenting a poster about this work in the upcoming <div><Text underline><a rel="noreferrer noopener noreferrer" href="https://www.ccpbiosim.ac.uk/events/upcoming-events/eventdetail/89/18,19,20/5th-manchester-multiscale-conference" target="_blank">5th Manchester Multiscale Conference</a></Text></div> (03 April 2023 – 05 April 2023). Please go say hi if you are also going and are interested!</div>

  </Col>
  <Col xs={{ span: 1 }} sm={{ span: 2 }} md={{ span: 2 }}></Col>






  <Col xs={{ span: 1 }} sm={{ span: 2 }} md={{ span: 2 }}></Col>
  <Col xs={{ span: 22 }} sm={{ span: 20 }} md={{ span: 20 }}>
  <div style={{fontSize: '20px',textAlign: 'left',}} >Reference:</div> 
  </Col>
  <Col xs={{ span: 1 }} sm={{ span: 2 }} md={{ span: 2 }}></Col>

  <Col xs={{ span: 1 }} sm={{ span: 2 }} md={{ span: 2 }}></Col>
  <Col xs={{ span: 1 }} sm={{ span: 1 }} md={{ span: 1 }}><div style={{fontSize: '12px',textAlign: 'left'}}>1. </div></Col>
  <Col xs={{ span: 21 }} sm={{ span: 19 }} md={{ span: 19 }}> 
  <div style={{fontSize: '12px',textAlign: 'left'}}> Kumar, Amit, et al. “Secondary Structure and X-Ray Crystallographic Analysis of the Glideosome-Associated Connector (GAC) from <i>Toxoplasma Gondii</i>.” Crystals., vol. 12, no. 1, 2022, <Text underline ><a rel="noreferrer noopener noreferrer" href="https://doi.org/10.3390/cryst12010110" target="_blank">https://doi.org/10.3390/cryst12010110</a></Text></div>
  </Col>
  <Col xs={{ span: 1 }} sm={{ span: 2 }} md={{ span: 2 }}></Col>


  <Col xs={{ span: 1 }} sm={{ span: 2 }} md={{ span: 2 }}></Col>
  <Col xs={{ span: 1 }} sm={{ span: 1 }} md={{ span: 1 }}><div style={{fontSize: '12px',textAlign: 'left'}}>2. </div></Col>
  <Col xs={{ span: 21 }} sm={{ span: 19 }} md={{ span: 19 }}> 
  <div style={{fontSize: '12px',textAlign: 'left'}}> Kumar, Amit, et al. “Structural and regulatory insights into the glideosome-associated connector from <i>Toxoplasma gondii</i>.”  bioRxiv 2023.01.23.525158, <Text underline ><a rel="noreferrer noopener noreferrer" href="https://doi.org/10.1101/2023.01.23.525158" target="_blank">https://doi.org/10.1101/2023.01.23.525158</a></Text></div>
  </Col>
  <Col xs={{ span: 1 }} sm={{ span: 2 }} md={{ span: 2 }}></Col>


  <Col xs={{ span: 1 }} sm={{ span: 2 }} md={{ span: 2 }}></Col>
  <Col xs={{ span: 1 }} sm={{ span: 1 }} md={{ span: 1 }}><div style={{fontSize: '12px',textAlign: 'left'}}>* </div></Col>
  <Col xs={{ span: 21 }} sm={{ span: 19 }} md={{ span: 19 }}> 
  <div style={{fontSize: '12px',textAlign: 'left', marginBottom:'20px'}}> In collaboration with Prof. Steve Matthews’ group</div>
  </Col>
  <Col xs={{ span: 1 }} sm={{ span: 2 }} md={{ span: 2 }}></Col>

 
</Row>




</div>

    
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

export default ProjectPage0
