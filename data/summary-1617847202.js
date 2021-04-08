$( document ).ready(function() {
    var data = {
				    "content": { 
								
								
								
								"count": "1,223,174",


								"death": "23,340",

								"dailycount": "479",


								"dailydeath": "53", 


								"date":"04/07" ,
								"info":"through 6:00pm 04/06/2021" ,
								
								//update M-F only with same info as above,
								"datem":"04/07" ,
								"infom":"through 6:00pm 04/06/2021" ,

								
								"testingaverage":"42,328", 
								"peopletested":"6,149,358",
								"positivity":"1.50%" ,	
								"hospitalizations":"552"
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



