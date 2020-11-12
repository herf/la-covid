$( document ).ready(function() {
    var data = {
				    "content": {            
				               								
								"count": "327,964", 
								"death": "7,216" ,
								"dailycount": "2,152",
								"dailydeath": "22" ,
								"date":"11/11" ,
								"info":"through 8:00pm 11/10/2020" ,
								
								"testingaverage":"35,307" , 
								"peopletested":"3,302,004" , 
								"positivity":"4.7%" , 
								"hospitalizations":"903"	

								
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



