$( document ).ready(function() {
    var data = {
				    "content": {          
				               	
								"count": "677,299", 

								"death": "9,299" ,
								"dailycount": "13,678", 
								"dailydeath": "148" ,
								"date":"12/24" ,
								"info":"through 8:00pm 12/23/2020" ,
								
								"testingaverage":"97,963" ,
								"peopletested":"4,502,552" ,
								"positivity":"16.60%" , 
								"hospitalizations":"6,499" 						
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



