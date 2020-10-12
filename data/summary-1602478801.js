$( document ).ready(function() {
    var data = {
				    "content": {            
				                "count": "282,135",
								"death": "6,771" ,
								"dailycount": "971",
								"dailydeath": "3" ,
								 "date":"10/11" ,
								"info":"through 8:00pm 10/10/2020" ,
								 "testingaverage":"11,978" , 
								"peopletested":"2,816,134" , 
								"positivity":"3.20%" , 
								"hospitalizations":"715" 				
								
								
								
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



