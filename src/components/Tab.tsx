import { Component } from 'react';
import { Button, TabBar } from 'antd-mobile';

enum TabEnum {
  HOME,
  FORTUNE,
  KOUBEI,
  MESSAGE,
  ME
}

class Tab extends Component<{}, any> {
  constructor(props: {} | Readonly<{}>) {
    super(props);
    this.state = {
      selectedTab: TabEnum.HOME,
      hidden: false,
      fullScreen: true,
    };
  }

  renderContent(pageText: {} | null | undefined) {
    return (
      <div style={{ backgroundColor: 'white', height: '100%', textAlign: 'center' }}>
        <div style={{ paddingTop: 60 }}>Clicked “{pageText}” tab， show “{pageText}” information</div>
        <Button style={{ display: 'inline-block' }}
          onClick={(e) => {
            e.preventDefault();
            this.setState({
              hidden: !this.state.hidden,
            });
          }}
        >
          Click to show/hide tab-bar
        </Button>
        <Button style={{ display: 'inline-block' }}
          onClick={(e) => {
            e.preventDefault();
            this.setState({
              fullScreen: !this.state.fullScreen,
            });
          }}
        >
          Click to switch fullscreen
        </Button>
      </div>
    );
  }

  render() {
    const tabKeys: any = Object.values(TabEnum).filter((key: any) => isNaN(Number(key)))
    const tabItems: any = tabKeys.map((key: any, index: number) =>
      <TabBar.Item
        title={key}
        key={key}
        icon={<div style={{
          width: '22px',
          height: '22px',
          // background: `url(https://gw.alipayobjects.com/zos/rmsportal/BTSsmHkPsQSPTktcXyTV.svg) center center /  21px 21px no-repeat`
          background: `url(${require(`../assets/${key}.svg`).default}) center center /  21px 21px no-repeat`,
        }}
        />
        }
        selectedIcon={<div style={{
          width: '22px',
          height: '22px',
          // background: "url(https://gw.alipayobjects.com/zos/rmsportal/ekLecvKBnRazVLXbWOnE.svg) center center /  21px 21px no-repeat"
          background: `url(${require(`assets/${key}2.svg`).default}) center center /  21px 21px no-repeat`,
        }}
        />
        }
        selected={this.state.selectedTab === TabEnum[key]}
        badge={index === TabEnum.MESSAGE ? 6 : ''}
        onPress={() => {
          this.setState({
            selectedTab: TabEnum[key],
          });
        }}
      >
        {this.renderContent(key)}
      </TabBar.Item>
    )

    return (
      <div style={this.state.fullScreen ? { position: 'fixed', height: '100%', width: '100%', top: 0 } : { height: 400 }}>
        <TabBar
          unselectedTintColor="#949494"
          tintColor="#33A3F4"
          barTintColor="white"
          hidden={this.state.hidden}
        >
          {tabItems}
        </TabBar>
      </div>
    );
  }
}

export default Tab;
