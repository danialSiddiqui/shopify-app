import React, {useCallback, useState} from 'react';
import ReactDOM from 'react-dom';
import { Button, Card, Form, FormLayout, Layout, Page, SettingToggle, Stack, TextField, TextStyle, CalloutCard, ChoiceList } from '@shopify/polaris';

export default function PlaceOrder() {

    const [selected, setSelected] = useState(['hidden']);

    const handleChange = useCallback((value) => setSelected(value), []);

    return(
        <Page
        breadcrumbs={[{content: 'Program', url: '/Program'}]}
            title="Percentage">
                <Layout>
                    <Layout.Section>
                        <Card title="Rward Title" sectioned>
                        <Form >
               <FormLayout>
                 <TextField
                   
                  
                   placeholder="$5 off coupon"
                   type="discount"
                 />
                 
               </FormLayout>
             </Form>
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
                {label: 'None', value: 'None'},
                {label: 'Minimum purchase value', value: 'MiniVal'},
                
              ]}
              selected={selected}
              onChange={handleChange}
            />
                        </Card>
                    </Layout.Section>
                    <Layout.Section secondary>
                        <Card title="Summary" sectioned>
                            <li>5% off entire order</li>
                            <li>Applies to all orders</li>
                        </Card>
                    </Layout.Section>
                </Layout>
            </Page>
    )
}