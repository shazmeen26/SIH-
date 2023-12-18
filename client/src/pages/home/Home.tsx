import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ChartBox from "../../components/chartBox/ChartBox";
import PieChartBox from "../../components/pieChartBox/PieChartBox";
import TopBox from "../../components/topBox/TopBox";
import BarChartBox from "../../components/barChartBox/BarChartBox";
import BigChartBox from "../../components/bigChartBox/BigChartBox";
import {
  barChartBoxRelapse,
  chartBoxCenter,
  chartBoxDoctor,
  chartBoxPatient,
  chartBoxSuccesses,
  barChartBoxSessions,
} from "../../data";
import "./home.scss";

const GraphDataFetcher = () => {
  
  
  return null; // This component doesn't render anything, it only logs to the console
};

const Home = () => {
  const [Tpatient,setTpatient]= useState('');
  const [Tcenter,setTcenter]= useState('');
  const [Tdoctor,setTdoctor]= useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8000/graphdata');
        const { totalregisters, totaldoctors, totalcenters } = response.data;

        console.log('Total Registers:', totalregisters);
        setTpatient(totalregisters);
        console.log('Total Doctors:', totaldoctors);
        setTdoctor(totaldoctors);
        console.log('Total Centers:', totalcenters);
        setTcenter(totalcenters);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
  return (
    <div className="home">
      <GraphDataFetcher /> {/* Include GraphDataFetcher here */}
      <div className="box box1">
        <TopBox />
      </div>
      <div className="box box2">
      <ChartBox {...chartBoxPatient}  number= {Tpatient} />

      </div>
      <div className="box box3">
        <ChartBox {...chartBoxCenter} number= {Tcenter} />
      </div>
      <div className="box box4">
        <PieChartBox/>
      </div>
      <div className="box box5">
        <ChartBox {...chartBoxSuccesses} />
      </div>
      <div className="box box6">
        <ChartBox {...chartBoxDoctor} number={Tdoctor} />
      </div>
      <div className="box box7">
        <BigChartBox/>
      </div>
      <div className="box box8">
        <BarChartBox {...barChartBoxSessions} />
      </div>
      <div className="box box9">
        <BarChartBox {...barChartBoxRelapse} />
      </div>
    </div>
  );
};

export default Home;
