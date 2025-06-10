import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import TabContent from './TabContent';
import TabContentPartner from './TabContentPartner';

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
                  className=""
                >
                  <Tab eventKey="women" title="Women">
                    <TabContent />
                  </Tab>
                  <Tab eventKey="men" title="Men">
                    <TabContent />
                  </Tab>
                  <Tab eventKey="partners" title="Partners">
                    <TabContentPartner />
                  </Tab>
                </Tabs>
            </div>
        </div>
    </div>
  );
}

export default OrderOptionsTabs;