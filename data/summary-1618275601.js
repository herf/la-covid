$( document ).ready(function() {
    var data = {
				    "content": { 
								
								
								
								"count": "1,226,191",


								"death": "23,479",

								"dailycount": "411",


								"dailydeath": "3", 


								"date":"04/12" ,
								"info":"through 6:00pm 04/11/2021" ,
								
								//update M-F only with same info as above,
								"datem":"04/12" ,
								"infom":"through 6:00pm 04/11/2021" ,

								
								"testingaverage":"41,946", 
								"peopletested":"6,212,481",
								"positivity":"1.40%" ,	
								"hospitalizations":"470"
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



