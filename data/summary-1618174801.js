$( document ).ready(function() {
    var data = {
				    "content": { 
								
								
								
								"count": "1,225,796",


								"death": "23,477",

								"dailycount": "546",


								"dailydeath": "10", 


								"date":"04/11" ,
								"info":"through 6:00pm 04/10/2021" ,
								
								//update M-F only with same info as above,
								"datem":"04/09" ,
								"infom":"through 6:00pm 04/08/2021" ,

								
								"testingaverage":"40,373", 
								"peopletested":"6,205,246",
								"positivity":"1.50%" ,	
								"hospitalizations":"492"
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



