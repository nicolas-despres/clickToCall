({
    
    init: function(cmp, event, helper) {
        console.log('demoAdapterController:init');
        cmp.getEvent('ctiRenderPanelEvt').setParams({
            type : 'c:ctiPhonePanel',
            attributes: { presence : 'Available'}
        }).fire();
    },

    // renderPanel event handler. Used to replace the current view with a given panel.
    renderPanel: function(cmp, event, helper) {
        var params = event.getParams();
        console.log('render', event, params)
        helper.renderPanel(cmp, params);
    },
})
