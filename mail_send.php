<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // 사용자 입력 값 받기
    $name = nl2br($_POST["name"]);
    $phoneNumber = nl2br($_POST["phoneNumber"],);
    $dateNumber = nl2br($_POST["dateNumber"]); 
    // $email = "manai20@naver.com";
    $email = "psh0260@naver.com";
    

    // 📌받을 이메일 주소 (네이버 메일)  
    $to = $email; // 여기에 본인의 네이버 이메일 입력

    // 메일 제목
    $subject = "[창원메가시티자이&위브] $name 님 관심고객등록";

    // 메일 본문
    $body = "
    <html>
    <head>
        <style>
        
        li {list-style:none;}
        h2 {font-size: 20px;}
        .text li {list-style:none; font-weight:bold; margin-bottom: 10px;}    
        .text li strong {display:inlin-block; width: 120px; color: #555; font-weight: normal;}
        </style>
    </head>
    <body style='color: #333;'>
        <h2 style='font-size: 20px;' >[창원메가시티자이&위브] 관심 등록 하셨습니다.</h2>

        <div class='text'>
            <ul style='margin:0; padding:0;'>
                <li style='margin:0; padding:0; list-style:none; font-size: 18px; letter-spacing: 1px; font-weight:bold; margin-bottom: 10px;'><strong style='display:inline-block; width: 120px; color: #888; font-weight: normal;' >이름</strong>  $name  </li>     
            </ul>    
            <ul style='margin:0; padding:0;'>
                <li style='margin:0; padding:0; list-style:none; font-size: 18px; letter-spacing: 1px; font-weight:bold; margin-bottom: 10px;'><strong style='display:inline-block; width: 120px; color: #888; font-weight: normal;'>휴대폰번호</strong>   $phoneNumber </li> 
            
            </ul>
            <ul style='margin:0; padding:0;'>
                <li style='margin:0; padding:0; list-style:none; font-size: 18px; letter-spacing: 1px; font-weight:bold; margin-bottom: 10px;'><strong style='display:inline-block; width: 120px; color: #888; font-weight: normal;'>방문일자</strong>   $dateNumber  </li> 
            </ul>
        </div>
    </body>
    </html>
    ";

    // 메일 헤더 설정
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";

    //📌여기서부터 창원메가시티.com
    $headers = "From: 창원메가시티@naver.comr\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/html; charset=UTF-8\r\n";

    //여기까지 추가하니깐 되었음.


    // 메일 보내기
    if (mail($to, $subject, $body, $headers)) {
        echo "<script>alert('이메일이 성공적으로 전송되었습니다.'); window.location.href='index.html';</script>";
    } else {
        echo "<script>alert('이메일 전송에 실패했습니다. 다시 시도해주세요.'); window.history.back();</script>";
    }
} else {
    echo "<script>alert('잘못된 접근입니다.'); window.location.href='index.html';</script>";
}
?>
