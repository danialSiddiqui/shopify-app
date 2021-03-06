import React, {useCallback, useState} from 'react';
import ReactDOM from 'react-dom';
import { Button, Card, Form, FormLayout, Layout, Page, SettingToggle, Stack, TextField, TextStyle, CalloutCard, ChoiceList } from '@shopify/polaris';

export default function PlaceOrder() {

    
    
        const [selected, setSelected] = useState(['hidden']);

  const handleChange = useCallback((value) => setSelected(value), []);

 

        return (
            <Page 
            breadcrumbs={[{content: 'Program', url: '/Program'}]}
            title="Loyalty Program Flow - Order Placed"
            >
            <Layout title="Loyalty Program Flow - Order Placed">
           <h1>  </h1>
                <Layout.AnnotatedSection>
                    <Card title="Earning Type" sectioned>
                    <ChoiceList
              title="Company name"
              choices={[
                {label: 'Increments of points (recommended)', value: 'IncrementsPoints'},
                {label: 'Fixed amount of points', value: 'FixedPoints'},
                
              ]}
              selected={selected}
              onChange={handleChange}
            />
                    </Card>
                </Layout.AnnotatedSection>
                <Layout.AnnotatedSection>
                    <Card title="Earning Value" sectioned><Form >
               <FormLayout>
                 <TextField
                   
                  
                   label="Discount percentage"
                   type="discount"
                 />
                 <Stack distribution="trailing">
                   <Button primary submit>
                     Save
                   </Button>
                 </Stack>
               </FormLayout>
             </Form></Card>
              
                    <Card title="Summary" sectioned><p>Customers earn 7 point/s for every Rs.1 spent</p></Card>
                </Layout.AnnotatedSection>
            </Layout>
        </Page>
        )
    }
