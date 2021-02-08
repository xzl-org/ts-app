import { useUpdateEffect } from "ahooks";
import { SearchBar } from "antd-mobile";
import { useState } from "react";
import { search } from "../services";
const doSearch = (searchVal: any) => {
  search(searchVal)
}
export default function index(props: any) {
  const value = "";
  const [searchVal = '查看1月花呗账单', setSearchVal] = useState(value);

  useUpdateEffect(() => {
    setSearchVal(value);
  }, [value]);

  return (
    <SearchBar
      value={searchVal}
      placeholder="Search"
      onSubmit={doSearch}
      onClear={value => console.log(value, 'onClear')}
      onFocus={() => console.log('onFocus')}
      onBlur={() => console.log('onBlur')}
      onCancel={() => console.log('onCancel')}
      showCancelButton
      onChange={(value: any) => { setSearchVal(value) }}
    />
  )
}
