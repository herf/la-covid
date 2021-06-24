$( document ).ready(function() {
    var data = {
				    "content": { 
								
								"count": "1,248,128",

								"death": "24,455",

								"dailycount": "260",
								"dailydeath": "11",
								"date":"06/23" ,
								"info":"through 6:00pm 06/22/2021" ,
								
								//update M-F only with same info as above,
								"datem":"06/23" ,
								"infom":"through 6:00pm 06/22/2021" ,

								"testingaverage":"39,248",

								"peopletested":"6,972,816",

								"positivity":"0.61%" , 
								"hospitalizations":"230" 

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



