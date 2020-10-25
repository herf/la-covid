$( document ).ready(function() {
    var data = {
				    "content": {            
				               "count": "298,937", 
								"death": "6,989" ,
								"dailycount": "2,173",
								"dailydeath": "17" ,
								"date":"10/24" ,
								"info":"through 8:00pm 10/23/2020" ,
								
								"testingaverage":"14,521" , 
								"peopletested":"3,007,011" , 
								"positivity":"3.4%" , 
								"hospitalizations":"770"	
								
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



