import { useEffect } from "react"
import { useWorkoutsContext } from "../../hooks/useWorkoutsContext2"
import React from 'react'
import {  Layout  } from 'antd'
import './news.css'
import WorkoutDetailsm from "./WorkoutDetailsm"
import AppHeader2 from "../Common/header2"
import { Helmet } from 'react-helmet';

// components



const NewsPage0 = () => {

  const { newss, dispatch } = useWorkoutsContext()

  const { Header, Content, Footer } = Layout;


  useEffect(() => {
    const fetchWorkouts = async () => {
      const response = await fetch('https://rouselab.herokuapp.com/api/newss/')
      const json = await response.json()

      if (response.ok) {
        dispatch({type: 'SET_WORKOUTS', payload: json})
      }
    }

    fetchWorkouts()
  }, [dispatch])

  return (
    
    <Layout>
      <Helmet>
        <title>News | RouseLab</title>
    </Helmet>
    <div>
      <Header style={{background: '#bfbfbf'}}>
        <AppHeader2 />
      </Header>
    </div>
    <Content>
    


    <div className="left6">
      <div >
        {newss && newss.map(news => (
          <WorkoutDetailsm news={news} key={news._id} />
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

export default NewsPage0