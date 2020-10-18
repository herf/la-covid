$( document ).ready(function() {
    var data = {
				    "content": {            
				               "count": "288,136", 
								"death": "6,863" ,
								"dailycount": "953",
								"dailydeath": "10" ,
								"date":"10/17" ,
								"info":"through 8:00pm 10/16/2020" ,
								
								"testingaverage":"13,379" , 
								"peopletested":"2,890,697" , 
								"positivity":"3.2%" , 
								"hospitalizations":"746"	
								
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



