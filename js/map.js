var canName = [], country1= [], sponsor1 = [], funding1 = [], trialphase1 = [], sample = [];
$.ajax ({
    'async': false,
    'global': false,
    'dataType': 'json',
    'url': 'data.json',
    'success': function(data) {    
        allData = data;

        data.forEach(function(key, value){
            canName.push(key["Candidate"]);
            country1.push(key["Country/ies"])
            sponsor1.push(key["Sponsor"])
            funding1.push(key["Funding"]);
            trialphase1.push(key["Trial Phase"]);
        });
        console.log(trialphase1)

    }
});

$(".countrylist").on('change', function(){
    showlist();
});

function showlist(){
    var selectedValue = $(".countrylist").val();
    // console.log(selectedValue);

    var fd = alldata.filter(function(objcont){
        return objcont["Country/ies"] === selectedValue;
    }) 

    var list = d3.select('.vaccines')
    d3.select('.vaccines').html(null)
    list.selectAll('.vaccinename')
        .data(fd).enter()
        .append("li")
        .attr("class","li-item")
        .html(function(t){
            console.log(t.Sponsor);
            return t.Candidate;
        })
        $("#vac-li li").click(function(){
            $(".active").removeClass("active")
            $(this).addClass("active")
            var liname = $(this).text();
            var ai = canName.indexOf(liname)
            console.log(ai)
            $("#tab-content #name").text(liname);
            $("#tab-content #country").text(country1[ai]);
            $("#tab-content #funding").text(funding1[ai]);
            $("#tab-content #sponsor").text(sponsor1[ai]);
            $("#phaseName").text(trialphase1[ai]);

            if( trialphase1[ai] == "Pre-clinical") {
                $("#phaseName").text(trialphase1[ai]);
                $("#phaseDesc1").text("Phase 0 involves exploratory, first-in-human (FIH) trials that are run according to FDA guidelines. Also called human microdose studies, they have single sub-therapeutic doses given to 10 to 15 subjects and yield pharmacokinetic data or help with imaging specific targets without introducing pharmacological effects. Pharmaceutical companies perform Phase 0 studies to decide which of their drug candidates has the best pharmacokinetic parameters in humans.");
                $("#phaseDesc2").empty();
                $("#phase1liner").empty();
                move(31.5);
                $("#arrow2").css("color","#fff");
            } else if( trialphase1[ai] == "Early research" ) {
                $("#phaseName").text(trialphase1[ai]);
                $("#phaseDesc2").empty();
                $("#phase1liner").empty();
                $("#phaseDesc1").text("Deciding whether a drug is ready for clinical trials (the so-called move from bench to bedside) involves extensive preclinical studies that yield preliminary efficacy, toxicity, pharmacokinetic and safety information.")
                move(15);
                $("#arrow2").css("color","#fff");
            } else if( trialphase1[ai] == "Phase 1" ) {
                $("#phaseName").text(trialphase1[ai]);
                $("#phaseDesc2").empty();
                $("#phase1liner").empty();
                $("#phaseDesc1").text("They are primarily designed to assess the safety and tolerability of a drug, but the pharmacokinetics and, if possible, the pharmacodynamics are also measured.Phase I trials are the first tests of a drug with a small number of healthy human subjects.")
                move(48.5);
                $("#arrow2").css("color","#fff");
            } else if( trialphase1[ai] == "Phase 2" ) {
                $("#phaseName").text(trialphase1[ai]);
                $("#phaseDesc2").empty();
                $("#phase1liner").empty();
                $("#phaseDesc1").text("Phase II trials are performed on larger groups of patients and are designed to assess the efficacy of the drug and to continue the Phase I safety assessments. Most importantly, Phase II clinical studies help to establish therapeutic doses for the large-scale Phase III studies.");
                move(65);
                $("#arrow2").css("color","#fff");
            } else if( trialphase1[ai] == "Phase 1/2" ) {
                $("#phaseName").text(trialphase1[ai]);
                $("#phase1liner").text("Accelerated by combining 1 and 2");
                $("#phaseDesc1").html("<span>Phase 1: </span>They are primarily designed to assess the safety and tolerability of a drug, but the pharmacokinetics and, if possible, the pharmacodynamics are also measured.Phase I trials are the first tests of a drug with a small number of healthy human subjects.");
                $("#phaseDesc2").html("<span>Phase 2: </span>Phase II trials are performed on larger groups of patients and are designed to assess the efficacy of the drug and to continue the Phase I safety assessments. Most importantly, Phase II clinical studies help to establish therapeutic doses for the large-scale Phase III studies.");
                move(65);
                $("#arrow2").css({"color":"#000", "right":"48%"});
            } else if( trialphase1[ai] == "Phase 3" ) {
                $("#phaseName").text(trialphase1[ai]);
                $("#phaseDesc2").empty();
                $("#phase1liner").empty();
                $("#phaseDesc1").text("Phase III trials are randomized controlled multicentre trials and provide most of the long-term safety data. Phase III trials investigate the efficacy and safety of a new drug over 6 to 12 months or longer in a large patient population (several hundred patients or more) under conditions that reflect daily clinical life much more closely than the Phase I or II trials and allow evaluation of the overall benefit-risk relationship of the drug.")
                move(82);
                $("#arrow2").css("color","#fff");
            } else if( trialphase1[ai] == "Phase 4" ) {
                $("#phaseName").text(trialphase1[ai]);
                $("#phaseDesc2").empty();
                $("#phase1liner").empty();
                $("#phaseDesc1").text("Phase IV trials are also known as post-marketing surveillance trials involving safety surveillance (pharmacovigilance) and ongoing technical support after approval.");
                move(100);
                $("#arrow2").css("color","#fff");
            } else if( trialphase1[ai] == "Phase 2/3" ) {
                $("#phaseName").text(trialphase1[ai]);
                $("#phase1liner").text("Accelerated by combining 2 and 3");
                $("#phaseDesc1").html("<span>Phase 2: </span>Phase II trials are performed on larger groups of patients and are designed to assess the efficacy of the drug and to continue the Phase I safety assessments. Most importantly, Phase II clinical studies help to establish therapeutic doses for the large-scale Phase III studies.");
                $("#phaseDesc2").html("<span>Phase 3: </span>Phase III trials are randomized controlled multicentre trials and provide most of the long-term safety data. Phase III trials investigate the efficacy and safety of a new drug over 6 to 12 months or longer in a large patient population (several hundred patients or more) under conditions that reflect daily clinical life much more closely than the Phase I or II trials and allow evaluation of the overall benefit-risk relationship of the drug.") 
                move(82);
                $("#arrow2").css({"color":"#000","right":"38.5%"});
            }

        })

        $("#vac-li li:first-child").click();

        function move(width) {
            var elem = document.getElementById("myBar");
            elem.style.width = width + "%";
        }

        
    // console.log(fd);
}

function createDropdown(statenames){

    var fArr = statenames.filter(function(e) { return e !== 'xx' })

    var list = d3.select(".countrylist")

    list.selectAll('.countryname')
        .data(fArr).enter()
        .append("option")
        .attr("class","countryname")
        .attr("value",function(t){
            return t;
        })
        .html(function(t){
            return t;
        })



}


function mapfunction(selector){

    var margin = {top: 0, left: 0, right: 0, bottom: 0},
    scale = 120, center = [0, 43.5],
    height = 500 - margin.top - margin.bottom,
    width = 800 - margin.left - margin.right;
    mapurl = "world-india.json"

    d3.select(selector).html(null)

    var svg = d3.select(selector)
        .append("svg")
        .attr("class", "india map")
        .attr("viewBox", "0 0 " + width + " " + height)
        .attr("preserveAspectRatio", "xMinYMin")

    var tool_tip = d3.tip()
        .attr("class", "d3-tip")
        .offset([-15, 0])
        .html(function(d) { 
            // if(d["Total Deaths"]=="NULL")
            // { 
            // d["Total Deaths"] = 0;
            // }
            var html = "<p>"+d.name +"</p> "
            return html; 
        });
    svg.call(tool_tip);
    
    var projection = d3.geoMercator()
        .scale(scale)
        .center(center)
        .translate([width / 2, height / 2])

    var geoPath = d3.geoPath()
        .projection(projection)

    function centroids(boundarydata){
        return boundarydata.map(function (d){
            return {"latlong": projection(d3.geoCentroid(d)), "name": d.properties.cname}
        });
    }
    

    d3.json(mapurl, function(mapdata){
        
        var country = topojson.feature(mapdata, mapdata.objects.source).features;

        // var stateCentroid = centroids(country)
        var filtered = country.filter(function(el) { 
            return el.properties.cname !== "Antarctica";
        });

       

        var uniquestates = [];

        for(i = 0; i< alldata.length; i++){  
            if(uniquestates.indexOf(alldata[i]["Country/ies"]) === -1){
                uniquestates.push(alldata[i]["Country/ies"]);        
            }        
        }

        console.log("uniquestates", uniquestates);

        createDropdown(uniquestates)
        



        var circleData =  filtered.filter(function(item) {
            return uniquestates.indexOf(item.properties.cname) !== -1;
        });

        

        var stateCentroid = centroids(circleData)
        

        svg.selectAll(".country")
            .data(filtered).enter().append("path")
            .attr("d", geoPath)
            .attr("class", function(d){
                return "country"
            })
            .attr("stroke", "#000000")
            .attr("stroke-width", 0.2)
            .attr("fill", "#000000")
            .attr("fill-opacity", "70%")

        svg.selectAll(".myCircles")
            .data(stateCentroid)
            .enter()
            .append("circle")
            .attr("cx", function(d){ return d["latlong"][0];})
            .attr("cy", function (d){ return d["latlong"][1]; })
            .attr("r", 0)
            .attr("class", "myCircles")
            .attr("fill-opacity", "70%")
            .attr("r", 8)
            .attr("fill", "red")
            .attr("stroke", "#000000")
            .on('mouseover', tool_tip.show)
            .on('mouseout', tool_tip.hide)
            .on('click', function(d){
                    
                    var fd = alldata.filter(function(objcont){
                        return objcont["Country/ies"] === d.name;
                    }) 

                    var list = d3.select('.vaccines')
                    d3.select('.vaccines').html(null)
                    list.selectAll('.vaccinename')
                        .data(fd).enter()
                        .append("li")
                        .attr("class","li-item")
                        .html(function(t){
                            console.log(t.Sponsor);
                            return t.Candidate;
                        })
                    

                        $("#vac-li li").click(function(){
                            $(".active").removeClass("active")
                            $(this).addClass("active")
                            var liname = $(this).text();
                            var ai = canName.indexOf(liname)
                            console.log(ai)
                            $("#tab-content #name").text(liname);
                            $("#tab-content #country").text(country1[ai]);
                            $("#tab-content #funding").text(funding1[ai]);
                            $("#tab-content #sponsor").text(sponsor1[ai]);
                            $("#phaseName").text(trialphase1[ai]);

                            if( trialphase1[ai] == "Pre-clinical") {
                                $("#phaseName").text(trialphase1[ai]);
                                $("#phaseDesc1").text("Phase 0 involves exploratory, first-in-human (FIH) trials that are run according to FDA guidelines. Also called human microdose studies, they have single sub-therapeutic doses given to 10 to 15 subjects and yield pharmacokinetic data or help with imaging specific targets without introducing pharmacological effects. Pharmaceutical companies perform Phase 0 studies to decide which of their drug candidates has the best pharmacokinetic parameters in humans.");
                                $("#phaseDesc2").empty();
                                $("#phase1liner").empty();
                                move(31.5);
                                $("#arrow2").css("color","#fff");
                            } else if( trialphase1[ai] == "Early research" ) {
                                $("#phaseName").text(trialphase1[ai]);
                                $("#phaseDesc2").empty();
                                $("#phase1liner").empty();
                                $("#phaseDesc1").text("Deciding whether a drug is ready for clinical trials (the so-called move from bench to bedside) involves extensive preclinical studies that yield preliminary efficacy, toxicity, pharmacokinetic and safety information.")
                                move(15);
                                $("#arrow2").css("color","#fff");
                            } else if( trialphase1[ai] == "Phase 1" ) {
                                $("#phaseName").text(trialphase1[ai]);
                                $("#phaseDesc2").empty();
                                $("#phase1liner").empty();
                                $("#phaseDesc1").text("They are primarily designed to assess the safety and tolerability of a drug, but the pharmacokinetics and, if possible, the pharmacodynamics are also measured.Phase I trials are the first tests of a drug with a small number of healthy human subjects.")
                                move(48.5);
                                $("#arrow2").css("color","#fff");
                            } else if( trialphase1[ai] == "Phase 2" ) {
                                $("#phaseName").text(trialphase1[ai]);
                                $("#phaseDesc2").empty();
                                $("#phase1liner").empty();
                                $("#phaseDesc1").text("Phase II trials are performed on larger groups of patients and are designed to assess the efficacy of the drug and to continue the Phase I safety assessments. Most importantly, Phase II clinical studies help to establish therapeutic doses for the large-scale Phase III studies.");
                                move(65);
                                $("#arrow2").css("color","#fff");
                            } else if( trialphase1[ai] == "Phase 1/2" ) {
                                $("#phaseName").text(trialphase1[ai]);
                                $("#phase1liner").text("Accelerated by combining 1 and 2");
                                $("#phaseDesc1").html("<span>Phase 1: </span>They are primarily designed to assess the safety and tolerability of a drug, but the pharmacokinetics and, if possible, the pharmacodynamics are also measured.Phase I trials are the first tests of a drug with a small number of healthy human subjects.");
                                $("#phaseDesc2").html("<span>Phase 2: </span>Phase II trials are performed on larger groups of patients and are designed to assess the efficacy of the drug and to continue the Phase I safety assessments. Most importantly, Phase II clinical studies help to establish therapeutic doses for the large-scale Phase III studies.");
                                move(65);
                                $("#arrow2").css({"color":"#000", "right":"48%"});
                            } else if( trialphase1[ai] == "Phase 3" ) {
                                $("#phaseName").text(trialphase1[ai]);
                                $("#phaseDesc2").empty();
                                $("#phase1liner").empty();
                                $("#phaseDesc1").text("Phase III trials are randomized controlled multicentre trials and provide most of the long-term safety data. Phase III trials investigate the efficacy and safety of a new drug over 6 to 12 months or longer in a large patient population (several hundred patients or more) under conditions that reflect daily clinical life much more closely than the Phase I or II trials and allow evaluation of the overall benefit-risk relationship of the drug.")
                                move(82);
                                $("#arrow2").css("color","#fff");
                            } else if( trialphase1[ai] == "Phase 4" ) {
                                $("#phaseName").text(trialphase1[ai]);
                                $("#phaseDesc2").empty();
                                $("#phase1liner").empty();
                                $("#phaseDesc1").text("Phase IV trials are also known as post-marketing surveillance trials involving safety surveillance (pharmacovigilance) and ongoing technical support after approval.");
                                move(100);
                                $("#arrow2").css("color","#fff");
                            } else if( trialphase1[ai] == "Phase 2/3" ) {
                                $("#phaseName").text(trialphase1[ai]);
                                $("#phase1liner").text("Accelerated by combining 2 and 3");
                                $("#phaseDesc1").html("<span>Phase 2: </span>Phase II trials are performed on larger groups of patients and are designed to assess the efficacy of the drug and to continue the Phase I safety assessments. Most importantly, Phase II clinical studies help to establish therapeutic doses for the large-scale Phase III studies.");
                                $("#phaseDesc2").html("<span>Phase 3: </span>Phase III trials are randomized controlled multicentre trials and provide most of the long-term safety data. Phase III trials investigate the efficacy and safety of a new drug over 6 to 12 months or longer in a large patient population (several hundred patients or more) under conditions that reflect daily clinical life much more closely than the Phase I or II trials and allow evaluation of the overall benefit-risk relationship of the drug.") 
                                move(82);
                                $("#arrow2").css({"color":"#000","right":"38.5%"});
                            }

                        })

                        $("#vac-li li:first-child").click();

                        function move(width) {
                            var elem = document.getElementById("myBar");
                            elem.style.width = width + "%";
                        }

                        
                    // console.log(fd);
                    
            })
    });

}
if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    $('#conid').mobileSelect({				
        onClose: function(){
            createDropdown(uniquestates);
            showlist();
        }
    });
}
