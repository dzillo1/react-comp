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
                  className="mb-3 bg-white"
                >
                  <Tab eventKey="women" title="Women">
                    <TabContent>

                    </TabContent>
                  </Tab>
                  <Tab eventKey="men" title="Men">
                    <TabContent>

                    </TabContent>
                  </Tab>
                  <Tab eventKey="partners" title="Partners">
                    Partners
                  </Tab>
                </Tabs>
            </div>
        </div>
    </div>
  );
}

export default OrderOptionsTabs;