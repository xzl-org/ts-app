import Search from "../../components/Search";

const searchContent = 'Me';

export default function Me() {
  let value = "-1";
  return (
    <>
      <span>上海 26℃</span>
      <Search
        value={value}
      />
    </>
  )
}
