function sendLineNotify() {

    var form = FormApp.openById('xxxxx');   // Google Form ID
    var token = ["xxxxx"];    // Line token
    
    var form_res = form.getResponses()
    var formResponse = form_res[form_res.length - 1];
    var itemResponses = formResponse.getItemResponses();

    
    var ans1 = itemResponses[0].getResponse();
    var ans2 = itemResponses[1].getResponse();
    var ans3 = itemResponses[2].getResponse();
    var ans4 = itemResponses[3].getResponse();
    var ans5 = itemResponses[4].getResponse();
    var ans6 = itemResponses[5].getResponse();
    var ans7 = itemResponses[6].getResponse();
    var ans8 = itemResponses[7].getResponse();
    var ans9 = itemResponses[8].getResponse();


    var all_mes =  "มีผู้แจ้งความประสงค์ในการรับการสนับสนุนด้านนวัตกรรมและวิจัย ดังนี้" + '\n' + '\n' + "1) ชื่อ-สกุล : " + ans1 + "\n" + "2) ตำแหน่ง : " + ans2 + "\n" + "3) กลุ่มงาน : " + ans3 + "\n" + "4) Tel : " + ans4 + "\n" + "5) E-mail : " + ans5 + "\n" + "6) งานที่ขอรับบริการ : " + ans6 + "\n" + "7) ประเภท : " + ans7 + "\n" + "8) รายละเอียดในการขอรับบริการ (กรุณาระบุรายละเอียดให้ชัดเจน) : " + ans8 + "\n" + "9) ระยะเวลาที่ต้องการให้แล้วเสร็จ : " + ans9


    var options = {
    "method": "post",
    "payload": "message=" + all_mes,
    "headers": {
    "Authorization": "Bearer " + token
    }
    };
    
    UrlFetchApp.fetch("https://notify-api.line.me/api/notify", options);
    }
