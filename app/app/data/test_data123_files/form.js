function Jump(frm){
	var obj=frm.elements["sel"].options;
	var idx=obj.selectedIndex;
	if(idx==0){
		/* �I������Ă��Ȃ��ꍇ */
		alert("��]�R�[�X��I�����Ă�������");
	}else{
		/* �I�����ꂽ�l�iURL)�ֈړ� */
		location.href=obj[idx].value;
	}
}