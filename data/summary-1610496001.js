$( document ).ready(function() {
    var data = {
				    "content": { 								

								"count": "944,319", 
								"death": "12,674" ,
								"dailycount": "11,994", 
								"dailydeath": "288" ,
								"date":"01/12" ,
								"info":"through 6:00pm 01/11/2021" ,
								
								"testingaverage":"80,992" , 
								"peopletested":"5,047,651" ,
								"positivity":"19.60%" ,		
								"hospitalizations":"7,926"		
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



