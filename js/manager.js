'use strict';

module.exports = function (oAppData) {
	return {
		isAvailable: function (iUserRole, bPublic) {
			return !bPublic && iUserRole === Enums.UserRole.NormalUser;
		},
		start: function (ModulesManager) {
			ModulesManager.run('MailWebclient', 'registerMessagePaneController', [require('modules/%ModuleName%/js/views/MessageControlView.js'), 'BeforeMessageHeaders']);
			ModulesManager.run('MailWebclient', 'registerComposeToolbarController', [require('modules/%ModuleName%/js/views/ComposeDropdownView.js')]);
		}
	};
};