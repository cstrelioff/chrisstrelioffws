/*
 * csws.js
 * Copyright (C) 2015 Christopher C. Strelioff <chris.strelioff@gmail.com>
 *
 * Distributed under terms of the MIT license.
 */

window.onload = function () {
    set_email();
}

function set_email() {
    var os = 42;
    var cs = [151, 139, 147, 150, 158, 153, 100, 141, 146, 156, 147, 157,
              88, 157, 158, 156, 143, 150, 147, 153, 144, 144, 106, 145, 151,
              139, 147, 150, 88, 141, 153, 151];
    cs_str = "";
    for (i=0; i < cs.length; i++ ) {
        cs_str += String.fromCharCode(cs[i]-os);
    }

    var a_email = document.getElementById("email");
    a_email.setAttribute("href", cs_str);
}

