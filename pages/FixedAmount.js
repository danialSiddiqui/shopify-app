import React, {useCallback, useState} from 'react';
import ReactDOM from 'react-dom';
import { Button, Card, Form, FormLayout, Layout, Page, SettingToggle, Stack, TextField, TextStyle, CalloutCard, ChoiceList } from '@shopify/polaris';

export default function FixedAmount() {

    const [selected, setSelected] = useState(['hidden']);

  const handleChange = useCallback((value) => setSelected(value), []);

    return(
        <Page
        breadcrumbs={[{content: 'Program', url: '/Program'}]}
            title="Fixed amount">

            <Layout>
            <Layout.Section>
                <Card title="Reward Title" sectioned>
                <Form >
               <FormLayout>
                 <TextField
                   
                  
                   placeholder="$5 off coupon"
                   type="discount"
                 />
                 
               </FormLayout>
             </Form>
                </Card>
                <Card title="Points Type" sectioned>
                <ChoiceList
              title=""
              choices={[
                {label: 'Increments of points', value: 'IncrementsPoints'},
                {label: 'Fixed amount of points', value: 'FixedPoints'},
                
              ]}
              selected={selected}
              onChange={handleChange}
            />
                </Card>
                <Card title="Reward" sectioned>
                <Form >
               <FormLayout>
                 <TextField
                   
                   label="Points amount"
                   
                   type="discount"
                 />

                <TextField
                   
                   label="Discount value"
                   
                   type="discount"
                 />
                 
               </FormLayout>
             </Form>
                </Card>
                <Card title="Apply to" sectioned>
                <ChoiceList
              title=""
              choices={[
                {label: 'Entire order', value: 'Eorder'},
                {label: 'Specific collections', value: 'Specific'},
                
              ]}
              selected={selected}
              onChange={handleChange}
            />
                </Card>
                <Card title="Min Requirment" sectioned>
                <ChoiceList
              title=""
              choices={[
                {label: 'None', value: 'none'},
                {label: 'Minimum purchase value', value: 'mini-value'},
                
              ]}
              selected={selected}
              onChange={handleChange}
            />
                </Card>
            </Layout.Section>
                
                <Layout.Section secondary>
                    <Card title="Summary" sectioned>
                        <li>Rs.5 off for entire order</li>
                        <li>Applies to all orders</li>
                    </Card>
                </Layout.Section>

                
                
                
            </Layout>




            </Page>
    )
}