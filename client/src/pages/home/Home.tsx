import BarChartBox from "../../components/barChartBox/BarChartBox";
import BigChartBox from "../../components/bigChartBox/BigChartBox";

import ChartBox from "../../components/chartBox/ChartBox";
import PieChartBox from "../../components/pieChartBox/PieChartBox";
import TopBox from "../../components/topBox/TopBox";
import {
  barChartBoxRelapse,
  chartBoxCenter,
  chartBoxDoctor,
  chartBoxPatient,
  chartBoxSuccesses,
  barChartBoxSessions,
} from "../../data";
import "./home.scss";

const Home = () => {
  return (
    <div className="home">
      <div className="box box1">
        <TopBox />
      </div>
      <div className="box box2">
        <ChartBox {...chartBoxPatient} />
      </div>
      <div className="box box3">
        <ChartBox {...chartBoxCenter} />
      </div>
      <div className="box box4">
        <PieChartBox/>
      </div>
      <div className="box box5">
        <ChartBox {...chartBoxSuccesses} />
      </div>
      <div className="box box6">
        <ChartBox {...chartBoxDoctor} />
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