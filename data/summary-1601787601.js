$( document ).ready(function() {
    var data = {
				    "content": {            
				            "count": "273,638",
				            "death": "6,642" ,
				            "dailycount": "1,062",
				            "dailydeath": "17" ,
				            "date":"10/03" ,
				            "info":"through 8:00pm 10/02/2020" ,
				            
							"testingaverage":"12,730" ,
							"peopletested":"2,706,464" ,
							"positivity":"3.1%" ,
							"hospitalizations":"698" 							
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



