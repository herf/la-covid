$( document ).ready(function() {
    var data = {
				    "content": {          
				               								
								
								
								"count": "370,636", 
								"death": "7,446" ,
								"dailycount": "6,124",
								"dailydeath": "8" ,
								"date":"11/23" ,
								"info":"through 8:00pm 11/22/2020" ,
								
								"testingaverage":"58,706" ,
								"peopletested":"3,582,843" ,  
								"positivity":"6.4%" , 
								"hospitalizations":"1,473"	

								
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
				
				$('#tstavg').html(content.testingaverage);	
				$('#ppltst').html(content.peopletested);	
				$('#pos').html(content.positivity);	
				$('#hosp').html(content.hospitalizations);
			
							


});



