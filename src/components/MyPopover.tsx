import { useUpdateEffect } from 'ahooks';
import { Popover, Icon } from 'antd-mobile'
import { useState } from 'react'

const Item = Popover.Item;
export default function MyPopover() {
  const initialVisible = false;
  const [visible, setVisible] = useState(initialVisible);
  useUpdateEffect(() => {
    setVisible(initialVisible);
  }, [initialVisible]);


  return (
    <Popover mask
      visible={visible}
      overlay={[
        (<Item key="4" icon={''} data-seed="logId">Scan</Item>),
        (<Item key="5" icon={''} style={{ whiteSpace: 'nowrap' }}>My Qrcode</Item>),
        (<Item key="6" icon={''}>
          <span style={{ marginRight: 5 }}>Help</span>
        </Item>),
      ]}
      align={{
        overflow: { adjustY: 0, adjustX: 0 }
      }}
      onVisibleChange={setVisible}
      onSelect={()=>console.log()}
    >
      <div style={{
        height: '100%',
        padding: '0 15px',
        // marginRight: '-15px',
        display: 'flex',
        alignItems: 'center',
      }}
      >
        <Icon type="ellipsis" />
      </div>
    </Popover>
  )
}
