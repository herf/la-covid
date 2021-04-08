$( document ).ready(function() {
    var data = {
				    "content": { 
								
								
								
								"count": "1,223,791",


								"death": "23,388",

								"dailycount": "710",


								"dailydeath": "52", 


								"date":"04/08" ,
								"info":"through 6:00pm 04/07/2021" ,
								
								//update M-F only with same info as above,
								"datem":"04/08" ,
								"infom":"through 6:00pm 04/07/2021" ,

								
								"testingaverage":"41,245", 
								"peopletested":"6,162,711",
								"positivity":"1.50%" ,	
								"hospitalizations":"572"
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



