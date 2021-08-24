
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


                    // console.log(weather, description, location, Math.floor(temp - 273), Math.floor(feels_like - 273), Math.floor(temp_max - 273), Math.floor(temp_min) - 273);
                    $('.temp').append(temp);
                    $('.location').append(location);
                    $('.temp-min').append(temp_min);
                    $('.temp-max').append(temp_max);
                    $('.humidity').append(humidity);
                    
                if (wt_id > 800){
                    let wt_icon = "thunderstorm";
                    // let iconUrl = '<img src="https://openweathermap.org/img/wn/'+ wt_icon +'.png" alt="'+ description +'">'/
                   let iconUrl = '<img src="../static/img/'+ wt_icon +'.svg" alt="'+ description +'">'
                    $('.wt-icon').html(iconUrl);
                }
                }

            }
        )


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
