'use strict';

module.exports = function (oAppData) {
	var App = require('%PathToCoreWebclientModule%/js/App.js');
	
	if (App.getUserRole() === Enums.UserRole.NormalUser)
	{
		return {
			start: function (ModulesManager) {
				if (ModulesManager.isModuleEnabled('MailWebclient'))
				{
					ModulesManager.run('MailWebclient', 'registerMessagePaneController', [require('modules/%ModuleName%/js/views/MessageControlView.js'), 'BeforeMessageHeaders']);
					ModulesManager.run('MailWebclient', 'registerComposeToolbarController', [require('modules/%ModuleName%/js/views/ComposeDropdownView.js')]);
				}
			}
		};
	}
	
	return null;
};
