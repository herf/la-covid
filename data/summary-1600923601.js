$( document ).ready(function() {
    var data = {
				    "content": {            
				            "count": "263,333",
				            "death": "6,423" ,
				            "dailycount": "1,265",
				            "dailydeath": "31" ,
				            "date":"09/23" ,
				            "info":"through 8:00pm 09/22/2020" ,
				            
							"testingaverage":"11,978" ,
							"peopletested":"2,575,643" ,
							"positivity":"2.9%" ,
							"hospitalizations":"779" 							
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



