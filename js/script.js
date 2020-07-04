$(document).ready(function(){
    var res = [], country= [], sponsor = [], funding = [], trialphase = [], sample = [];
    $.ajax ({
        'async': false,
        'global': false,
        'dataType': 'json',
        'url': 'data.json',
        'success': function(data) {    
            allData = data;
            data.forEach(function(key, value){
                res.push(key["Candidate"]);
                country.push(key["Country/ies"])
                sponsor.push(key["Sponsor"])
                funding.push(key["Funding"]);
                trialphase.push(key["Trial Phase"]);
                // console.log(trialphase)
            });
        }
    });
    for(var i =0; i< res.length ; i++) {
        $("#can-li").append('<li class="li-item" id="'+ i +'-Element">'+ res[i] +'</li>');
    }
    $("#can-li li:first-child").addClass("active");
    $("#tab-content #name").text(res[0]);
    $("#tab-content #country").text(country[0]);
    $("#tab-content #funding").text(funding[0]);
    $("#tab-content #sponsor").text(sponsor[0]);
    $("#phaseName").text(trialphase[0]);
    $("#phase1liner").text("Accelerated by combining 2 and 3");
    $("#phaseDesc1").html("<span>Phase 2: </span>Phase II trials are performed on larger groups of patients and are designed to assess the efficacy of the drug and to continue the Phase I safety assessments. Most importantly, Phase II clinical studies help to establish therapeutic doses for the large-scale Phase III studies.");
    $("#phaseDesc2").html("<span>Phase 3: </span>Phase III trials are randomized controlled multicentre trials and provide most of the long-term safety data. Phase III trials investigate the efficacy and safety of a new drug over 6 to 12 months or longer in a large patient population (several hundred patients or more) under conditions that reflect daily clinical life much more closely than the Phase I or II trials and allow evaluation of the overall benefit-risk relationship of the drug.")


    $("#can-li li").click(function() {
        var id = this.id.split(/\s*\-\s*/g);
        id = id[0]

        $("#tab-content #name").text(res[id]);
        $("#tab-content #country").text(country[id]);
        $("#tab-content #funding").text(funding[id]);
        $("#tab-content #sponsor").text(sponsor[id]);
            
        console.log(trialphase[id])
        if( trialphase[id] == "Pre-clinical") {
            $("#phaseName").text(trialphase[id]);
            $("#phaseDesc1").text("Phase 0 involves exploratory, first-in-human (FIH) trials that are run according to FDA guidelines. Also called human microdose studies, they have single sub-therapeutic doses given to 10 to 15 subjects and yield pharmacokinetic data or help with imaging specific targets without introducing pharmacological effects. Pharmaceutical companies perform Phase 0 studies to decide which of their drug candidates has the best pharmacokinetic parameters in humans.");
            $("#phaseDesc2").empty();
            $("#phase1liner").empty();
            move(33);

        } else if( trialphase[id] == "Phase 1" ) {
            $("#phaseName").text(trialphase[id]);
            $("#phaseDesc2").empty();
            $("#phase1liner").empty();
            $("#phaseDesc1").text("They are primarily designed to assess the safety and tolerability of a drug, but the pharmacokinetics and, if possible, the pharmacodynamics are also measured.Phase I trials are the first tests of a drug with a small number of healthy human subjects.")
            move(50);
        } else if( trialphase[id] == "Phase 2" ) {
            $("#phaseName").text(trialphase[id]);
            $("#phaseDesc2").empty();
            $("#phase1liner").empty();
            $("#phaseDesc1").text("Phase II trials are performed on larger groups of patients and are designed to assess the efficacy of the drug and to continue the Phase I safety assessments. Most importantly, Phase II clinical studies help to establish therapeutic doses for the large-scale Phase III studies.");
            move(66.5);
        } else if( trialphase[id] == "Phase 1/2" ) {
            $("#phaseName").text(trialphase[id]);
            $("#phase1liner").text("Accelerated by combining 1 and 2");
            $("#phaseDesc1").html("<span>Phase 1: </span>They are primarily designed to assess the safety and tolerability of a drug, but the pharmacokinetics and, if possible, the pharmacodynamics are also measured.Phase I trials are the first tests of a drug with a small number of healthy human subjects.");
            $("#phaseDesc2").html("<span>Phase 2: </span>Phase II trials are performed on larger groups of patients and are designed to assess the efficacy of the drug and to continue the Phase I safety assessments. Most importantly, Phase II clinical studies help to establish therapeutic doses for the large-scale Phase III studies.");
            move(66.5);
        } else if( trialphase[id] == "Phase 3" ) {
            $("#phaseName").text(trialphase[id]);
            $("#phaseDesc2").empty();
            $("#phase1liner").empty();
            $("#phaseDesc1").text("Phase III trials are randomized controlled multicentre trials and provide most of the long-term safety data. Phase III trials investigate the efficacy and safety of a new drug over 6 to 12 months or longer in a large patient population (several hundred patients or more) under conditions that reflect daily clinical life much more closely than the Phase I or II trials and allow evaluation of the overall benefit-risk relationship of the drug.")
            move(83.5);
        } else if( trialphase[id] == "Phase 4" ) {
            $("#phaseName").text(trialphase[id]);
            $("#phaseDesc2").empty();
            $("#phase1liner").empty();
            $("#phaseDesc1").text("Phase IV trials are also known as post-marketing surveillance trials involving safety surveillance (pharmacovigilance) and ongoing technical support after approval.");
            move(100);
        } else if( trialphase[id] == "Phase 2/3" ) {
            $("#phaseName").text(trialphase[id]);
            $("#phase1liner").text("Accelerated by combining 2 and 3");
            $("#phaseDesc1").html("<span>Phase 2: </span>Phase II trials are performed on larger groups of patients and are designed to assess the efficacy of the drug and to continue the Phase I safety assessments. Most importantly, Phase II clinical studies help to establish therapeutic doses for the large-scale Phase III studies.");
            $("#phaseDesc2").html("<span>Phase 3: </span>Phase III trials are randomized controlled multicentre trials and provide most of the long-term safety data. Phase III trials investigate the efficacy and safety of a new drug over 6 to 12 months or longer in a large patient population (several hundred patients or more) under conditions that reflect daily clinical life much more closely than the Phase I or II trials and allow evaluation of the overall benefit-risk relationship of the drug.") 
            move(83.5);
        }
    }) 

    var countofli = document.getElementsByClassName("li-item")

    for (var i = 0; i < countofli.length; i++) {
        countofli[i].addEventListener("click", function() {
          var current = document.getElementsByClassName("active");
          current[0].className = current[0].className.replace(" active", "");
          this.className += " active";
        });
    }

    move(83.5);
    function move(width) {
        var elem = document.getElementById("myBar");
        elem.style.width = width + "%";
    }

})
