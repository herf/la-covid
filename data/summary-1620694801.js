$( document ).ready(function() {
    var data = {
				    "content": { 
								
								"count": "1,235,797",

								"death": "24,003",

								"dailycount": "179",

								"dailydeath": "4", 

								"date":"05/10" ,
								"info":"through 6:00pm 05/09/2021" ,
								
								//update M-F only with same info as above,
								"datem":"05/10" ,
								"infom":"through 6:00pm 05/09/2021" ,

								"testingaverage":"58,901",
								"peopletested":"6,587,665",

								"positivity":"0.70%" ,	
								"hospitalizations":"389"
								
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



