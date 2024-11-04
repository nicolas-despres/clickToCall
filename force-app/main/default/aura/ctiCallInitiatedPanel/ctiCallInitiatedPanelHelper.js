
({
    // on Accept, accept the call by bringing up the Connected Panel
    renderConnectedPanel: function (cmp) {
        var wasSearched = cmp.get('v.wasSearched');
        var isClickToDial = cmp.get('v.clickToDial');
        var recordId;

        if (wasSearched) {
            recordId = cmp.get('v.recordId');
            var account = cmp.get('v.account');
          
            cmp.getEvent('ctiRenderPanelEvt').setParams({
                type: 'c:ctiConnectedPanel',
                attributes: {
                    showDialPad: false,
                    recordId: recordId,
                    callType: 'Inbound',
                    account: account,
                    recordName: cmp.get('v.recordName'),
                    presence: cmp.get('v.presence')
                }
            }).fire();

            sforce.opencti.screenPop({
                type: sforce.opencti.SCREENPOP_TYPE.SOBJECT, params: { recordId: recordId }, callback: function () {
                    console.log('screen pop worked!');
                }
            });
        } else if (isClickToDial) {
            recordId = cmp.get('v.recordId');
            var account = cmp.get('v.account');
            cmp.getEvent('ctiRenderPanelEvt').setParams({
                type: 'c:ctiConnectedPanel',
                attributes: {
                    showDialPad: false,
                    recordId: recordId,
                    callType: 'Outbound',
                    account: account,
                    recordName: cmp.get('v.recordName'),
                    presence: cmp.get('v.presence')
                }
            }).fire()

            sforce.opencti.screenPop({
                type: sforce.opencti.SCREENPOP_TYPE.SOBJECT, params: { recordId: recordId }, callback: function () {
                    console.log('screen pop worked!');
                }
            });
            setTimeout(() => {
                console.log("reopen screen")
                sforce.opencti.screenPop({
                    type: sforce.opencti.SCREENPOP_TYPE.SOBJECT, params: { recordId: recordId }, callback: function () {
                        console.log('screen pop worked!');
                    }
                });
            }, 3000)
        } 

    }

})