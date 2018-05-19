exports.handler = function(event, context, callback) {
  var statCode = 500;
  if (typeof event["queryStringParameters"]["service"] !== 'undefined') {
    var provider;
    provider = event["queryStringParameters"]["service"];
  } else {
    provider = "bing";
  }


  if (provider == "bing") {
    if (typeof event["queryStringParameters"]["apicode"] !== 'undefined') {
      var apicode;
      apicode = event["queryStringParameters"]["apicode"];
    } else {
      apicode = "";
      if(typeof event["queryStringParameters"]["jonas"] !== 'undefined') {
        if(event["queryStringParameters"]["jonas"]=="itsme") {
          apicode = "AuYJlEX2HugxuIHOWhUlDDb14-fhBuNzBCmBrI9Q2MvFHQ4LoR_drvUuyC8MN7Zi";
        }
      }
      else {
        statCode = 403;
        errMsg = "No APIcode provided";
      }
    }
    if (typeof event["queryStringParameters"]["type"] !== 'undefined') {
      var type;
      type = event["queryStringParameters"]["type"];
    } else {
        type = "Aerial";
    }
    var api;
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "http://dev.virtualearth.net/REST/V1/"+"Imagery/Metadata/" + type + "?mapVersion=v1&output=json&key=" + apicode, true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send();
    var response = JSON.parse(xhttp.responseText);
    errMsg = response;
    if (false) {//response.http_code == 200) {
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
        bing_url2 = bing_url.replace("{subdomain}", subdomain);
        bing_url = bing_url2.replace("{quadkey}", toQuad(event["queryStringParameters"]["x"], event["queryStringParameters"]["y"], event["queryStringParameters"]["z"]));
        //echo $bing_url;
        base_url = bing_url;
    } else {
        console.log("Error: " + result.info.http_code + " " + result["errorDetails"][0]);
    }


  } else if (provider == "google") {
    if (typeof event["queryStringParameters"]["apicode"] !== 'undefined') {
        apicode = event["queryStringParameters"]["apicode"];
    } else {
        apicode = "AIzaSyApknIRkAftJA_tlfnH88O1_EICgQuSYZg";
        // 25k/24h limit !!
    }
    if (typeof event["queryStringParameters"]["type"] !== 'undefined') {
        type = event["queryStringParameters"]["type"];
    } else {
        type = "satellite";
    }
    if (typeof event["queryStringParameters"]["hres"] !== 'undefined') {
        if (event["queryStringParameters"]["hres"] == "1") {
            var scale;
            scale = "2";
            var res;
            res = "256x256";
        } else if (event["queryStringParameters"]["hres"] == "2") {
            res = "512x512";
            scale = "1";
        }
    } else {
        res = "256x256";
        scale = "1";
    }
    if (typeof event["queryStringParameters"]["format"] !== 'undefined') {
        var format;
        format = event["queryStringParameters"]["format"];
    } else {
        format = "png";
    }
    var base_url;
    base_url = "http://maps.googleapis.com/maps/api/staticmap?center=" + toLatLong(event["queryStringParameters"]["x"], event["queryStringParameters"]["y"], event["queryStringParameters"]["z"]) + "&maptype=" + type + "&zoom=" +
        event["queryStringParameters"]["z"] + "&size=" + res + "&scale=" + scale + "&sensor=false&format=" + format + "&key=" + apicode + "";

} else if (provider == "yandex") {
    if (typeof event["queryStringParameters"]["type"] !== 'undefined') {
        type = event["queryStringParameters"]["type"];
    } else {
        type = "sat";
    }
    base_url = "http://static-maps.yandex.ru/1.x/?lang=en-US&ll=" + toLatLong(event["queryStringParameters"]["x"], event["queryStringParameters"]["y"], event["queryStringParameters"]["z"]) + "&z=" + event["queryStringParameters"]["z"] + "&l=" + type + "&size=256,256";

}



        var baseurl;
        baseurl = "Imagery/Metadata/Aerial?mapVersion=v1&output=xml&key=";

        function rad2deg (angle) {
          return angle * 57.29577951308232 // angle / Math.PI * 180
        }

        function toQuad(tileX, tileY, levelOfDetail) {
            var quadKey;
            quadKey = "";
            var i;
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
            n = Math.pow(2, z);
            var lon_deg;
            lon_deg = (x + 0.5) / n * 360.0 - 180.0;
            var lat_deg;
            lat_deg = rad2deg(Math.atan(Math.sinh(Math.PI * (1 - 2 * (y + 0.5) / n))));
            var return_string;
            return_string = lat_deg + "," + lon_deg;
            return return_string;
        }
        function toLatLongMapbox(x, y, z) {
            var n;
            n = Math.pow(2, z);
            var lon_deg;
            lon_deg = (x + 0.5) / n * 360.0 - 180.0;
            var lat_deg;
            lat_deg = rad2deg(Math.atan(Math.sinh(Math.PI * (1 - 2 * (y + 0.5) / n))));
            var return_string;
            return_string = lat_deg + "/" + lon_deg;
            return return_string;
        }

      if(statCode == 200) {
        callback(null, {
          statusCode: statCode,
          body: base_url
          });
      } else {
        callback(null, {
          statusCode: statCode,
          body: errMsg
        });
      }
}
