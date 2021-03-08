import Search from "../../components/Search";

const searchContent = 'Message';

export default function Message() {
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
