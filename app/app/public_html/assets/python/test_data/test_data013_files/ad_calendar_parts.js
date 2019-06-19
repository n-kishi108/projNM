/**
 * ��������
 */
function makeScript(){
    var script_obj = document.createElement('script');
    var myprotocol = location.protocol;
    script_obj.src = myprotocol + '//plaza.rakuten.co.jp/opt/calendar/ad_calendar_parts_list.js?' + new Date().getTime(); 
    document.body.appendChild(script_obj);
}

/**
 * ����js�ɹ�
 */
function jsonFeedAdCalendar(json_data){
    var urls        = new Array();
    var imgs        = new Array();
    var img_widths  = new Array();
    var img_heights = new Array();
    var jsoncnt     = 0;
    var url         = "";
    var img         = "";
    var img_width   = "";
    var img_height  = "";
    var randomIndex = 0;
    var index       = 0;

    // �ǡ�����¸�ߤ��ʤ����
    if(isNaN(json_data.length) == true || json_data.length == 0) {
        //��������̵��
        return;
    }

    // �����ɤ߹��������˳�Ǽ
    for (index=0; index < json_data.length; index++) {
        if( false == isNaN(parseInt(index))  ) {
            urls[index] = json_data[index]["url"];
            imgs[index] = json_data[index]["img"];
            img_widths[index]  = json_data[index]["img_width"];
            img_heights[index] = json_data[index]["img_height"];
            jsoncnt++;
        }
    }

    // ������ǹ�������
    randomIndex = Math.floor(Math.random() * jsoncnt);
    url  = urls[randomIndex];
    img  = imgs[randomIndex];
    img_width  = img_widths[randomIndex];
    img_height = img_heights[randomIndex];

    // �����������ܤ򥿥�������
    var calendar_link = document.getElementById("calendar_link");

    // a�������Ǻ���(���)
    var element = document.createElement('a');
    element.href = url;
    element.target = "_blank";

    // img�������Ǻ���(�������)
    var element2 = document.createElement('img');
    element2.src = 'http://plaza.rakuten.co.jp/img/calendar/' + img;
    element2.width  = img_width;
    element2.height = img_height;

    // ������ɽ��������
    element2.style.borderStyle = "none";
    element2.style.verticalAlign  = 'bottom';

    // ��������������calendar_link������
    calendar_link.appendChild(element);
    element.appendChild(element2);

    // ������ɽ�����֤��������뤿��˾岼�˶��������
    calendar_link.style.paddingTop     = '10px';
    calendar_link.style.paddingBottom  = '9px';

}

// JavaScrip��onload���˼¹Ԥ�����
if (window.attachEvent) {
    window.attachEvent("onload", makeScript, true);
} else if (window.addEventListener) {
    window.addEventListener("load", makeScript, true);
}
