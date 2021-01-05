$( document ).ready(function() {
    var data = {
				    "content": { 								

								"count": "827,498", 
								"death": "10,850" ,
								"dailycount": "9,142", 
								"dailydeath": "77" ,
								"date":"01/04" ,
								"info":"through 8:00pm 01/03/2021" ,
								
								"testingaverage":"75,199" , 
								"peopletested":"4,804,155" ,
								"positivity":"19.40%" ,		
								"hospitalizations":"7,697"		
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



