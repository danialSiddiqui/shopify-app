import React, {useCallback, useState} from 'react';
import ReactDOM from 'react-dom';
import { Button, Card, Form, FormLayout, Layout, Page, SettingToggle, Stack, TextField, TextStyle, CalloutCard, ChoiceList } from '@shopify/polaris';

export default function PlaceOrder() {
    return(
        <Page
        breadcrumbs={[{content: 'Program', url: '/Program'}]}
            title="Free shipping">
                <Layout>
                    <Layout.Section>
                        <Card title="Reward Title" sectioned>
                        <Form >
               <FormLayout>
                 <TextField
                   
                  
                   placeholder="Free Shipping Coupon"
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
                 
               </FormLayout>
             </Form>
                        </Card>

                    </Layout.Section>
                    <Layout.Section secondary>
                        <Card title="Summary" sectioned>
                            <li>Free shipping off the entire order.</li>
                        </Card>
                    </Layout.Section>
                </Layout>
            </Page>
    )
}