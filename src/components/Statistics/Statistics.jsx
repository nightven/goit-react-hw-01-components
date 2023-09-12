import { StatisticsList } from "components/StatisticsList/StatisticsList.jsx";
import { List, StatisticsSection } from "./Statistics.styled.js";

export const Statistics = (stats) => (
  <StatisticsSection className="statistics">
    <h2 className="title">Upload stats</h2>
    <ul className="stat-list">
        {stats.stats.map(stat=>{
            return(
            <List className="item" key={stat.id}>
              <StatisticsList id={stat.id} label={stat.label} percentage={stat.percentage}/>
            </List>)
        })}
    </ul>
  </StatisticsSection>
);
