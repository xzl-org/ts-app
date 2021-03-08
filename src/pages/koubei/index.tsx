import Search from "../../components/Search";

const searchContent = 'Koubei';

export default function Koubei() {
  let value = "-1";
  return (
    <>
      <span>上海 26℃{searchContent}</span>
      <Search
        value={value}
      />
    </>
  )
}
