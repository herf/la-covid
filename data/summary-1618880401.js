$( document ).ready(function() {
    var data = {
				    "content": { 
								
								
								
								"count": "1,229,311",


								"death": "23,641",

								"dailycount": "337",


								"dailydeath": "18", 


								"date":"04/19" ,
								"info":"through 6:00pm 04/18/2021" ,
								
								//update M-F only with same info as above,
								"datem":"04/19" ,
								"infom":"through 6:00pm 04/18/2021" ,

								
								"testingaverage":"53,501", 
								"peopletested":"6,329,308",
								"positivity":"1.20%" ,	
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



