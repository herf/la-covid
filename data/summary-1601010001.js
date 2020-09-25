$( document ).ready(function() {
    var data = {
				    "content": {            
				            "count": "264,414",
				            "death": "6,455" ,
				            "dailycount": "1,165",
				            "dailydeath": "39" ,
				            "date":"09/24" ,
				            "info":"through 8:00pm 09/23/2020" ,
				            
							"testingaverage":"12,119" ,
							"peopletested":"2,592,419" ,
							"positivity":"2.9%" ,
							"hospitalizations":"753" 							
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



