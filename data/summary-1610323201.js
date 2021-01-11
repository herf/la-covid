$( document ).ready(function() {
    var data = {
				    "content": { 								

								"count": "920177", 
								"death": "12250" ,
								"dailycount": "14482", 
								"dailydeath": "166" ,
								"date":"01/10" ,
								"info":"through 6:00pm 01/09/2021" ,
								
								"testingaverage":"77,804" , 
								"peopletested":"4,989,834 " ,
								"positivity":"20.80%" ,		
								"hospitalizations":"7,964 "		
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



