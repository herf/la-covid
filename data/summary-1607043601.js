$( document ).ready(function() {
    var data = {
				    "content": {          
				               	
								
								"count": "421,881",
								"death": "7,782" ,
								"dailycount": "7,854", 
								"dailydeath": "44" ,
								"date":"12/03" ,
								"info":"through 8:00pm 12/02/2020" ,
								
								"testingaverage":"66,120" , 
								"peopletested":"3,808,034" , 
								"positivity":"7.5%" , 
								"hospitalizations":"2,572"	

								
								
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



