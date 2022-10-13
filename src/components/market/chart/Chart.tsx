import React from 'react';
import { AreaChart, Area, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
import { ChartData } from '../../../models/ChartData';
import { ChartUtils } from '../../../services/ChartUtils'
import './Chart.css'

type Props = {
  data: ChartData[]
}

export default function Chart({ data }: Props) {
  const min = Number(ChartUtils.min_price(data))
  const max = Number(ChartUtils.max_price(data))
  const low_range = min - min / 50
  const hight_range = max + max / 15

  function CustomTooltip({ payload, label, active }: any) {
    if (active) {
      return (
        <div className="custom-tooltip">
          <div className="price">{`$ ${payload[0].value}`}</div>
          <div className="date">{`${payload[0].payload.time}`}</div>
        </div>
      );
    }

    return null;
  }

  return (
    <div className='chart-container'>
      <AreaChart width={680} height={250} data={data}>
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#273667" stopOpacity={0.3} />
            <stop offset="95%" stopColor="#273667" stopOpacity={0} />
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="6" />
        <Area type="monotone" dataKey="price" stroke="#273667" fillOpacity={1} fill="url(#colorUv)" />
        <XAxis hide={true} />
        <YAxis hide={true} domain={[low_range, hight_range]} />
        <Tooltip wrapperStyle={{ outline: 'none' }} content={<CustomTooltip payload={undefined} label={undefined} active={undefined}/>} />
      </AreaChart>
    </div>
  );
}