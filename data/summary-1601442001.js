$( document ).ready(function() {
    var data = {
				    "content": {            
				            "count": "269,284",
				            "death": "6,551" ,
				            "dailycount": "905",
				            "dailydeath": "39" ,
				            "date":"09/29" ,
				            "info":"through 8:00pm 09/28/2020" ,
				            
							"testingaverage":"12,477" ,
							"peopletested":"2,654,413" ,
							"positivity":"3%" ,
							"hospitalizations":"714" 							
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



