$( document ).ready(function() {
    var data = {
				    "content": {          
				               	
								

								"count": "746,089", 

								"death": "9,782" ,
								"dailycount": "12,979", 
								"dailydeath": "227" ,
								"date":"12/29" ,
								"info":"through 8:00pm 12/28/2020" ,
								
								"testingaverage":"103,723" , 
								"peopletested":"4,653,861" ,
								"positivity":"16.80%" , 
								"hospitalizations":"7,181" 						
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



