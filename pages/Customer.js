import React, {useCallback, useState} from 'react';
import ReactDOM from 'react-dom';
import { Button, Card, Form, FormLayout, Layout, Page, SettingToggle, Stack, TextField, TextStyle,Tabs,Thumbnail } from '@shopify/polaris';

export default function Customers()  {

        const [selected, setSelected] = useState(0);

  const handleTabChange = useCallback(
    (selectedTabIndex) => setSelected(selectedTabIndex),
    [],
  );

  const tabs = [
    {
      id: 'all-customers-1',
      content: 'All',
      accessibilityLabel: 'All customers',
      panelID: 'all-customers-content-1',
    },
    {
      id: 'members',
      content: 'Members',
      panelID: 'accepts-marketing-content-1',
    },
    {
      id: 'guest',
      content: 'Guest',
      panelID: 'repeat-customers-content-1',
    },
    {
      id: 'exluded',
      content: 'Excluded',
      panelID: 'prospects-content-1',
    },
  ];

        return (
            <Page>
                <Layout>
                    <Card>
                    <Tabs tabs={tabs} selected={selected} onSelect={handleTabChange}>
        <Card.Section >
        <Thumbnail
  source="https://boosterapps.com/apps/loyalty/assets/polaris-no-results-a39dabc3bccd5f5aa28d086fe12ebafc183160b00af17288feccbdd85f8a15ba.svg"
  size="large"
  alt="Black choker necklace"
/>
          <p>no customers found</p>
        </Card.Section>
      </Tabs>
                    </Card>
                </Layout>
            </Page>
        );
    }
