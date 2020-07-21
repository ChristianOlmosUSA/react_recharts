import React from "react";
import { AreaChart, Area, XAxis, YAxis, Tooltip } from "recharts";

const data = [
	{
		date: "July-17-2020",
		time: "6.00pm",
		volume: 10,
		faceup: "Up",
		emotiontype: "quiet",
		sleep: "awake",
		breathspm: 45
	},
	{
		date: "July-17-2020",
		time: "6.05pm",
		volume: 10,
		faceup: "Up",
		emotiontype: "quiet",
		sleep: "awake",
		breathspm: 45
	},
	{
		date: "July-17-2020",
		time: "6.10pm",
		volume: 95,
		faceup: "Up",
		emotiontype: "hungry",
		sleep: "awake",
		breathspm: 58
	},
	{
		date: "July-17-2020",
		time: "6.15pm",
		volume: 15,
		faceup: "down",
		emotiontype: "quiet",
		sleep: "asleep",
		breathspm: 45
	},
	{
		date: "July-17-2020",
		time: "6.20pm",
		volume: 10,
		faceup: "Up",
		emotiontype: "quiet",
		sleep: "awake",
		breathspm: 45
	},
	{
		date: "July-17-2020",
		time: "6.25pm",
		volume: 10,
		faceup: "Up",
		emotiontype: "quiet",
		sleep: "awake",
		breathspm: 45
	},
	{
		date: "July-17-2020",
		time: "6.30pm",
		volume: 5,
		faceup: "Up",
		emotiontype: "quiet",
		sleep: "awake",
		breathspm: 45
	},
	{
		date: "July-17-2020",
		time: "6.35pm",
		volume: 70,
		faceup: "Up",
		emotiontype: "quiet",
		sleep: "awake",
		breathspm: 45
	},
	{
		date: "July-17-2020",
		time: "6.40pm",
		volume: 60,
		faceup: "Up",
		emotiontype: "quiet",
		sleep: "awake",
		breathspm: 45
	},
	{
		date: "July-17-2020",
		time: "6.45pm",
		volume: 11,
		faceup: "Up",
		emotiontype: "quiet",
		sleep: "awake",
		breathspm: 45
	},
	{
		date: "July-17-2020",
		time: "6.50pm",
		volume: 11,
		faceup: "Up",
		emotiontype: "quiet",
		sleep: "awake",
		breathspm: 45
	},
	{
		date: "July-17-2020",
		time: "6.55pm",
		volume: 11,
		faceup: "Up",
		emotiontype: "quiet",
		sleep: "awake",
		breathspm: 45
	},
	{
		date: "July-17-2020",
		time: "7.00pm",
		volume: 25,
		faceup: "Up",
		emotiontype: "quiet",
		sleep: "awake",
		breathspm: 45
	},
	{
		date: "July-17-2020",
		time: "7.05pm",
		volume: 10,
		faceup: "Up",
		emotiontype: "quiet",
		sleep: "awake",
		breathspm: 45
	},
	{
		date: "July-17-2020",
		time: "7.10pm",
		volume: 99,
		faceup: "Up",
		emotiontype: "quiet",
		sleep: "awake",
		breathspm: 45
	}
];

const BreathsChart = props => {
	return (
		<AreaChart
			width={400}
			height={100}
			data={data}
			margin={{
				top: 10,
				right: 30,
				left: 0,
				bottom: 0
			}}>
			<XAxis dataKey="time" />
			<YAxis />
			<Tooltip />
			<Area
				type="monotone"
				dataKey="volume"
				stroke="#8884d8"
				fill="#ff0000"
			/>
		</AreaChart>
	);
};

export default BreathsChart;
