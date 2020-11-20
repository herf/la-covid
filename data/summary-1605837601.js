$( document ).ready(function() {
    var data = {
				    "content": {            
				               								
								"count": "353,232", 
								"death": "7,363" ,
								"dailycount": "5,031",
								"dailydeath": "29" ,
								"date":"11/19" ,
								"info":"through 8:00pm 11/18/2020" ,
								
								"testingaverage":"52,365" , 
								"peopletested":"3,473,983" , 
								"positivity":"5.6%" , 
								"hospitalizations":"1,238"	

								
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



