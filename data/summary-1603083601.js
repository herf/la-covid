$( document ).ready(function() {
    var data = {
				    "content": {            
				               "count": "288,451", 
								"death": "6,876" ,
								"dailycount": "358",
								"dailydeath": "13" ,
								"date":"10/18" ,
								"info":"through 8:00pm 10/17/2020" ,
								
								"testingaverage":"13,215" , 
								"peopletested":"2,892,473" , 
								"positivity":"3.2%" , 
								"hospitalizations":"752"	
								
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



