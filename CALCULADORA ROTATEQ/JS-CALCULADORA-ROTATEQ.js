  <script>
window.onload = function () {
    //change header background image every 9 seconds
    /*var bg_images = ['img/bg0.png','img/bg1.png', 'img/bg2.png', 'img/bg3.png', 'img/bg4.png'];
    var bg = document.getElementsByClassName("background")[0];

    var i = 0;
    setInterval(function() {
          bg.style.backgroundImage = "url(" + bg_images[i] + ")";
          i = i + 1;
          if (i == bg_images.length) {
            i =  0;
          }
    }, 9000);*/

    //dates
    var input = document.getElementById('datePicker');
    var input1 = document.getElementById('datePicker1');
    var input2 = document.getElementById('datePicker2');
    var input3 = document.getElementById('datePicker3');
    var input4 = document.getElementById('datePicker4');

    document.getElementById('dosisBtn1').addEventListener('click', appear1);
    document.getElementById('dosisBtn2').addEventListener('click', appear2);
    document.getElementById('dosisBtn3').addEventListener('click', appear3);

    function appear1() {
        document.getElementById("primera").classList.remove("invisible");
        document.getElementById("primera").classList.add("visible");
        document.getElementById("segunda").classList.remove("visible");
        document.getElementById("segunda").classList.add("invisible");
        document.getElementById("tercera").classList.remove("visible");
        document.getElementById("tercera").classList.add("invisible");

        document.getElementById("dosisBtn1").setAttribute("class", "btn-active");
        document.getElementById("dosisBtn2").setAttribute("class", "button");
        document.getElementById("dosisBtn3").setAttribute("class", "button");

        document.getElementsByClassName("primera-output")[0].classList.remove('visible');
        document.getElementsByClassName("primera-output")[0].classList.add('invisible');

        document.getElementById("background").classList.remove("tercera");
        document.getElementById("background").classList.remove("segunda");
        document.getElementById("background").classList.add("primera");

        if (typeof input._flatpickr !== "undefined") {
            //set initial values in flatpcker
            document.getElementById("datePicker")._flatpickr.clear();
            document.getElementById("datePicker1")._flatpickr.clear();
            document.getElementById("datePicker2")._flatpickr.clear();
            document.getElementById("datePicker3")._flatpickr.clear();
            document.getElementById("datePicker4")._flatpickr.clear();
        } else {
            //set initial values not flatpcker
            document.getElementById("datePicker").value = "";
            document.getElementById("datePicker1").value = "";
            document.getElementById("datePicker2").value = "";
            document.getElementById("datePicker3").value = "";
            document.getElementById("datePicker4").value = "";
        }
    }

    function appear2() {
        document.getElementById("segunda").classList.remove("invisible");
        document.getElementById("segunda").classList.add("visible");
        document.getElementById("primera").classList.remove("visible");
        document.getElementById("primera").classList.add("invisible");
        document.getElementById("tercera").classList.remove("visible");
        document.getElementById("tercera").classList.add("invisible");

        document.getElementById("dosisBtn2").setAttribute("class", "btn-active");
        document.getElementById("dosisBtn1").setAttribute("class", "button");
        document.getElementById("dosisBtn3").setAttribute("class", "button");

        document.getElementsByClassName("segunda-output")[0].classList.remove('visible');
        document.getElementsByClassName("segunda-output")[0].classList.add('invisible');

        document.getElementById("background").classList.remove("primera");
        document.getElementById("background").classList.remove("tercera");
        document.getElementById("background").classList.add("segunda");

        if (typeof input._flatpickr !== "undefined") {
            //set initial values in flatpcker
            document.getElementById("datePicker")._flatpickr.clear();
            document.getElementById("datePicker1")._flatpickr.clear();
            document.getElementById("datePicker2")._flatpickr.clear();
            document.getElementById("datePicker3")._flatpickr.clear();
            document.getElementById("datePicker4")._flatpickr.clear();
        } else {
            //set initial values not flatpcker
            document.getElementById("datePicker").value = "";
            document.getElementById("datePicker1").value = "";
            document.getElementById("datePicker2").value = "";
            document.getElementById("datePicker3").value = "";
            document.getElementById("datePicker4").value = "";
        }

    }

    function appear3() {
        document.getElementById("tercera").classList.remove("invisible");
        document.getElementById("tercera").classList.add("visible");
        document.getElementById("primera").classList.remove("visible");
        document.getElementById("primera").classList.add("invisible");
        document.getElementById("segunda").classList.remove("visible");
        document.getElementById("segunda").classList.add("invisible");

        document.getElementById("dosisBtn3").setAttribute("class", "btn-active");
        document.getElementById("dosisBtn1").setAttribute("class", "button");
        document.getElementById("dosisBtn2").setAttribute("class", "button");

        document.getElementsByClassName("tercera-output")[0].classList.remove('visible');
        document.getElementsByClassName("tercera-output")[0].classList.add('invisible');

        document.getElementById("background").classList.remove("primera");
        document.getElementById("background").classList.remove("segunda");
        document.getElementById("background").classList.add("tercera");

        if (typeof input._flatpickr !== "undefined") {
            //set initial values in flatpcker
            document.getElementById("datePicker")._flatpickr.clear();
            document.getElementById("datePicker1")._flatpickr.clear();
            document.getElementById("datePicker2")._flatpickr.clear();
            document.getElementById("datePicker3")._flatpickr.clear();
            document.getElementById("datePicker4")._flatpickr.clear();
        } else {
            //set initial values not flatpcker
            document.getElementById("datePicker").value = "";
            document.getElementById("datePicker1").value = "";
            document.getElementById("datePicker2").value = "";
            document.getElementById("datePicker3").value = "";
            document.getElementById("datePicker4").value = "";
        }
    }

    //Show dates when the input changes
    document.getElementById("datePicker").onchange = function () {
        if (document.getElementById("datePicker").value != "") { primeraDosis(); }
    };

    document.getElementById("datePicker1").onchange = function () {
        if (document.getElementById("datePicker1").value != "" && document.getElementById("datePicker2").value != "") { segundaDosis(); }
    };

    document.getElementById("datePicker2").onchange = function () {
        if (document.getElementById("datePicker1").value != "" && document.getElementById("datePicker2").value != "") { segundaDosis(); }
    };

    document.getElementById("datePicker3").onchange = function () {
        if (document.getElementById("datePicker3").value != "" && document.getElementById("datePicker4").value != "") { terceraDosis(); }
    };

    document.getElementById("datePicker4").onchange = function () {
        if (document.getElementById("datePicker3").value != "" && document.getElementById("datePicker4").value != "") { terceraDosis(); }
    };

    //function to add days to a given date
    function addDays(startDate, numberOfDays) {
        var firstDate = new Date(
            startDate.getFullYear(),
            startDate.getMonth(),
            startDate.getDate() + numberOfDays
        );
        return firstDate;
    }

    //function to calculate week number from the birthdate
    function calculateWeeks(weeksDate, fromDate) {
        var differenceInMilisecond = weeksDate.valueOf() - fromDate.valueOf();
        var millisecondsToDays = Math.floor(differenceInMilisecond / (24 * 60 * 60 * 1000));
        var daysToWeek = Math.floor(millisecondsToDays / 7);

        return daysToWeek + 1;
    }
    //Two digits dates
    Date.prototype.getMonthFormatted = function () {
        var month = this.getMonth() + 1;
        return month < 10 ? '0' + month : month;
    };

    Date.prototype.getDateFormatted = function () {
        var date = this.getDate();
        return date < 10 ? '0' + date : date;
    };

    //the output date will be always the SECOND (MARTES) day of the week
    function dateToTuesday(initDate) {
        var weekDayNum = initDate.getDay(); //get the day position (number 0-6) in the week
        console.log('*******week Day number ' + weekDayNum);
        var diff, dayOut;

        if (weekDayNum == 0) { //if it is sunday (position 0 in the week)
            diff = weekDayNum + 1; //0-5=-5  
            dayOut = new Date(initDate.getTime() + diff * (24 * 60 * 60 * 1000));
            console.log('*******day result ZER0 ' + dayOut);
        }

        if (weekDayNum == 6) { //if it is sunday (position 0 in the week)
            diff = weekDayNum - 4; //0-5=-5  
            dayOut = new Date(initDate.getTime() + diff * (24 * 60 * 60 * 1000));
            console.log('*******day result ZER0 ' + dayOut);
        }

        if (weekDayNum == 1) { //if it is sunday (position 0 in the week)
            diff = weekDayNum - 1; //0-5=-5  
            dayOut = new Date(initDate.getTime() + diff * (24 * 60 * 60 * 1000));
            console.log('*******day result ZER0 ' + dayOut);
        }

        if (weekDayNum == 2) { //if it is sunday (position 0 in the week)
            diff = weekDayNum - 2; //0-5=-5  
            dayOut = new Date(initDate.getTime() + diff * (24 * 60 * 60 * 1000));
            console.log('*******day result ZER0 ' + dayOut);
        }

        if (weekDayNum == 3) { //if it is sunday (position 0 in the week)
            diff = weekDayNum - 3; //0-5=-5  
            dayOut = new Date(initDate.getTime() + diff * (24 * 60 * 60 * 1000));
            console.log('*******day result ZER0 ' + dayOut);
        }

        if (weekDayNum == 4) { //if it is sunday (position 0 in the week)
            diff = weekDayNum - 4; //0-5=-5  
            dayOut = new Date(initDate.getTime() + diff * (24 * 60 * 60 * 1000));
            console.log('*******day result ZER0 ' + dayOut);
        }

        if (weekDayNum == 5) { //if it is sunday (position 0 in the week)
            diff = weekDayNum - 5; //0-5=-5  
            dayOut = new Date(initDate.getTime() + diff * (24 * 60 * 60 * 1000));
            console.log('*******day result ZER0 ' + dayOut);
        }

        return dayOut;
        /*else { //if it is not sunday
        var diff = weekDayNum -3; //5-2=3
        var dayOut = new Date(initDate.getTime() - diff*(24*60*60*1000)); 
        console.log('*******day result '+ dayOut);      
        return dayOut;
    }   */
    }

    function primeraDosis() {
        document.getElementsByClassName("primera-output")[0].classList.remove('invisible');
        document.getElementsByClassName("primera-output")[0].classList.add('visible');
        //operations with dates
        var date = input.value;
        console.log(date);
        console.log('date ' + typeof date);
        var birthDate = new Date(date.replace(/-/g, "/"));

        console.log(date);
        console.log('*******birth Date ' + birthDate);

        var birthday = birthDate.getDateFormatted();
        var birthmonth = birthDate.getMonthFormatted();
        var birthyear = birthDate.getFullYear();

        console.log('day' + birthday);
        console.log('month' + birthmonth);
        console.log('year' + birthyear);

        //Verifing you pick a date
        if (isNaN(birthday) || isNaN(birthmonth) || isNaN(birthyear)) {
            document.getElementById("primera-outputDiv").innerHTML = "<p>" + "Introduce una fecha válida" + "</p>";
            document.getElementsByClassName("primera-output-dates")[0].classList.remove('visible');
            document.getElementsByClassName("primera-output-dates")[0].classList.add('invisible');
            document.getElementsByClassName("primera-output-alert")[0].classList.remove('visible');
            document.getElementsByClassName("primera-output-alert")[0].classList.add('invisible');
        } else if ((birthyear > 2030) || (birthyear < 1970) || (birthday == 0) || (birthday > 31)) {
            document.getElementsByClassName("primera-output")[0].classList.remove('visible');
            document.getElementsByClassName("primera-output")[0].classList.add('invisible');
        } else {
            console.log('birthday******' + birthday);
            console.log('birthyear*******' + typeof birthyear);
            document.getElementsByClassName("primera-output-dates")[0].classList.remove('invisible');
            document.getElementsByClassName("primera-output-dates")[0].classList.add('visible');
            document.getElementsByClassName("primera-output-alert")[0].classList.remove('invisible');
            document.getElementsByClassName("primera-output-alert")[0].classList.add('visible');

            document.getElementById("primera-outputDiv").innerHTML = "<p><span>" + "Periodo" + "</span>" + " para la administración de la primera dosis" + "</p>";

            //Adjust the date by adding 45 days and 90 days
            var adjustedDate = addDays(birthDate, 42);
            var adjustedDate2 = addDays(birthDate, 84);
            console.log('adjustedDate ' + adjustedDate);
            console.log('adjustedDate2 ' + adjustedDate2);
            //the output date will be always the SECOND (MARTES) day of the week
            var adjustedDatetoTuesday = dateToTuesday(adjustedDate);
            var adjustedDatetoTuesday2 = dateToTuesday(adjustedDate2);
            console.log('adjustedDatetoTuesday ' + adjustedDatetoTuesday);
            console.log('adjustedDatetoTuesday2 ' + adjustedDatetoTuesday2);
           /* console.log('*******date '+ dayOut); */

            //var adjustedDate2_weekend = addDays(birthDate,90);//90 = 84 + 6.Plus 6 days to include the end of the week
/*            document.getElementById("primera-outputDiv2").innerHTML = "De "+ "<span>" +adjustedDate.getDateFormatted()+ "/"+adjustedDate.getMonthFormatted()+ "/"+adjustedDate.getFullYear()+ "</span>"+" hasta "+ "<span>"+adjustedDate2_weekend.getDateFormatted()+ "/"+adjustedDate2_weekend.getMonthFormatted() + "/"+adjustedDate2_weekend.getFullYear()+"</span>";
*/            document.getElementById("primera-outputDiv2").innerHTML = "<span>" + "De " + "<strong>" + adjustedDatetoTuesday.getDateFormatted() + "/" + adjustedDatetoTuesday.getMonthFormatted() + "/" + adjustedDatetoTuesday.getFullYear() + "</strong>" + "</span>" + " hasta " + "<strong>" + adjustedDatetoTuesday2.getDateFormatted() + "/" + adjustedDatetoTuesday2.getMonthFormatted() + "/" + adjustedDatetoTuesday2.getFullYear() + "</strong>";

            //calculate week number from the birthdate
            var weeks_primeraDosis_fecha1 = calculateWeeks(adjustedDate, birthDate);
            var weeks_primeraDosis_fecha2 = calculateWeeks(adjustedDate2, birthDate);
            console.log('weeks_primeraDosis_fecha1 ' + weeks_primeraDosis_fecha1);
            console.log('weeks_primeraDosis_fecha2 ' + weeks_primeraDosis_fecha2);

            //document.getElementById("primera-outputDiv3").innerHTML = "Semana " + weeks_primeraDosis_fecha1;
            //document.getElementById("primera-outputDiv4").innerHTML = "Semana " + weeks_primeraDosis_fecha2;
        }
    }

    function segundaDosis() {
        document.getElementsByClassName("segunda-output")[0].classList.remove('invisible');
        document.getElementsByClassName("segunda-output")[0].classList.add('visible');
        //operations with dates
        var date = input1.value;
        console.log('INPUT1 ' + date);
        var birthDate = new Date(date.replace(/-/g, "/"));
        console.log(birthDate);

        var birthday = birthDate.getDateFormatted();
        var birthmonth = birthDate.getMonthFormatted();
        var birthyear = birthDate.getFullYear();
        console.log('day' + birthday);
        console.log('month' + birthmonth);
        console.log('year' + birthyear);

        var date2 = input2.value;
        console.log('INPUT12' + date2);
        var twoDate = new Date(date2.replace(/-/g, "/"));
        console.log('twoDate ' + twoDate);

        var twoDate_day = twoDate.getDateFormatted();
        var twoDate_month = twoDate.getMonthFormatted();
        var twoDate_year = twoDate.getFullYear();

        //Min date: Adjust the date by adding 42 days(6 weeks) 
        var minDate = addDays(birthDate, 42);
        //Limit the date that user write in second input: first dosis limit 12 weeks
        var minDate2 = addDays(birthDate, 84);
        console.log('fecha limite********' + minDate2);
        console.log('fecha input********' + twoDate);

        //Verifing that you pick a date
        if (isNaN(birthday) || isNaN(birthmonth) || isNaN(birthyear) || isNaN(twoDate_day) || isNaN(twoDate_month) || isNaN(twoDate_year)) {
            document.getElementsByClassName("segunda-output-dates")[0].classList.remove('visible');
            document.getElementsByClassName("segunda-output-dates")[0].classList.add('invisible');
            document.getElementsByClassName("segunda-output-alert")[0].classList.remove('visible');
            document.getElementsByClassName("segunda-output-alert")[0].classList.add('invisible');
        } else if ((birthyear > 2030) || (birthyear < 1970)) {
            document.getElementsByClassName("segunda-output")[0].classList.remove('visible');
            document.getElementsByClassName("segunda-output")[0].classList.add('invisible');
        } else {
            if (minDate > twoDate) {
                document.getElementById("segunda-outputDiv").innerHTML = "<div class='segundaError'>" + "<p><span>" + "Atención:<br>" + "</span>" + "Introducir fecha posterior a " + minDate.getDateFormatted() + "/" + minDate.getMonthFormatted() + "/" + minDate.getFullYear() + "</p>" + "</div>";
                document.getElementsByClassName("segunda-output-dates")[0].classList.remove('visible');
                document.getElementsByClassName("segunda-output-dates")[0].classList.add('invisible');
                document.getElementsByClassName("segunda-output-alert")[0].classList.remove('visible');
                document.getElementsByClassName("segunda-output-alert")[0].classList.add('invisible');
            } else if (minDate2 < twoDate) {
                document.getElementById("segunda-outputDiv").innerHTML = "<div class='segundaErrorInfo'>" + "<p>La 1ª dosis puede administrarse a partir de las 6 semanas de edad y no mas tarde de la semana 12<sup>1</sup></p>" + "</div>";
                document.getElementsByClassName("segunda-output-dates")[0].classList.remove('visible');
                document.getElementsByClassName("segunda-output-dates")[0].classList.add('invisible');
                document.getElementsByClassName("segunda-output-alert")[0].classList.remove('visible');
                document.getElementsByClassName("segunda-output-alert")[0].classList.add('invisible');
            } else {
                document.getElementsByClassName("segunda-output-dates")[0].classList.remove('invisible');
                document.getElementsByClassName("segunda-output-dates")[0].classList.add('visible');
                document.getElementsByClassName("segunda-output-alert")[0].classList.remove('invisible');
                document.getElementsByClassName("segunda-output-alert")[0].classList.add('visible');

                document.getElementById("segunda-outputDiv").innerHTML = "<p><span>" + "Periodo" + "</span>" + " para la administración de la segunda dosis" + "</p>";

                //Adjust the date by adding 28 days(4 weeks) and 196 days(28 weeks), from the first dosis date
                var adjustedDate = addDays(twoDate, 28); //+ 4 weeks
                var adjustedDate2 = addDays(birthDate, 196); //28 weeks
                /*var adjustedDate2_weekend = addDays(birthDate,202);//202 = 196 + 6.Plus 6 days to include the end of the week*/
                //the output date will be always the SECOND (MARTES) day of the week
                var adjustedDatetoTuesday = dateToTuesday(adjustedDate);
                var adjustedDatetoTuesday2 = dateToTuesday(adjustedDate2);

                //document.getElementById("segunda-outputDiv2").innerHTML = "De "+ "<span>" +adjustedDate.getDateFormatted()+ "/"+ adjustedDate.getMonthFormatted() + "/"+adjustedDate.getFullYear()+ "</span>"+" hasta "+ "<span>"+adjustedDate2.getDateFormatted()+ "/"+adjustedDate2.getMonthFormatted()+ "/"+adjustedDate2.getFullYear()+"</span>";
                document.getElementById("segunda-outputDiv2").innerHTML = "<span>" + "De " + "<strong>" + adjustedDatetoTuesday.getDateFormatted() + "/" + adjustedDatetoTuesday.getMonthFormatted() + "/" + adjustedDatetoTuesday.getFullYear() + "</strong>" + "</span>" + " hasta " + "<strong>" + adjustedDatetoTuesday2.getDateFormatted() + "/" + adjustedDatetoTuesday2.getMonthFormatted() + "/" + adjustedDatetoTuesday2.getFullYear() + "</strong>";
                //calculate week number from the birthdate
                var weeks_Dosis_fecha1 = calculateWeeks(adjustedDate, birthDate);
                var weeks_Dosis_fecha2 = calculateWeeks(adjustedDate2, birthDate);

                //document.getElementById("segunda-outputDiv3").innerHTML = "Semana " + weeks_Dosis_fecha1;
                //document.getElementById("segunda-outputDiv4").innerHTML = "Semana " + weeks_Dosis_fecha2;
            }
        }
    }

    function terceraDosis() {
        document.getElementsByClassName("tercera-output")[0].classList.remove('invisible');
        document.getElementsByClassName("tercera-output")[0].classList.add('visible');
        //operations with dates
        var date = input3.value;
        var birthDate = new Date(date.replace(/-/g, "/"));

        var birthday = birthDate.getDateFormatted();
        var birthmonth = birthDate.getMonthFormatted();
        var birthyear = birthDate.getFullYear();

        var date2 = input4.value;
        var twoDate = new Date(date2.replace(/-/g, "/"));

        var twoDate_day = twoDate.getDateFormatted();
        var twoDate_month = twoDate.getMonthFormatted();
        var twoDate_year = twoDate.getFullYear();

        //Min date: Adjust the date by adding 70 days(6 weeks + 4 weeks) 
        var minDate = addDays(birthDate, 70);
        //Limit the date that user write in second input: second dosis limit 28 weeks
        var minDate2 = addDays(birthDate, 196);


        //Verifing that you pick a date
        if (isNaN(birthday) || isNaN(birthmonth) || isNaN(birthyear) || isNaN(twoDate_day) || isNaN(twoDate_month) || isNaN(twoDate_year)) {
            document.getElementsByClassName("tercera-output-dates")[0].classList.remove('visible');
            document.getElementsByClassName("tercera-output-dates")[0].classList.add('invisible');
            document.getElementsByClassName("tercera-output-alert")[0].classList.remove('visible');
            document.getElementsByClassName("tercera-output-alert")[0].classList.add('invisible');
        } else if ((birthyear > 2030) || (birthyear < 1970)) {
            document.getElementsByClassName("tercera-output")[0].classList.remove('visible');
            document.getElementsByClassName("tercera-output")[0].classList.add('invisible');
        } else {
            if (minDate > twoDate) {
                document.getElementById("tercera-outputDiv").innerHTML = "<div class='terceraError'>" + "<p><span>" + "Atención:<br>" + "</span>" + "Introducir fecha posterior a " + minDate.getDateFormatted() + "/" + minDate.getMonthFormatted() + "/" + minDate.getFullYear() + "</p>" + "</div>";
                document.getElementsByClassName("tercera-output-dates")[0].classList.remove('visible');
                document.getElementsByClassName("tercera-output-dates")[0].classList.add('invisible');
                document.getElementsByClassName("tercera-output-alert")[0].classList.remove('visible');
                document.getElementsByClassName("tercera-output-alert")[0].classList.add('invisible');
            } else if (minDate2 < twoDate) {
                document.getElementById("tercera-outputDiv").innerHTML = "<div class='terceraErrorInfo'>" + "<p>La segunda dosis de RotaTeq<sup>&reg;</sup> no debe administrarse más tarde de las 28 semanas de edad</p>" + "</div>";
                document.getElementsByClassName("tercera-output-dates")[0].classList.remove('visible');
                document.getElementsByClassName("tercera-output-dates")[0].classList.add('invisible');
                document.getElementsByClassName("tercera-output-alert")[0].classList.remove('visible');
                document.getElementsByClassName("tercera-output-alert")[0].classList.add('invisible');
            } else {
                document.getElementsByClassName("tercera-output-dates")[0].classList.remove('invisible');
                document.getElementsByClassName("tercera-output-dates")[0].classList.add('visible');
                document.getElementsByClassName("tercera-output-alert")[0].classList.remove('invisible');
                document.getElementsByClassName("tercera-output-alert")[0].classList.add('visible');

                document.getElementById("tercera-outputDiv").innerHTML = "<p><span>" + "Periodo recomendado" + "</span>" + " para la administración de la tercera dosis" + "</p>";

                //Adjust the date by adding 28(4 weeks) days and 196 days(28 weeks) days, from the second dosis date
                var adjustedDate = addDays(twoDate, 28);
                var adjustedDate2 = addDays(birthDate, 224);
                /*var adjustedDate2_weekend = addDays(birthDate,230);//230 = 224 + 6.Plus 6 days to include the end of the week*/
                //the output date will be always the SECOND (MARTES) day of the week
                var adjustedDatetoTuesday = dateToTuesday(adjustedDate);
                var adjustedDatetoTuesday2 = dateToTuesday(adjustedDate2);
                //document.getElementById("tercera-outputDiv2").innerHTML = "De "+ "<span>" +adjustedDate.getDateFormatted()+ "/"+ adjustedDate.getMonthFormatted() + "/"+adjustedDate.getFullYear()+ "</span>"+" hasta "+ "<span>"+adjustedDate2_weekend.getDateFormatted()+ "/"+adjustedDate2_weekend.getMonthFormatted()+ "/"+adjustedDate2_weekend.getFullYear()+"</span>";
                document.getElementById("tercera-outputDiv2").innerHTML = "<span>" + "De " + "<strong>" + adjustedDatetoTuesday.getDateFormatted() + "/" + adjustedDatetoTuesday.getMonthFormatted() + "/" + adjustedDatetoTuesday.getFullYear() + "</strong>" + "</span>" + " hasta " + "<strong>" + adjustedDatetoTuesday2.getDateFormatted() + "/" + adjustedDatetoTuesday2.getMonthFormatted() + "/" + adjustedDatetoTuesday2.getFullYear() + "</strong>";

                //calculate week number from the birthdate
                var weeks_Dosis_fecha3 = calculateWeeks(adjustedDate, birthDate);
                var weeks_Dosis_fecha4 = calculateWeeks(adjustedDate2, birthDate);

                //document.getElementById("tercera-outputDiv3").innerHTML = "Semana " + weeks_Dosis_fecha3;
                //document.getElementById("tercera-outputDiv4").innerHTML = "Semana " + weeks_Dosis_fecha4;
            }
        }
    }
};

/*-----------------------------------------------*/







    if (Modernizr.inputtypes.date) {
      /* just the alert message */
      console.log('It is supported');
    } else {
      /* get flatpickr css */
      /*  $('<link/>', {
          rel: 'stylesheet',
          type: 'text/css',
          href: 'https://cdnjs.cloudflare.com/ajax/libs/flatpickr/4.5.7/flatpickr.min.css'
        }).appendTo('head');*/
      function addCss(fileName) {

        var head = document.head;
        var link = document.createElement("link");

        link.type = "text/css";
        link.rel = "stylesheet";
        link.href = fileName;

        head.appendChild(link);
      }

      addCss('css/flatpickr.min.css');



      /* get flatpickr */
      /*  $.getScript('https://cdnjs.cloudflare.com/ajax/libs/flatpickr/4.5.7/flatpickr.min.js')*/
      /* wait till it's loaded */
      /*    .done(function() {*/
      /* apply datepicker to selected element */
      /*          $(document).ready(function() {
                  $(function() {
                    flatpickr("input[type='date']", {
                         altInput: true,
                        dateFormat: "d-m-Y",
                        altFormat: "j F Y",
                         minDate: "",
                            locale: {
                            firstDayOfWeek: 1,
                            weekdays: {
                              shorthand: ['Do', 'Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sa'],
                              longhand: ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'],         
                            }, 
                            months: {
                              shorthand: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Оct', 'Nov', 'Dic'],
                              longhand: ['Enero', 'Febreo', 'Мarzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
                            },
                          },
                     })
                  });
                });

      });*/
      getScript("js/flatpickr.min.js", function () {
        flatpickr("input[type='date']", {
          altInput: true,
          //dateFormat: "d-m-Y",
          altFormat: "d/m/Y",
          maxDate: "01.01.2025",
          minDate: "01.01.2015",
          locale: {
            firstDayOfWeek: 1,
            weekdays: {
              shorthand: ['Do', 'Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sa'],
              longhand: ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'],
            },
            months: {
              shorthand: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Оct', 'Nov', 'Dic'],
              longhand: ['Enero', 'Febrero', 'Мarzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre',
                'Octubre', 'Noviembre', 'Diciembre'
              ],
            },
          },
        });
      });

      function getScript(url, callback) {
        console.log('carga script');
        var script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = url;
        // most browsers
        script.onload = callback;
        // IE 6 & 7
        script.onreadystatechange = function () {
          if (this.readyState == 'complete') {
            callback();
          }
        }
        document.getElementsByTagName('head')[0].appendChild(script);
      }

    }
  </script>