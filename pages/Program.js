import React from 'react';
import ReactDOM from 'react-dom';
import { Button, Card, Form, FormLayout, Layout, Page, SettingToggle, Stack, TextField, TextStyle, Icon} from '@shopify/polaris';
import {CartMajor, CustomerPlusMajor, CashDollarMajor } from '@shopify/polaris-icons';

export default class Program extends React.Component {
    state = {
        discount: '10%',
        enable:false,
      };

    render() {
        const { discount, enabled } = this.state;
        const contentStatus = enabled ? 'Disable' : 'Enable';
        const textStatus = enabled ? 'enabled' : 'disabled';
        return (
 
            <Page>
       <Layout>
         {/* First box */}
         <Layout.AnnotatedSection
           title="Default discount"
           description="Add a product to Sample App, it will automatically be discounted."
         >
           
           <SettingToggle
             action={{
               content: contentStatus,
               onAction: this.handleToggle,
             }}
             enabled={enabled}
           >
             Your Program is currently{' '}
             <TextStyle variation="strong">{textStatus}</TextStyle>.<br/> <br/>
             <TextStyle variation="subdued">Please allow 30 seconds for the widget to appear on your store after enabling</TextStyle>
           </SettingToggle>
           
         </Layout.AnnotatedSection>
         {/* Second box */}
        <Layout.AnnotatedSection title="Earning Points"
    description="Customize how your Customers will earn points on your loyalty program">
      <Card title="Customer will eanr points through actions below">
           <SettingToggle
             action={{
               content: contentStatus,
               onAction: this.handleToggle,
             }}
             enabled={enabled}
             
           >
             
              <Icon source={CartMajor} />   Place an Order{' '} 
             <TextStyle variation="strong">{textStatus}</TextStyle>.
             <br/>
             <TextStyle variation="subdued">5 Points for every Rs.1 Spent</TextStyle>
             <Button>Edit</Button>
           </SettingToggle>

           <SettingToggle
             action={{
               content: contentStatus,
               onAction: this.handleToggle,
             }}
             enabled={enabled}
             
           >
          <Icon source={CustomerPlusMajor} />    
             Singup{' '}
             <TextStyle variation="strong">{textStatus}</TextStyle>.
             <br/>
             <TextStyle variation="subdued">100 Points</TextStyle>
             <Button>Edit</Button>
           </SettingToggle>
           </Card>
      </Layout.AnnotatedSection>
        <Layout.AnnotatedSection title="Redeeming Points"
    description="Rewards that customers can redeem using their points">

      {/* thrid box box */}
      <Card sectioned title="Customers can redeem these rewards using their points">
      
      <SettingToggle
             action={{
               content: contentStatus,
               onAction: this.handleToggle,
             }}
             enabled={enabled}
             
           >
          <Icon source={CashDollarMajor} />    
             Rs20 off coupon{' '}
             <TextStyle variation="strong">{textStatus}</TextStyle>.
             <br/>
             <TextStyle variation="subdued">2000 Points</TextStyle>
             <Button>Edit</Button>
           </SettingToggle>

           <SettingToggle
             action={{
               content: contentStatus,
               onAction: this.handleToggle,
             }}
             enabled={enabled}
             
           >
          <Icon source={CashDollarMajor} />    
             Rs10 off coupon{' '}
             <TextStyle variation="strong">{textStatus}</TextStyle>.
             <br/>
             <TextStyle variation="subdued">1000 Points</TextStyle>
             <Button>Edit</Button>
           </SettingToggle>

           <SettingToggle
             action={{
               content: contentStatus,
               onAction: this.handleToggle,
             }}
             enabled={enabled}
             
           >
          <Icon source={CashDollarMajor} />    
             Rs5 off coupon{' '}
             <TextStyle variation="strong">{textStatus}</TextStyle>.
             <br/>
             <TextStyle variation="subdued">500 Points</TextStyle>
             <Button>Edit</Button>
           </SettingToggle>
           </Card>
      </Layout.AnnotatedSection>
      </Layout>
      </Page>
        );
    }
}