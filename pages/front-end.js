import React from 'react';
import { Button, Card, Form, FormLayout, Layout, Page, SettingToggle, Stack, TextField, TextStyle, CalloutCard, ChoiceList } from '@shopify/polaris';
import "../assests/my-style.css"

export default  function Front()  {

    return(
        <div className="Main-body-LModel">
            <div className="LModel-Sec-1">
                <h1>Rewards Program</h1>
                <p>Join now and unlock awesome rewards</p>
            </div>
            <div className="LModel-Sec-2">
                <h3 className="-LModel-heading">Join and Earn Rewards</h3>
                <p className="LModel-parah">Get rewarded for being an awesome customer</p>
                <button>Start Earning</button>
                <p className="LModel-parah"> Already a member?<a href="#">Sign in</a></p>

            </div>
            <div className="LModel-Sec-3">
                <h3 className="LModel-heading">Earn Points</h3>
                <p className="LModel-parah">Earn points and tunr these into rewards</p>
                <div>
                    <div className="LModel-Table">
                        <p className="LModel-Table-text">icon</p>
                        <p className="LModel-Table-text arrow">Ways to earn</p>
                    </div>
                    <div className="LModel-Table">
                        <p className="LModel-Table-text">icon</p>
                        <p className="LModel-Table-text arrow">Ways to redeem</p>
                    </div>
                </div>
            </div>
        </div>
    )

}