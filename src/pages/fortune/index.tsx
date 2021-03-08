import Search from "../../components/Search";

const searchContent = 'Fortune';

export default function Fortune() {
  let value = "-1";
  return (
    <>
      <span>{searchContent}</span>
      <Search
        value={value}
      />
    </>
  )
}
