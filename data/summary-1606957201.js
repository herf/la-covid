$( document ).ready(function() {
    var data = {
				    "content": {          
				               	
								
								"count": "414,185",
								"death": "7,740" ,
								"dailycount": "5,987", 
								"dailydeath": "40" ,
								"date":"12/02" ,
								"info":"through 8:00pm 12/01/2020" ,
								
								"testingaverage":"75,809" , 
								"peopletested":"3,779,882" , 
								"positivity":"7.3%" , 
								"hospitalizations":"2,439"	

								
								
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



