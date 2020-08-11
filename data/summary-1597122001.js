$( document ).ready(function() {
    var data = {
				    "content": {            
				            "count": "210,424" ,
				            "death": "4,996" ,
				            "dailycount": "1,920" ,
				            "dailydeath": "19" ,
				            "date":"08/10" ,
				            "info":"through 8:00pm 08/09/2020" ,
				            
							"testingaverage":"19,578" ,
							"peopletested":"1,952,322" ,
							"positivity":"7.1%" ,
							"hospitalizations":"1,514" ,                    
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



