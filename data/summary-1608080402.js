$( document ).ready(function() {
    var data = {
				    "content": {          
				               	
								
								"count": "543,769", 

								"death": "8,431" ,
								"dailycount": "11,194", 
								"dailydeath": "86" ,
								"date":"12/15" ,
								"info":"through 8:00pm 12/14/2020" ,
								
								"testingaverage":"91,592" ,
								"peopletested":"4,175,051" ,
								"positivity":"12.8%" , 
								"hospitalizations":"4,403" 
								
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



