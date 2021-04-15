$( document ).ready(function() {
    var data = {
				    "content": { 
								
								
								
								"count": "1,226,964",


								"death": "23,553",

								"dailycount": "411",


								"dailydeath": "57", 


								"date":"04/14" ,
								"info":"through 6:00pm 04/13/2021" ,
								
								//update M-F only with same info as above,
								"datem":"04/14" ,
								"infom":"through 6:00pm 04/13/2021" ,

								
								"testingaverage":"45,259", 
								"peopletested":"6,235,216",
								"positivity":"1.30%" ,	
								"hospitalizations":"493"
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



