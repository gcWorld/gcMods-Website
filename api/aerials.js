exports.handler = function(event, context, callback) {
    
    eval(require("restclient.php.js"));
if (isset(_GET["service"])) {
    var _GET, provider;
    provider = _GET["service"];
} else {
    provider = "bing";
}
if (provider == "bing") {
    if (isset(_GET["apicode"])) {
        var apicode;
        apicode = _GET["apicode"];
    } else {
        apicode = "";
        //"AuYJlEX2HugxuIHOWhUlDDb14-fhBuNzBCmBrI9Q2MvFHQ4LoR_drvUuyC8MN7Zi"; //
    }
    if (isset(_GET["type"])) {
        var type;
        type = _GET["type"];
    } else {
        type = "Aerial";
    }
    var api;
    api = new RestClient({
        "base_url": "http://dev.virtualearth.net/REST/V1/"
    });
    var result;
    result = api.get("Imagery/Metadata/" + type + "?mapVersion=v1&output=json&key=" + apicode + "");
    // GET http://api.twitter.com/1.1/search/tweets.json?q=#php
    if (result.info.http_code == 200) {
        //$resp = array();
        var response;
        response = result.decode_response();
        //$resp = json_decode($response);
        //$response=$result->decode_response();
        var bing_url;
        bing_url = response.resourceSets[0].resources[0].imageUrl;
        var subdomain;
        subdomain = response.resourceSets[0].resources[0].imageUrlSubdomains;
        //var_dump($subdomain);
        var subdomain_nr;
        subdomain_nr = rand(0, count(subdomain) - 1);
        subdomain = subdomain[subdomain_nr];
        //echo $bing_url;
        var bing_url2;
        bing_url2 = str_replace("{subdomain}", subdomain, bing_url);
        bing_url = str_replace("{quadkey}", toQuad(_GET["x"], _GET["y"], _GET["z"]), bing_url2);
        //echo $bing_url;
        header("Location: " + bing_url);
    } else {
        console.log("Error: " + result.info.http_code + " " + result["errorDetails"][0]);
    }
} else if (provider == "google") {
    if (isset(_GET["apicode"])) {
        apicode = _GET["apicode"];
    } else {
        apicode = "AIzaSyApknIRkAftJA_tlfnH88O1_EICgQuSYZg";
        // 25k/24h limit !!
    }
    if (isset(_GET["type"])) {
        type = _GET["type"];
    } else {
        type = "satellite";
    }
    if (isset(_GET["hres"])) {
        if (_GET["hres"] == "1") {
            var scale;
            scale = "2";
            var res;
            res = "256x256";
        } else if (_GET["hres"] == "2") {
            res = "512x512";
            scale = "1";
        }
    } else {
        res = "256x256";
        scale = "1";
    }
    if (isset(_GET["format"])) {
        var format;
        format = _GET["format"];
    } else {
        format = "png";
    }
    var base_url;
    base_url = "http://maps.googleapis.com/maps/api/staticmap?center=" + toLatLong(_GET["x"], _GET["y"], _GET["z"]) + "&maptype=" + type + "&zoom=" +
        _GET["z"] + "&size=" + res + "&scale=" + scale + "&sensor=false&format=" + format + "&key=" + apicode + "";
    header("Location: " + base_url);
} else if (provider == "yandex") {
    if (isset(_GET["type"])) {
        type = _GET["type"];
    } else {
        type = "sat";
    }
    base_url = "http://static-maps.yandex.ru/1.x/?lang=en-US&ll=" + toLatLong(_GET["x"], _GET["y"], _GET["z"]) + "&z=" + _GET["z"] + "&l=" + type + "&size=256,256";
    header("Location: " + base_url);
} else if (provider == "mapbox") {
    if (isset(_GET["apicode"]) && _GET["apicode"] != "") {
        apicode = _GET["apicode"];
    } else {
        header("HTTP/1.0 403 Forbidden");
        console.log("403 Forbidden");
        throw new Exit();;
    }
    var x;
    x = _GET["x"];
    var y;
    y = _GET["y"];
    var z;
    z = _GET["z"];
    //$x=toLatLongMapbox(x,y,z);
    //$y="";
    base_url = "https://api.mapbox.com/v4/mapbox.satellite/" + z + "/" + x;
    base_url += "/" + y + ".png?access_token=" + apicode;
    /*
    echo "x is $xy";
    echo $base_url;
    die();//*/
    //header('Location: '.$base_url);
    var img;
    img = getcwd().
    "/" + z + "/" + x + "/" + y + ".jpg";
    if (!file_exists(dirname(img))) {
        mkdir(dirname(img), 511, true);
    }
    if (file_exists(img)) {
        var file;
        file = fopen("request.txt", "a");
        fwrite(file, time() + ":FROM CACHE\
            n\ ");
            fclose(file); console.log(getSslPage(base_url, z, x, y, img, false));
        }
        else {
            file = fopen("request.txt", "a");
            fwrite(file, time() + ":" + base_url + "\
                n\ ");
                fclose(file); console.log(getSslPage(base_url, z, x, y, img, true));
            }
        }
        function getSslPage(url, z, x, y, img, new) {
            var ch;
            ch = curl_init();
            curl_setopt(ch, CURLOPT_SSL_VERIFYPEER, false);
            curl_setopt(ch, CURLOPT_HEADER, false);
            curl_setopt(ch, CURLOPT_FOLLOWLOCATION, true);
            curl_setopt(ch, CURLOPT_URL, url);
            curl_setopt(ch, CURLOPT_REFERER, url);
            curl_setopt(ch, CURLOPT_RETURNTRANSFER, true);
            var result;
            result = curl_exec(ch);
            var ctype;
            ctype = "image/jpeg";
            header("Content-type: " + ctype);
            curl_close(ch);
            if (new) {
                var fimg;
                fimg = fopen(img, "w+");
                fwrite(fimg, result);
                fclose(fimg);
            } else {
                var fimgr;
                fimgr = fopen(img, "r");
                result = fread(fimgr, filesize(fimg));
                fclose(fimgr);
            }
            return result;
        }
        //header("Content-type: image/jpeg");
        var baseurl;
        baseurl = "Imagery/Metadata/Aerial?mapVersion=v1&output=xml&key=";
        function toQuad(tileX, tileY, levelOfDetail) {
            var quadKey;
            quadKey = "";
            var i;
            __loop1:
                for (i = levelOfDetail; i > 0; i--) {
                    var digit;
                    digit = "0";
                    var mask;
                    mask = 1 << i - 1;
                    if ((tileX & mask) != 0) {
                        digit++;
                    }
                    if ((tileY & mask) != 0) {
                        digit++;
                        digit++;
                    }
                    quadKey += digit;
                }
            return quadKey;
        }
        function toLatLong(x, y, z) {
            var n;
            n = pow(2, z);
            var lon_deg;
            lon_deg = (x + 0.5) / n * 360.0 - 180.0;
            var lat_deg;
            lat_deg = rad2deg(atan(sinh(pi() * (1 - 2 * (y + 0.5) / n))));
            var return_string;
            return_string = lat_deg + "," + lon_deg;
            return return_string;
        }
        function toLatLongMapbox(x, y, z) {
            var n;
            n = pow(2, z);
            var lon_deg;
            lon_deg = (x + 0.5) / n * 360.0 - 180.0;
            var lat_deg;
            lat_deg = rad2deg(atan(sinh(pi() * (1 - 2 * (y + 0.5) / n))));
            var return_string;
            return_string = lat_deg + "/" + lon_deg;
            return return_string;
        }

                        

    
    callback(null, {
    statusCode: 200,
    body: base_url
    });
}
