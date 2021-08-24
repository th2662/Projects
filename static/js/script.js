/* OpenWeather API 요청 코드 */
        $.ajax({
            type: "GET",
            url: "https://api.openweathermap.org/data/2.5/weather?q=Seoul&appid=00d5b54c01eecba3641625ac2a6d6d54&units=metric",
            data: {},
            success: function (response) {
                //기상 상태 정보 //
                //id
                let wt_id = response["weather"][0]["id"];
                //날씨
                let main = response["weather"][0]["main"];
                //날씨 설명
                let description = response["weather"][0]["description"];
                //기온 상세 정보 //
                //온도
                let temp = response["main"]["temp"];
                //체감 온도
                let feels_like = response["main"]["feels_like"];
                //최소 온도
                let temp_min = response["main"]["temp_min"];
                //최고 온도
                let temp_max = response["main"]["temp_max"];
                //습도
                let humidity = response["main"]["humidity"]
                //위치 정보 //
                //지역
                let location = response["name"];

                $('.temp').append(temp);
                $('.location').append(location);
                $('.temp-min').append(temp_min);
                $('.temp-max').append(temp_max);
                $('.humidity').append(humidity);




                /* 아이콘 파일 주소 작성하는 함수*/
                function weathericon(wt_icon) {
                    let iconUrl = '<img src="../static/img/' + wt_icon + '.svg" alt="' + description + '" class="svg">'
                    $('.wt-icon').html(iconUrl);

                }
                /* id에 따른 icon 이름 정해주고 위의 함수를 실행시키는 조건문 */
                if (200 <= wt_id & wt_id <300) {
                    let wt_icon = "thunderstorm";
                    weathericon(wt_icon);
                    }
                    else if (300 <= wt_id & wt_id <400) {
                    let wt_icon = "drizzle";
                    weathericon(wt_icon);
                    }
                    else if (500 <= wt_id & wt_id <600) {
                    let wt_icon = "rain";
                    weathericon(wt_icon);
                    }
                    else if (600 <= wt_id & wt_id <700) {
                    let wt_icon = "snow";
                    weathericon(wt_icon);
                    }
                    else if (wt_id == 800) {
                    let wt_icon = "clear";
                    weathericon(wt_icon);
                    }
                    else if (801 <= wt_id & wt_id <805) {
                    let wt_icon = "clouds";
                    weathericon(wt_icon);
                    }
                    /*700번대 */
                    else {
                    let wt_icon = "smog";
                    weathericon(wt_icon);

                }
            }
        })
/*자외선 요청 코드*/

        $.ajax({
            type: "GET",
            url: "https://api.openweathermap.org/data/2.5/onecall?lat=37.532600&lon=127.024612&exclude=&appid=00d5b54c01eecba3641625ac2a6d6d54",
            data: {},
            success: function (response) {
                //자외선
                let uv = response["current"]["uvi"];

                $('.uvi').append(uv);
            }

        })


/* 썸네일 코드 */

        let imgArray= new Array();
        imgArray[0]="https://images.unsplash.com/photo-1578172745579-92c2de4f383a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODF8fGhvb2R8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1100&q=60";
        imgArray[1]="https://images.unsplash.com/photo-1610271340738-726e199f0258?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTAxfHxob29kfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1100&q=600";
        imgArray[2]="https://images.unsplash.com/photo-1575228245458-b25e14dd04a8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjJ8fGhvb2R8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1100&q=60";
        imgArray[3]="https://images.unsplash.com/photo-1578102718171-ec1f91680562?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzB8fGNvYXR8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1100&q=60";

        function showImage()
        {
            let imgNum=Math.round(Math.random() * imgArray.length);
            let objImg=document.getElementById("introImg");
            objImg.src=imgArray[imgNum];
        }
