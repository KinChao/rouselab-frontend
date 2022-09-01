import { useEffect } from "react"
import { useWorkoutsContext } from "../../hooks/useWorkoutsContext2"
import React from 'react'
import { Link } from 'react-router-dom'
import { Typography, Layout, Menu  } from 'antd'
import './news.css'
import WorkoutDetails from "./WorkoutDetails"


// components



const NewsPage = () => {
  const { newss, dispatch } = useWorkoutsContext()
  const { Title } = Typography;
  const { Header, Content, Footer } = Layout;


  useEffect(() => {
    const fetchWorkouts = async () => {
      const response = await fetch('/api/newss')
      const json = await response.json()

      if (response.ok) {
        dispatch({type: 'SET_WORKOUTS', payload: json})
      }
    }

    fetchWorkouts()
  }, [dispatch])

  return (
    <Layout>
    <div>
      <Header 
        style={{
          padding: 12,       
          background: '#bfbfbf',
        }}>
        <Title level={2} style={ {marginLeft: 15}}><Link to='/' style={{textDecoration: 'none', color: 'inherit'}}>RouseLab</Link></Title>
      </Header>
    </div>
    <Content>
    <Menu 
      style={{background: '#F1F1F1' }}
      mode="horizontal">
      <Menu.Item><Link to='/'>Home</Link></Menu.Item>
      <Menu.Item><Link to='/Publication'>Publication</Link></Menu.Item>
      <Menu.Item><Link to='/People'>People</Link></Menu.Item>
      <Menu.Item><Link to='/News'>News</Link></Menu.Item>
      <Menu.Item><Link to='/Contact'>Contact</Link></Menu.Item>
    </Menu>
    <p style={{color:'#F1F1F1'}}>1</p>
    <p style={{color:'#F1F1F1'}}>1</p>
    <div className="left6">
      <div >
        {newss && newss.map(news => (
          <WorkoutDetails news={news} key={news._id} />
        ))}
      </div>
      
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

    
  )
}

export default NewsPage