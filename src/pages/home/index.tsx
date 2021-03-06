import Search from "../../components/Search";
// import { search } from "services/home";
import './index.sass';
import MyCarousel from "../../components/MyCarousel";
import MyPopover from "../../components/MyPopover";
const searchContent = '查看1月花呗账单';

export default function Home() {
  let value = "-1";
  const baseBtn: string[] = ['Scan', 'Pay/Collect', 'Transport', 'Pocket']
  return (
    <>
      <header>
        <div id="weather" className='left vertical-middle'>
          <p className='current-city'><b>上海</b></p>
          <span>阴 8℃</span>
        </div>
        <div className="right">
          <MyPopover />
        </div>
        <Search
          value={value}
          className='left'
        />
        <div className="flex-row">
          {baseBtn.map((value) => <span key={value}>{value}</span>)}
        </div>
      </header>
      {/* <MyCarousel /> */}
    </>
  )
}
