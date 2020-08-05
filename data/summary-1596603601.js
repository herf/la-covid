$( document ).ready(function() {
    var data = {
				    "content": {            
				            "count": "195,614",
				            "death": "4,758" ,
				            "dailycount": "1,901",
				            "dailydeath": "57" ,
				            "date":"08/04" ,
				            "info":"through 8:00pm 08/03/2020" ,
				            
							"testingaverage":"17,171" ,
							"peopletested":"1,818,181" ,
							"positivity":"8.5%" ,
							"hospitalizations":"1,757" ,                    
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



