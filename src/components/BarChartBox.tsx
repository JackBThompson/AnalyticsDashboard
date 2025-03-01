import { Bar, BarChart, ResponsiveContainer, Tooltip } from "recharts";
import "../styles/barchartbox.scss";

type Props = {
    color: string;
    title: string;
    dataKey: string;
    chartData: object[];
};

const BarChartBox = (props: Props) => {
  return (
    <div className="barChartBox">
        <h1>{props.title}</h1>
        <ResponsiveContainer width="100%" height="100%">
        <BarChart width={150} height={40} data={props.chartData}>
            <Tooltip
            contentStyle={{background: "black", borderRadius: "5px"}}
            labelStyle={{display:"none"}}
            />
          <Bar dataKey={props.dataKey} fill={props.color}/>
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default BarChartBox
