$( document ).ready(function() {
    var data = {
				    "content": { 
								
								"count": "1,250,240",

								"death": "24,483",


								"dailycount": "422",
								"dailydeath": "2",
								"date":"06/30" ,
								"info":"through 6:00pm 06/29/2021" ,
								
								//update M-F only with same info as above,
								"datem":"06/30" ,
								"infom":"through 6:00pm 06/29/2021" ,

								"testingaverage":"35,212",

								"peopletested":"7,026,869",

								"positivity":"0.83%", 
								"hospitalizations":"255" 

								}       
				};	
				
				
				var content = data.content;
				
				$('#ctn').html(content.count);
				$('#det').html(content.death);
				$('#dctn').html(content.dailycount);
				$('#ddet').html(content.dailydeath);
				$('#dte').html(content.date);
				$('#dte_1').html(content.date);
				$('#dte_2').html(content.date);
				$('#dte_3').html(content.date);
				$('#cse').html(content.info);	
				
				$('#dte_m').html(content.datem);
				$('#cse_m').html(content.infom);
				
				$('#tstavg').html(content.testingaverage);	
				$('#ppltst').html(content.peopletested);	
				$('#pos').html(content.positivity);	
				$('#hosp').html(content.hospitalizations);
			
							


});



