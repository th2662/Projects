<!--스키니-->
let V = new Array();
V[0] = "https://images.unsplash.com/photo-1523419951196-9c85a25cd485?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTE0fHxza2lubnklMjBqZWFuc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1100&q=60";
V[1] = "https://images.unsplash.com/photo-1607039233937-86eb0bef557f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHNraW5ueSUyMGplYW5zfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1100&q=60";
V[2] = "https://images.unsplash.com/photo-1533825828907-94649041aa67?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c2tpbm55JTIwamVhbnN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1100&q=60";

<!--슬렉스-->
let W = new Array();
W[0] = "https://images.unsplash.com/photo-1613590171270-cb70d833aa02?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTR8fHRyb3VzZXJzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1100&q=60";
W[1] = "https://images.unsplash.com/photo-1542595734-49653d33e0eb?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTE3fHx0cm91c2Vyc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1100&q=60";
W[2] = "https://images.unsplash.com/photo-1604136172384-b2e9c43271ec?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDZ8fHRyb3VzZXJzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1100&q=60";

<!--코트-->
let X = new Array();
X[0] = "https://images.unsplash.com/photo-1614242144275-93dc5724fb07?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGNvYXR8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1100&q=60";
X[1] = "https://images.unsplash.com/photo-1612462766564-895ea3388d2b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y29hdHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1100&q=60";
X[2] = "https://images.unsplash.com/photo-1605895640528-66bc5374504e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzJ8fGNvYXR8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1100&q=60";
X[3] = "https://images.unsplash.com/photo-1578102718171-ec1f91680562?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzB8fGNvYXR8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1100&q=60";

<!--후드-->
let Y = new Array();
Y[0] = "https://images.unsplash.com/photo-1575228245458-b25e14dd04a8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjJ8fGhvb2R8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1100&q=60";
Y[1] = "https://images.unsplash.com/photo-1610271340738-726e199f0258?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTAxfHxob29kfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1100&q=600";
Y[2] = "https://images.unsplash.com/photo-1578172745579-92c2de4f383a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODF8fGhvb2R8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1100&q=60";

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

                /* 아이콘 파일 주소 작성하는 함수*/
                function weathericon(wt_icon) {
                    let iconUrl = '<img src="../static/img/' + wt_icon + '.svg" alt="' + description + '" class="svg">'
                    $('.wt-icon').html(iconUrl);

                }
                /* 배경 파일 작성하는 함수*/

                function weatherbg(wt_icon) {
                    let bgUrl = 'url("../static/img/'+ wt_icon +'_bg.jpg")'
                    $('body').css("background-image", bgUrl);
                }

                /* id에 따른 icon 이름 정해주고 위의 함수를 실행시키는 조건문 */
                if (200 <= wt_id & wt_id <300) {
                    let wt_icon = "thunderstorm";
                    weathericon(wt_icon);
                    weatherbg(wt_icon)
                    }
                    else if (300 <= wt_id & wt_id <400) {
                    let wt_icon = "drizzle";
                    weathericon(wt_icon);
                    weatherbg(wt_icon)
                    }
                    else if (500 <= wt_id & wt_id <600) {
                    let wt_icon = "rain";
                    weathericon(wt_icon);
                    weatherbg(wt_icon)
                    }
                    else if (600 <= wt_id & wt_id <700) {
                    let wt_icon = "snow";
                    weathericon(wt_icon);
                    weatherbg(wt_icon)
                    }
                    else if (wt_id == 800) {
                    let wt_icon = "clear";
                    weathericon(wt_icon);
                    weatherbg(wt_icon)
                    }
                    else if (801 <= wt_id & wt_id <805) {
                    let wt_icon = "clouds";
                    weathericon(wt_icon);
                    weatherbg(wt_icon)
                    }
                    /*700번대 */
                    else {
                    let wt_icon = "smog";
                    weathericon(wt_icon);
                    weatherbg(wt_icon)

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

                let A1 = X.concat(X);
                let A2 = Y.concat(Y);
                let A3 = V.concat(W);

                function showImage0(param) {
                    for (i=0, i<param.length; i++;){
                        console.log(params[i])
                    }
                }


                function showImage1() {
                    let imgNum = Math.round(Math.random() * A1.length);
                    let objImg = document.getElementById("introImg1");
                    objImg.src = A1[imgNum];
                }

                function showImage2() {
                    let imgNum = Math.round(Math.random() * A2.length);
                    let objImg = document.getElementById("introImg2");
                    objImg.src = A2[imgNum];
                }

                function showImage3() {
                    let imgNum = Math.round(Math.random() * A3.length);
                    let objImg = document.getElementById("introImg3");
                    objImg.src = A3[imgNum];
                }

