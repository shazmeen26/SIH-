import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import "./pieChartBox.scss";
import { useEffect, useState } from "react";
import axios from "axios";


interface SubstanceCounts {
  alcohol: number;
  drugs: number;
  tobacco: number;
  other: number;
}

const PieChartBox: React.FC = () => {
  const [piedata, setPiedata] = useState<SubstanceCounts | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<SubstanceCounts>('http://localhost:8000/substanceCounts');
        setPiedata(response.data);
        console.log(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const data = [
    { name: "Alcohol", value: piedata?.alcohol ?? 0, color: "#0088FE" },
    { name: "Drugs", value: piedata?.drugs ?? 0, color: "#00C49F" },
    { name: "Tobacco", value: piedata?.tobacco ?? 0, color: "#FFBB28" },
    { name: "Other", value: piedata?.other ?? 0, color: "#FF8042" },
  ];

  return (
    <div className="pieChartBox">
      <h1>Substance Type</h1>
      <div className="chart">
        <ResponsiveContainer width="99%" height={300}>
          <PieChart>
            <Tooltip
              contentStyle={{ background: "white", borderRadius: "5px" }}
            />
            <Pie
              data={data}
              innerRadius={"70%"}
              outerRadius={"90%"}
              paddingAngle={5}
              dataKey="value"
            >
              {data.map((item) => (
                <Cell key={item.name} fill={item.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className="options">
        {data.map((item) => (
          <div className="option" key={item.name}>
            <div className="title">
              <div className="dot" style={{ backgroundColor: item.color }} />
              <span>{item.name}</span>
            </div>
            <span>{item.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PieChartBox;