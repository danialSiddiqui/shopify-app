import React, {useCallback, useState} from 'react';
import ReactDOM from 'react-dom';
import { Button, Card, Form, FormLayout, Layout, Page, SettingToggle, Stack, TextField, TextStyle, CalloutCard, ChoiceList } from '@shopify/polaris';

export default function AccountEnabled() {

    
    
        const [selected, setSelected] = useState(['hidden']);

  const handleChange = useCallback((value) => setSelected(value), []);

 

        return (
            <Page 
            breadcrumbs={[{content: 'Program', url: '/Program'}]}
            title="Loyalty Program Flow - Account Enabled"
            >
            <Layout title="Loyalty Program Flow - Account Enabled">
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
                   
                  
                   label="Points Awarded"
                   type="discount"
                 />
                 <Stack distribution="trailing">
                   <Button primary submit>
                     Save
                   </Button>
                 </Stack>
               </FormLayout>
             </Form></Card>
              
                    <Card title="Summary" sectioned>
                        
                    <li>100 point/s for completing action</li>
                    <li>Limit of 1 per eternity</li>
                    
                    </Card>
                </Layout.AnnotatedSection>
            </Layout>
        </Page>
        )
    }
