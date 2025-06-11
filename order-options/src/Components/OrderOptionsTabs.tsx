import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import TabContent from './TabContent';

function OrderOptionsTabs() {
  return (
    <div 
    id="orderOptions"
    className="container">
        <div className="row">
            <div className="col-12">
                <Tabs
                  defaultActiveKey="women"
                  id="orderOptionsNavTabs"
                  className="tk-korolev tabs"
                >
                  <Tab 
                  eventKey="women" 
                  title="Women"
                  >
                    <TabContent type="women" />
                  </Tab>
                  <Tab 
                  eventKey="men" 
                  title="Men"
                  >
                    <TabContent type="men" />
                  </Tab>
                  <Tab 
                  eventKey="partners" 
                  title="Partners"
                  >
                    <TabContent type="partners" />
                  </Tab>
                </Tabs>
            </div>
        </div>
    </div>
  );
}

export default OrderOptionsTabs;