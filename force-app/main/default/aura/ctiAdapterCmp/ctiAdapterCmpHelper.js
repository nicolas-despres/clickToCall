({
    // Your renderer method overrides go here
    renderPanel: function (cmp, params) {
        cmp.set('v.showSpinner', true);
        if (params.toast) {
            //cmp.find('toast-message').set('v.content', params.toast);
        }
        if (params.type) {
            console.log(params.attributes)
            $A.createComponent(params.type, params.attributes, function (newPanel) {
                if (cmp.isValid()) {
                    cmp.set('v.body', [newPanel]);
                    cmp.set('v.showSpinner', false);
                }
            });
        } else {
            cmp.set('v.showSpinner', false);
        }
    },
})
