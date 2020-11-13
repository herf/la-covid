$( document ).ready(function() {
    var data = {
				    "content": {            
				               								
								"count": "330,450", 
								"death": "7,221" ,
								"dailycount": "2,533",
								"dailydeath": "7" ,
								"date":"11/12" ,
								"info":"through 8:00pm 11/11/2020" ,
								
								"testingaverage":"45,989" , 
								"peopletested":"3,319,959" , 
								"positivity":"4.9%" , 
								"hospitalizations":"953"	

								
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



