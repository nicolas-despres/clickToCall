
({
    // screen pop to the contact home, and use the call provider to make a call
    init : function(cmp, event, helper) {
        var wasSearched = cmp.get('v.wasSearched');
        console.log('wasSearched : ' + wasSearched);
    },

    // On incoming calls, this is a handler for the Accept button
    accept : function(cmp, event, helper) {
        sforce.opencti.setSoftphoneItemLabel({
            label: 'Appel en cours',
            callback: (res) => console.log("Completed")
        })
        sforce.opencti.setSoftphonePanelLabel({
            label: 'Appel en cours',
            callback: (res) => console.log("Completed")
        })
        helper.renderConnectedPanel(cmp);
    },

    // On incoming calls, this is a handler for the Decline button
    // taking you back to the phone panel
    decline : function(cmp, event, helper) {
        cmp.getEvent('ctiRenderPanelEvt').setParams({
            type : 'c:ctiPhonePanel',
            toast : {'type': 'warning', 'message': 'Call was declined.'},
            attributes : { presence : cmp.get('v.presence') }
        }).fire();

        sforce.opencti.setSoftphoneItemLabel({
            label: 'Kiamo',
            callback: (res) => console.log("Completed")
        })
        sforce.opencti.setSoftphonePanelLabel({
            label: 'Kiamo',
            callback: (res) => console.log("Completed")
        })
    },

    // On dialing calls, this is a handler for the End button
    // taking you back to the phone panel
    end : function(cmp, event, helper) {
        cmp.getEvent('ctiRenderPanelEvt').setParams({
            type : 'c:ctiPhonePanel',
            toast : {'type': 'normal', 'message': 'Call was ended.'},
            attributes : { presence : cmp.get('v.presence') }
        }).fire();
    },
})