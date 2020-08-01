$( document ).ready(function() {
    var data = {
				    "content": {            
				            "count": "188,481",
				            "death": "4,621" ,
				            "dailycount": "2,651",
				            "dailydeath": "69" ,
				            "date":"07/31" ,
				            "info":"through 8:00pm 07/30/2020" ,
				            
							"testingaverage":"17,374" ,
							"peopletested":"1,759,514" ,
							"positivity":"9.5%" ,
							"hospitalizations":"2,002" ,                    
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



