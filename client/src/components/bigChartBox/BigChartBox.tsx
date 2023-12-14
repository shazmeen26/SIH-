import {
    Area,
    AreaChart,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
  } from "recharts";
  import "./bigChartBox.scss";
  
  const data = [
    {
      name: "2017",
      alcohol: 4000,
      drugs: 2400,
      tobacco: 2400,
    },
    {
      name: "2018",
      alcohol: 3000,
      drugs: 1398,
      tobacco: 2210,
    },
    {
      name: "2019",
      alcohol: 2000,
      drugs: 9800,
      tobacco: 2290,
    },
    {
      name: "2020",
      alcohol: 2780,
      drugs: 3908,
      tobacco: 2000,
    },
    {
      name: "2021",
      alcohol: 1890,
      drugs: 4800,
      tobacco: 2181,
    },
    {
      name: "2022",
      alcohol: 2390,
      drugs: 3800,
      tobacco: 2500,
    },
    {
      name: "2023",
      alcohol: 3490,
      drugs: 4300,
      tobacco: 2100,
    },
  ];
  
  const BigChartBox = () => {
    return (
      <div className="bigChartBox">
        <h1>Annual Cases</h1>
        <div className="chart">
          <ResponsiveContainer width="99%" height="100%">
            <AreaChart
              data={data}
              margin={{
                top: 10,
                right: 30,
                left: 0,
                bottom: 0,
              }}
            >
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Area
                type="monotone"
                dataKey="tobacco"
                stackId="1"
                stroke="#8884d8"
                fill="#8884d8"
              />
              <Area
                type="monotone"
                dataKey="drugs"
                stackId="1"
                stroke="#82ca9d"
                fill="#82ca9d"
              />
              <Area
                type="monotone"
                dataKey="alcohol"
                stackId="1"
                stroke="#ffc658"
                fill="#ffc658"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    );
  };
  
  export default BigChartBox;