let tg = window.Telegram.WebApp;
tg.expand();

tg.MainButton.textColor = "#FFFFFF"
tg.MainButton.color = "#FC3005"

// -----------------------1--------------------------

let item1 = "";
let n_count1 = 0;

let num1 = "";
let n_lom1 = 0;


let count1 = document.getElementById("count1");
let rbtn1 = document.getElementById("rbtn1");
let abtn1 = document.getElementById("abtn1");

abtn1.addEventListener("click", function () {
    count1.innerText = n_count1 += 1;
    count1.style.display = "";
    tg.MainButton.setText("Оплата");
    tg.MainButton.show();
    item1 = "ID_1/" + count1.innerText;

});
rbtn1.addEventListener("click", function () {
    if (n_count1 > 0) {
        count1.innerText = n_count1 -= 1;
    }
    count1.style.display = "";
    item1 = "ID_1/" + count1.innerText;
    tg.MainButton.setText("Оплата");
    tg.MainButton.show();
});
// ------------------2--------------------

count2 = document.getElementById("count2");
rbtn2 = document.getElementById("rbtn2");
abtn2 = document.getElementById("abtn2");
let item2 = "";
let n_count2 = 0;
rbtn2.addEventListener("click", function () {
    if (n_count2 > 0) {
        count2.innerText = n_count2 -= 1;
    }

    count2.style.display = "";
    item2 = "ID_2/" + count2.innerText;
    tg.MainButton.setText("Оплата");
    tg.MainButton.show();
});


abtn2.addEventListener("click", function () {
    count2.innerText = n_count2 += 1;
    count2.style.display = "";
    item2 = "ID_2/" + count2.innerText;
    tg.MainButton.setText("Оплата");
    tg.MainButton.show();
});

// ------------------3--------------------

count3 = document.getElementById("count3");
rbtn3 = document.getElementById("rbtn3");
abtn3 = document.getElementById("abtn3");
let item3 = "";
let n_count3 = 0;
rbtn3.addEventListener("click", function () {
    if (n_count3 > 0) {
        count3.innerText = n_count3 -= 1;
    }

    count3.style.display = "";
    item3 = "ID_3/" + count3.innerText;

    tg.MainButton.setText("Оплата");
    tg.MainButton.show();
});

abtn3.addEventListener("click", function () {
    count3.innerText = n_count3 += 1;
    count3.style.display = "";
    item3 = "ID_3/" + count3innerText;
    tg.MainButton.setText("Оплата");
    tg.MainButton.show();
});


// -------------------4-------------------

count4 = document.getElementById("count4");
rbtn4 = document.getElementById("rbtn4");
abtn4 = document.getElementById("abtn4");
let item4 = "";
let n_count4 = 0;
rbtn4.addEventListener("click", function () {
    if (n_count4 > 0) {
        count4.innerText = n_count4 -= 1;
    }

    count4.style.display = "";
    item4 = "ID_4/" + count4.innerText;

    tg.MainButton.setText("Оплата");
    tg.MainButton.show();
});

abtn4.addEventListener("click", function () {
    count4.innerText = n_count4 += 1;
    count4.style.display = "";
    item4 = "ID_4/" + count4innerText;
    tg.MainButton.setText("Оплата");
    tg.MainButton.show();
});


// ------------------5--------------------

count5 = document.getElementById("count5");
rbtn5 = document.getElementById("rbtn5");
abtn5 = document.getElementById("abtn5");
let item5 = "";
let n_count5 = 0;
rbtn5.addEventListener("click", function () {
    if (n_count5 > 0) {
        count5.innerText = n_count5 -= 1;
    }

    count5.style.display = "";
    item5 = "ID_5/" + count5.innerText;

    tg.MainButton.setText("Оплата");
    tg.MainButton.show();
});

abtn5.addEventListener("click", function () {
    count5.innerText = n_count5 += 1;
    count5.style.display = "";
    item5 = "ID_5/" + count5innerText;
    tg.MainButton.setText("Оплата");
    tg.MainButton.show();
});

// ------------------6--------------------

count6 = document.getElementById("count6");
rbtn6 = document.getElementById("rbtn6");
abtn6 = document.getElementById("abtn6");
let item6 = "";
let n_count6 = 0;
rbtn6.addEventListener("click", function () {
    if (n_count6 > 0) {
        count6.innerText = n_count6 -= 1;
    }
});
    count6.style.display = "";
    item6 = "ID_6/" + count6.innerText;
    tg.MainButton.setText("Оплата");
    tg.MainButton.show();


abtn6.addEventListener("click", function () {
    count6.innerText = n_count6 += 1;
    count6.style.display = "";
    item6 = "ID_6/" + count6.innerText;
    tg.MainButton.setText("Оплата");
    tg.MainButton.show();
});


// ------------------7--------------------

count7 = document.getElementById("count7");
rbtn7 = document.getElementById("rbtn7");
abtn7 = document.getElementById("abtn7");
let item7 = "";
let n_count7 = 0;
rbtn7.addEventListener("click", function () {
    if (n_count7 > 0) {
        count7.innerText = n_count7 -= 1;
    }

    count7.style.display = "";
    item7 = "ID_7/" + count7.innerText;

    tg.MainButton.setText("Оплата");
    tg.MainButton.show();

});

abtn7.addEventListener("click", function () {
    count7.innerText = n_count7 += 1;
    count7.style.display = "";
    item7 = "ID_7/" + count7innerText;
    tg.MainButton.setText("Оплата");
    tg.MainButton.show();
});

// ------------------8--------------------

count8 = document.getElementById("count8");
rbtn8 = document.getElementById("rbtn8");
abtn8 = document.getElementById("abtn8");
let item8 = "";
let n_count8 = 0;
rbtn8.addEventListener("click", function () {
    if (n_count8 > 0) {
        count8.innerText = n_count8 -= 1;
    }

    count8.style.display = "";
    item8 = "ID_8/" + count8.innerText;

    tg.MainButton.setText("Оплата");
    tg.MainButton.show();

});

abtn8.addEventListener("click", function () {
    count8.innerText = n_count8 += 1;
    count8.style.display = "";
    item8 = "ID_8/" + count8.innerText;
    tg.MainButton.setText("Оплата");
    tg.MainButton.show();
});

count9 = document.getElementById("count9");
rbtn9 = document.getElementById("rbtn9");
abtn9 = document.getElementById("abtn9");
let item9 = "";
let n_count9 = 0;
rbtn9.addEventListener("click", function () {
    if (n_count9 > 0) {
        count9.innerText = n_count9 -= 1;
    }

    count9.style.display = "";
    item9 = "ID_9/" + count9.innerText;
    tg.MainButton.setText("Оплата");
    tg.MainButton.show();
});


abtn9.addEventListener("click", function () {
    count9.innerText = n_count9 += 1;
    count9.style.display = "";
    item9 = "ID_9/" + count9.innerText;
    tg.MainButton.setText("Оплата");
    tg.MainButton.show();
});

// ------------------3--------------------

count0 = document.getElementById("count0");
rbtn0 = document.getElementById("rbtn0");
abtn0 = document.getElementById("abtn0");
let item0 = "";
let n_count0 = 0;
rbtn0.addEventListener("click", function () {
    if (n_count0 > 0) {
        count0.innerText = n_count0 -= 1;
    }

    count0.style.display = "";
    item0 = "ID_0/" + count0.innerText;

    tg.MainButton.setText("Оплата");
    tg.MainButton.show();
});


abtn0.addEventListener("click", function () {
    count0.innerText = n_count0 += 1;
    count0.style.display = "";
    item0 = "ID_0/" + count0.innerText;
    tg.MainButton.setText("Оплата");
    tg.MainButton.show();
});

// -------------------4-------------------

countb = document.getElementById("countb");
rbtnb = document.getElementById("rbtnb");
abtnb = document.getElementById("abtnb");
let itemb = "";
let n_countb = 0;
rbtnb.addEventListener("click", function () {
    if (n_countb > 0) {
        countb.innerText = n_countb -= 1;
    }

    countb.style.display = "";
    itemb = "ID_b/" + countb.innerText;

    tg.MainButton.setText("Оплата");
    tg.MainButton.show();
});

abtnb.addEventListener("click", function () {
    countb.innerText = n_countb += 1;
    countb.style.display = "";
    itemb = "ID_b/" + countb.innerText;
    tg.MainButton.setText("Оплата");
    tg.MainButton.show();
});


// ------------------5--------------------

counta = document.getElementById("counta");
rbtna = document.getElementById("rbtna");
abtna = document.getElementById("abtna");
let itema = "";
let n_counta = 0;
rbtna.addEventListener("click", function () {
    if (n_counta > 0) {
        counta.innerText = n_counta -= 1;
    }

    counta.style.display = "";
    itema = "ID_a/" + counta.innerText;

    tg.MainButton.setText("Оплата");
    tg.MainButton.show();
});

abtna.addEventListener("click", function () {
    counta.innerText = n_counta += 1;
    counta.style.display = "";
    itema = "ID_a/" + countainnerText;
    tg.MainButton.setText("Оплата");
    tg.MainButton.show();
});

// ------------------6--------------------

countc = document.getElementById("countc");
rbtnc = document.getElementById("rbtnc");
abtnc = document.getElementById("abtnc");
let itemc = "";
let n_countc = 0;
rbtnc.addEventListener("click", function () {
    if (n_countc > 0) {
        countc.innerText = n_countc -= 1;
    }
});
    countc.style.display = "";
    itemc = "ID_c/" + countc.innerText;
    tg.MainButton.setText("Оплата");
    tg.MainButton.show();


abtnc.addEventListener("click", function () {
    countc.innerText = n_countc += 1;
    countc.style.display = "";
    itemc = "ID_c/" + countc.innerText;
    tg.MainButton.setText("Оплата");
    tg.MainButton.show();
});

countd = document.getElementById("countd");
rbtnd = document.getElementById("rbtnd");
abtnd = document.getElementById("abtnd");
let itemd = "";
let n_countd = 0;
rbtnd.addEventListener("click", function () {
    if (n_countd > 0) {
        countd.innerText = n_countd -= 1;
    }
});
    countd.style.display = "";
    itemd = "ID_c/" + countd.innerText;
    tg.MainButton.setText("Оплата");
    tg.MainButton.show();


abtnd.addEventListener("click", function () {
    countd.innerText = n_countd += 1;
    countd.style.display = "";
    itemd = "ID_d/" + countd.innerText;
    tg.MainButton.setText("Оплата");
    tg.MainButton.show();
});

let lom1 = document.getElementById("lom1");
let pbtn1 = document.getElementById("pbtn1");
let adbtn1 = document.getElementById("adbtn1");
lom1_count = 0
adbtn1.addEventListener("click", function () {
    lom1.innerText = lom1_count += 1;
    lom1.style.display = "";
    tg.MainButton.setText("Оплата");
    tg.MainButton.show();
    num1 = "ID_1/" + count1.innerText;

});
pbtn1.addEventListener("click", function () {
    if (n_lom1 > 0) {
        lom1.innerText = lom1_count -= 1;
    }
    lom1.style.display = "";
    num1 = "ID_1/" + lom1.innerText;
    tg.MainButton.setText("Оплата");
    tg.MainButton.show();
});

let lom2 = document.getElementById("lom2");
let pbtn2 = document.getElementById("pbtn2");
let adbtn2 = document.getElementById("adbtn2");
lom2_count = 0
adbtn2.addEventListener("click", function () {
    lom2.innerText = lom2_count += 1;
    lom2.style.display = "";
    tg.MainButton.setText("Оплата");
    tg.MainButton.show();
    num2 = "ID_2/" + count2.innerText;

});
pbtn2.addEventListener("click", function () {
    if (lom2_count > 0) {
        lom2.innerText = lom2_count -= 1;
    }
    lom2.style.display = "";
    num2 = "ID_2/" + lom2_count.innerText;
    tg.MainButton.setText("Оплата");
    tg.MainButton.show();
});

let lom3 = document.getElementById("lom3");
let pbtn3 = document.getElementById("pbtn3");
let adbtn3 = document.getElementById("adbtn3");
lom3_count = 0
adbtn3.addEventListener("click", function () {
    lom3.innerText = lom3_count += 1;
    lom3.style.display = "";
    tg.MainButton.setText("Оплата");
    tg.MainButton.show();
    num3 = "ID_3/" + count3.innerText;

});
pbtn3.addEventListener("click", function () {
    if (lom3_count > 0) {
        lom3.innerText = lom3_count -= 1;
    }
    lom3.style.display = "";
    num3 = "ID_3/" + lom3_count.innerText;
    tg.MainButton.setText("Оплата");
    tg.MainButton.show();
});

let lom4 = document.getElementById("lom4");
let pbtn4 = document.getElementById("pbtn4");
let adbtn4 = document.getElementById("adbtn4");
lom4_count = 0
adbtn4.addEventListener("click", function () {
    lom4.innerText = lom4_count += 1;
    lom4.style.display = "";
    tg.MainButton.setText("Оплата");
    tg.MainButton.show();
    num4 = "ID_4/" + lom4_count.innerText;

});
pbtn4.addEventListener("click", function () {
    if (lom4_count > 0) {
        lom4.innerText = lom4_count -= 1;
    }
    lom4.style.display = "";
    num4 = "ID_4/" + lom4_count.innerText;
    tg.MainButton.setText("Оплата");
    tg.MainButton.show();
});

let lom5 = document.getElementById("lom5");
let pbtn5 = document.getElementById("pbtn5");
let adbtn5 = document.getElementById("adbtn5");
lom5_count = 0
adbtn5.addEventListener("click", function () {
    lom5.innerText = lom5_count += 1;
    lom5.style.display = "";
    tg.MainButton.setText("Оплата");
    tg.MainButton.show();
    num5 = "ID_5/" + lom5_count.innerText;

});
pbtn5.addEventListener("click", function () {
    if (lom5_count > 0) {
        lom5.innerText = lom5_count -= 1;
    }
    lom5.style.display = "";
    num5 = "ID_5/" + lom5_count.innerText;
    tg.MainButton.setText("Оплата");
    tg.MainButton.show();
});

let lom6 = document.getElementById("lom6");
let pbtn6 = document.getElementById("pbtn6");
let adbtn6 = document.getElementById("adbtn6");
lom6_count = 0
adbtn6.addEventListener("click", function () {
    lom6.innerText = lom6_count += 1;
    lom6.style.display = "";
    tg.MainButton.setText("Оплата");
    tg.MainButton.show();
    num6 = "ID_6/" + lom6_count.innerText;

});
pbtn6.addEventListener("click", function () {
    if (lom6_count > 0) {
        lom6.innerText = lom6_count -= 1;
    }
    lom6.style.display = "";
    num6 = "ID_6/" + lom6_count.innerText;
    tg.MainButton.setText("Оплата");
    tg.MainButton.show();
});

Telegram.WebApp.onEvent("mainButtonClicked", function () {
    data = item1 + "|" + item2 + "|" + item3 + "|" + item4 + "|" + item5 + "|" + item6 + "|" + item7 + "|" + item8 + "|" + item9
    + "|" + num1 + num2 + num3 + num4 + num5 + num6
    tg.sendData(data);
})