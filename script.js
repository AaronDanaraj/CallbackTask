let count = document.getElementById("ctdown");

// Countdown utilizing callback hell

(() => {
    count.innerHTML = "START!";
        setTimeout(function() {
         count.innerHTML = 10;
             setTimeout(function() {
             count.innerHTML = 9;
                setTimeout(function() {
                count.innerHTML = 8;
                    setTimeout(function() {
                    count.innerHTML = 7;
                        setTimeout(function() {
                        count.innerHTML = 6;
                            setTimeout(function() {
                            count.innerHTML = 5;
                                setTimeout(function() {
                                count.innerHTML = 4;
                                    setTimeout(function() {
                                    count.innerHTML = 3;
                                        setTimeout(function() {
                                        count.innerHTML = 2;
                                            setTimeout(function() {
                                            count.innerHTML = 1;
                                                setTimeout(function() { count.innerHTML = "HAPPY INDEPENDENCE DAY!!!"; },1000)
                                            },1000)
                                        },1000)
                                    },1000)
                                },1000)
                            },1000)
                        },1000)
                    },1000)
                },1000)
            },1000)
        },1000)
    })
();
