//=====================================================================

//CSS��OS�A�u���E�U���Ƃɓǂݍ��ފ֐�

//Filename:  cssload.js

//=====================================================================



function cssLoad(){



	//CSS�t�@�C���ݒ�

	winIE='/koho/academeprofile/activity/css/win_ie_own.css';

	winNN='/koho/academeprofile/activity/css/win_nn_own.css';

	macIE='/koho/academeprofile/activity/css/mac_ie_own.css';

	macNN='/koho/academeprofile/activity/css/mac_nn_own.css';

	var cssFile='';

	strApp=navigator.appName;

	strAgnt=navigator.userAgent;



	if (strAgnt.indexOf("Win") != -1) {

		if (strApp.indexOf('Microsoft') != -1) {

			cssFile = winIE;

		} else if (strApp.indexOf('Netscape') != -1) {

			cssFile = winNN;

		} else {

			cssFile = winIE; //IE�ł�NN�ł��Ȃ�������AIE���W��

		}

	} else if (strAgnt.indexOf("Mac") != -1) {

		if (strApp.indexOf('Microsoft') != -1) {

			cssFile = macIE;

		} else if (strApp.indexOf('Netscape') != -1) {

			cssFile = macNN;

		} else {

			cssFile = macIE;//IE�ł�NN�ł��Ȃ�������AIE���W��

		}

	} else {

		cssFile = winIE;//Win�ł�NN�ł��Ȃ�������AIE���W���H

	}



	//CSS�t�@�C���̃����N��������

	if (cssFile != '') {

		document.write('<LINK rel="stylesheet" href="' + cssFile + '">');

	}

}



cssLoad();

function SubWinOpen(winName,url,W,H,f_posX,f_posY){
//�T�u�E�C���h�E�I�[�v��
var WinD11 = window.open(url,winName,'top='+f_posY+',left='+f_posX+',screenX='+f_posX+',screenY='+f_posY+',scrollbars=yes,resizable=1,width='+W+',height='+H+'');
WinD11.focus();
}