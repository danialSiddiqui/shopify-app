import React from 'react';
import ReactDOM from 'react-dom';
import { Button, Card, Form, FormLayout, Layout, Page, SettingToggle, Stack, TextField, TextStyle, CalloutCard } from '@shopify/polaris';

export default class Index extends React.Component {
    render() {
        return (
            <Page>
                     <Layout>
  <Layout.AnnotatedSection
    title="Details"
    description="Let's get ready to delight your customers"
  >
    <Layout.Section><Card title="Members"><p>0</p></Card></Layout.Section>
    <Layout.Section secondary><Card title="Rewards Issued!"><p>0</p></Card></Layout.Section>
    
  </Layout.AnnotatedSection>
  <Layout.AnnotatedSection
    title="Your Loyalty Program, Your Brand."
  >
    <CalloutCard
  title=" Customize your Loyalty Program
  "
  illustration="https://cdn.shopify.com/s/assets/admin/checkout/settings-customizecart-705f57c725ac05be5a34ec20c05b94298cb8afd10aac7bd9c7ad02030f48cfa0.svg"
  primaryAction={{
    content: 'Edit Program',
    url: 'Program',
  }}
>
  <p>We've set our best practice defaults for your loyalty program. Edit and style to match your brand.</p>
</CalloutCard>
  </Layout.AnnotatedSection>
</Layout>
            </Page>
        );
    }
}