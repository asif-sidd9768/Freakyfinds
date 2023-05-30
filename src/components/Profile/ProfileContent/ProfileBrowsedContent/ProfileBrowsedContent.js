import "./ProfileBrowsedContent.css"
import { Chart as ChartJS, ArcElement, Tooltip, Legend, BarElement, LinearScale, CategoryScale, Title } from 'chart.js';
import { useContext } from "react";
import { Pie, Bar } from 'react-chartjs-2';
import { UserContext } from "../../../../contexts/UserContext";
import { chartOptions, getBarChartData, getPieChartData } from "../../../../utils/chartHelper";
import { EmptyList } from "../../EmptyList/EmptyList";
import { RESOURCE } from "../../../../utils/strings";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

export const ProfileBrowsedContent = () => {
  const { userState } = useContext(UserContext)
  const categoryValues = userState?.user?.user?.browsedItems.map(({category}) => category)
  const timesOpenedValues = userState?.user?.user?.browsedItems.map(({timesOpened}) => timesOpened)
  const pieChartData = getPieChartData(categoryValues, timesOpenedValues)
  const barChartData = getBarChartData(categoryValues, timesOpenedValues)
  
  if(categoryValues?.length === 0 || timesOpenedValues?.length === 0){
    return <EmptyList text={RESOURCE.EMPTY_PROFILE_BROWSED_ITEMS} />
  }
  
  return (
    <div className="profile-browsed-container">
      <div className="chart-container">
        <Pie data={pieChartData} options={chartOptions} />
      </div>  
      <div className="chart-container">
        <Bar data={barChartData} options={chartOptions} />
      </div>  
    </div>
  )
}