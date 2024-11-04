# OpenCTI ClickToCall override

This repo is a minimalist example used to override the clickToCall behavior
1. In your org modify the call center to add your domain 

```xml
 <items>
            <label>CTI Adapter URL</label>
            <name>reqAdapterUrl</name>
            <value>{myDomain}/apex/ctiAdapterPage</value>
        </items>
```
2. Add the call center to your user
3. Add OpenCTI to your app

=> Then you can override the behavior of the onClickCallback in the page `ctiAdapterPage.page`
