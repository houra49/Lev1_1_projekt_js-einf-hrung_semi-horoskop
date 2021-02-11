function showHoroskop() {
    let txt = document.getElementById("text")
    let img = document.getElementById("horImg")
    let head = document.getElementById("horHead")
    let para = document.getElementById("horPara")
    let show = document.getElementById("showMonth")
    switch (txt.value) {
        case "March":
            img.src = "https://www.horoscopedates.com/img/icon_aries.png"
            head.innerHTML = `Your Horoscrope is Aries`
            para.innerHTML = `Today your patience might be tested when one or more of your projects gets put on hold by someone…`
            show.style.background = "rgb(57, 139, 221)"
            break;
        case "April":
            img.src = "https://www.horoscopedates.com/img/icon_taurus.png"
            head.innerHTML = `Your Horoscrope is Taurus`
            para.innerHTML = `Your intense energy makes you a great candidate for a leadership position right now, so if you are…`
            show.style.background = "rgb(57, 139, 221)"
            break;
        case "May":
            img.src = "https://www.horoscopedates.com/img/icon_gemini.png"
            head.innerHTML = `Your Horoscrope is Gemini`
            para.innerHTML = `If you aren't sure if you are ready to commit to a party, a date, a new job, or anything else that…`
            show.style.background = "rgb(57, 139, 221)"
            break;
        case "June":
            img.src = "https://www.horoscopedates.com/img/icon_cancer.png"
            head.innerHTML = `Your Horoscrope is Cancer`
            para.innerHTML = `Too many different elements in your life are overlapping with each other right now—and it's your….`
            show.style.background = "rgb(57, 139, 221)"
            break;
        case "July":
            img.src = "https://www.horoscopedates.com/img/icon_leo.png"
            head.innerHTML = `Your Horoscrope is Leo`
            para.innerHTML = `The issues you'll be dealing with today are very complicated ones—you will have to navigate your…`
            show.style.background = "rgb(57, 139, 221)"
            break;
        case "August":
            img.src = "https://www.horoscopedates.com/img/icon_virgo.png"
            head.innerHTML = `Your Horoscrope is Virgo`
            para.innerHTML = `You'll get along best with people who appeal to your more analytical side, today. Surprisingly, all…`
            show.style.background = "rgb(57, 139, 221)"
            break;
        case "September":
            img.src = "https://www.horoscopedates.com/img/icon_libra.png"
            head.innerHTML = `Your Horoscrope is Libra`
            para.innerHTML = `Pick a cultural event that's coming up and get some tickets for it today.`
            show.style.background = "rgb(57, 139, 221)"
            break;
        case "October":
            img.src = "https://www.horoscopedates.com/img/icon_scorpio.png"
            head.innerHTML = `Your Horoscrope is Scorpio`
            para.innerHTML = `Someone will challenge a belief that you've held for a very long time today—and they will say an…`
            show.style.background = "rgb(57, 139, 221)"
            break;
        case "November":
            img.src = "https://www.horoscopedates.com/img/icon_sagittarius.png"
            head.innerHTML = `Your Horoscrope is Sagittarius`
            para.innerHTML = `Someone in your life needs to step up and take on more responsibility—and you need to tell them to....`
            show.style.background = "rgb(57, 139, 221)"
            break;
        case "December":
            img.src = "https://www.horoscopedates.com/img/icon_capricorn.png"
            head.innerHTML = `Your Horoscrope is Capricorn`
            para.innerHTML = `Breaking the rules is not always a bad thing—especially if the rules limit your creativity. `
            show.style.background = "rgb(57, 139, 221)"
            break;
        case "January":
            img.src = "https://www.horoscopedates.com/img/icon_aquarius.png"
            head.innerHTML = `Your Horoscrope is Aquarius`
            para.innerHTML = `Have you been feeling a bit bored with your life lately? Well, good news! Today offers you a great…`
            show.style.background = "rgb(57, 139, 221)"
            break;
        case "February":
            img.src = "https://www.horoscopedates.com/img/icon_pisces.png"
            head.innerHTML = `Your Horoscrope is Pisces`
            para.innerHTML = `Communication is very important today—written, spoken, and even nonverbal body language will all…`
            show.style.background = "rgb(57, 139, 221)"
            break;
        default:
            head.innerHTML = `Please give a Month !`
            show.style.background = "rgb(57, 139, 221)"
    }

}