(function () {
    var _id = "d1cc33e276ae1fbff1d30489359f8b27";

    // Удалите старые элементы таймера, если они существуют
    var oldTimer = document.getElementById("timer" + _id);
    if (oldTimer) {
        oldTimer.parentNode.removeChild(oldTimer);
    }

    document.write("<div id='timer" + _id + "' style='min-width:266px;height:62px;'></div>");
    var _t = document.createElement("script");
    _t.src = "//megatimer.ru/timer/timer.min.js?v=1";
    var countDownDate = new Date("Dec 1, 2025 17:00:00 UTC").getTime();
    var _f = function (_k) {
        var l = new MegaTimer(_id, {
            "view": [1, 1, 1, 1],
            "type": {
                "currentType": "1",
                "params": {
                    "usertime": true,
                    "tz": "3",
                    "utc": countDownDate
                }
            },
            "design": {
                "type": "circle",
                "params": {
                    "width": "1",
                    "radius": "29",
                    "line": "solid",
                    "line-color": "#d6a949",
                    "background": "solid",
                    "background-color": "#ffffff",
                    "direction": "direct",
                    "number-font-family": {
                        "family": "Port Lligat Slab",
                        "link": "<link href='//fonts.googleapis.com/css?family=Port+Lligat+Slab' rel='stylesheet' type='text/css'>"
                    },
                    "number-font-size": "18",
                    "number-font-color": "#ffffff",
                    "separator-margin": "3",
                    "separator-on": false,
                    "separator-text": ":",
                    "text-on": true,
                    "text-font-family": {
                        "family": "Open Sans",
                        "link": "<link href='//fonts.googleapis.com/css?family=Open+Sans&subset=latin,cyrillic' rel='stylesheet' type='text/css'>"
                    },
                    "text-font-size": "14",
                    "text-font-color": "#ffffff"
                }
            },
            "designId": 8,
            "theme": "black",
            "width": 266,
            "height": 62
        });
        if (_k != null) l.run();
    };
    _t.onload = _f;
    _t.onreadystatechange = function () {
        if (_t.readyState == "loaded") _f(1);
    };
    var _h = document.head || document.getElementsByTagName("head")[0];
    _h.appendChild(_t);
}).call(this);
