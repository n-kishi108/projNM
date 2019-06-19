/*
  ��  �� : ConvertDate
  ��  �� : datestr ���t������
  ��  �l : ���s���̓��t�Ȃ玞�ԕ������A���s���̓��t�łȂ��Ȃ���t������Ԃ��B
  �p  �� : ConvertDate('2007/01/02 12:34:56'); // ���s����1/2�łȂ��ꍇ�́A
                                               // ������'01/02'��Ԃ�
           ConvertDate('2007/05/02 12:34:56'); // ���s����5/2�ł���ꍇ�́A
                                               // ������'12:34'��Ԃ�
           ConvertDate('2007/05/02 00:00:xx'); // ���s����5/2�łȂ��ꍇ�́A
                                               // ������'05/02'��Ԃ�
           ConvertDate('2007/05/02 00:00:xx'); // ���s����5/2�ł���ꍇ�́A
                                               // ������'05/02'��Ԃ�
*/
function ConvertDate(datestr) {
  var pos = datestr.indexOf(' ');
  var date = datestr.substring(0, pos);
  var time = datestr.substring(pos + 1, datestr.length);

  var today = new Date();
  var yyyy = PadLeft(today.getFullYear(), 4, '0');
  var MM = PadLeft(today.getMonth() + 1, 2, '0');
  var dd = PadLeft(today.getDate(), 2, '0');
  var HH = time.substring(0,1);
  var mm = time.substring(3,4);
  var ss = time.substring(6,7);
  
  if (date == yyyy + '/' + MM + '/' + dd) {
    if ( HH + mm != '0000' ) {
      return time.substring(0, 5);
    }
  }
  
  if (pos != -1 )
  {
  	return date.substring(5,11);
  }
  else
  {
  	return datestr.substring(5,11);
  }
}


/*
  ��  �� : ConvertDateLong
  ��  �� : datestr ���t������
  ��  �l : ���s���̓��t�Ȃ玞�ԕ������A���s���̓��t�łȂ��Ȃ���t������Ԃ��B
  �p  �� : ConvertDateLong('2007/01/02 12:34:56'); // ���s����1/2�łȂ��ꍇ�́A
                                               // ���t������'2007/01/02'��Ԃ�
           ConvertDateLong('2007/05/02 12:34:56'); // ���s����5/2�ł���ꍇ�́A
                                               // ����������'12:34:56'��Ԃ�
*/
function ConvertDateLong(datestr) {
  var pos = datestr.indexOf(' ');
  var date = datestr.substring(0, pos);
  var time = datestr.substring(pos + 1, datestr.length);

  var today = new Date();
  var yyyy = PadLeft(today.getFullYear(), 4, '0');
  var MM = PadLeft(today.getMonth() + 1, 2, '0');
  var dd = PadLeft(today.getDate(), 2, '0');
  
  if (date == yyyy + '/' + MM + '/' + dd) {
    return time;
  }
  else {
    return date;
  }
}

function ConvertDate_Test() {
  var output = "";
  var today = new Date();
  alert('test' + today);
  var yyyy = today.getFullYear();
  var MM = PadLeft(today.getMonth() + 1, 2, '0');
  var dd = PadLeft(today.getDate(), 2, '0');
  var HH = PadLeft(today.getHours(), 2, '0');
  var mm = PadLeft(today.getMinutes(), 2, '0');
  var ss = PadLeft(today.getSeconds(), 2, '0');
  var ff = PadLeft(today.getMilliseconds(), 2, '0');
  alert('test' + today);

  var datestr = yyyy + '/' + MM + '/' + dd + ' ' + HH + ':' + mm + ':' + ss;
  output = ConvertDate(datestr);
  if (output == yyyy + '/' + MM + '/' + dd) {
    alert('NG ' + output);
  }
  else {
    alert('OK ' + output);
  }
  
  datestr = '2000/01/02 11:22:33';
  output = ConvertDate(datestr);
  if ( output == '11:22:33' ) {
    alert('NG ' + output);
  }
  else {
    alert('OK ' + output);
  }
  
}

/*
  ��  �� : DateToString
  ��  �� : date ���t�^�ϐ��i�ȗ������ꍇ�͓�����new Date()���܂��j
  ��  �l : ���s���̓��t�Ȃ玞�ԕ������A���s���̓��t�łȂ��Ȃ���t������Ԃ��B
  �p  �� : DateToString(date); // date�̎�����00:00�Ȃ�
                               // '2007/01/02'��Ԃ�
           DateToString(date); // date�̎�����00:00�łȂ��Ȃ�
                               // '2007/01/02 12:34:56'��Ԃ�
*/
function DateToString(date) {
  if ( ! date ) {
    date = new Date();
  }
  var yyyy = date.getFullYear();
  var MM = PadLeft(date.getMonth() + 1, 2, '0');
  var dd = PadLeft(date.getDate(), 2, '0');
  var HH = PadLeft(date.getHours(), 2, '0');
  var mm = PadLeft(date.getMinutes(), 2, '0');
  var ss = PadLeft(date.getSeconds(), 2, '0');
  var ff = PadLeft(date.getMilliseconds(), 2, '0');
  if ( HH + mm + ss == '000000' ) {

    return yyyy + '/' + MM + '/' + dd;
  }
  else {
    return yyyy + '/' + MM + '/' + dd + ' ' + HH + ':' + mm + ':' + ss;
  }
}

/*
  ��  �� : DateToStringWithoutSecond
  ��  �� : date ���t�^�ϐ��i�ȗ������ꍇ�͓�����new Date()���܂��j
  ��  �l : ���s���̓��t�Ȃ玞�ԕ������A���s���̓��t�łȂ��Ȃ���t������Ԃ��B
  �p  �� : DateToStringWithoutSecond(date); // date�̎�����00:00�Ȃ�
                                            // '2007/01/02'��Ԃ�
           DateToStringWithoutSecond(date); // date�̎�����00:00�łȂ��Ȃ�
                                            // '2007/01/02 12:34:56'��Ԃ�
*/
function DateToStringWithoutSecond(date) {
  if ( ! date ) {
    date = new Date();
  }
  var yyyy = date.getFullYear();
  var MM = PadLeft(date.getMonth() + 1, 2, '0');
  var dd = PadLeft(date.getDate(), 2, '0');
  var HH = PadLeft(date.getHours(), 2, '0');
  var mm = PadLeft(date.getMinutes(), 2, '0');
  var ss = PadLeft(date.getSeconds(), 2, '0');
  var ff = PadLeft(date.getMilliseconds(), 2, '0');
  if ( HH + mm == '0000' ) {
    return yyyy + '/' + MM + '/' + dd;
  }
  else {
    return yyyy + '/' + MM + '/' + dd + ' ' + HH + ':' + mm;
  }
}

/*
  ��  �� : PadLeft
  ��  �� : input ���͕�����
           length �p�f�B���O���ʂ̕�����̒���
           padding �p�f�B���O���镶��
  ��  �l : ���Ƀp�f�B���O����������
  �p  �� : PadLeft('\2,100-', 8, ' '); // ' \2,100-'
           PadLeft('3', 3, '0');       // '003'
           PadLeft('1234', 3, '0');    // '1234'
*/
function PadLeft(input, length, padding) {
  var output = input + '';
  if ( output.length > length )
    return output;
  while ( output.length < length )
    output = padding + output;
  return output;
}
/*
  ��  �� : PadRight
  ��  �� : input ���͕�����
           length �p�f�B���O���ʂ̕�����̒���
           padding �p�f�B���O���镶��
  ��  �l : ���Ƀp�f�B���O����������
  �p  �� : PadLeft('\2,100-', 8, ' '); // '\2,100- '
           PadLeft('3', 3, '0');       // '300'
           PadLeft('1234', 3, '0');    // '1234'
*/
function PadRight(input, length, padding) {
  var output = input + '';
  if ( output.length > length )
    return output;
  while ( output.length < length )
    output = output + padding;
  return output;
}

